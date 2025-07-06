typescript
// prisma/schema.prisma

model User {
  id        Int       @id @default(autoincrement())
  email     String    @unique
  name      String?
  projects  Project[]
}

model Project {
  id          Int      @id @default(autoincrement())
  name        String
  description String?
  userId      Int
  user        User     @relation(fields: [userId], references: [id])
}

// components/ProjectListingPage.tsx

import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import prisma from "../prisma";

interface Project {
  id: number;
  name: string;
  description?: string | null;
}

interface UserResponse {
  user: {
    id: number;
    email: string;
    name?: string | null;
    projects: Project[];
  };
}

const ProjectListingPage = () => {
  const { user } = useUser();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        const response = await prisma.user.findUnique({
          where: { email: user.email! },
          include: { projects: true },
        });

        setProjects(response?.projects || []);
      };

      fetchData();
    }
  }, [user]);

  return (
    <div>
      <h1>Your Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description || "No description"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectListingPage;