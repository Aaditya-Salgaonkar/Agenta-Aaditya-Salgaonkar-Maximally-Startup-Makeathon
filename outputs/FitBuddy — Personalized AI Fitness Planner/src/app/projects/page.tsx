typescript
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int       @id @default(autoincrement())
  email     String    @unique
  name      String?
  password  String
  projects  Project[]
}

model Project {
  id          Int      @id @default(autoincrement())
  name        String
  description String?
  Goal        Goal[]
  Equipment   Equipment[]
  Schedule    Schedule[]
  Videos      Video[]
  User        User     @relation(fields: [userId], references: [id])
  userId      Int
}

model Goal {
  id   Int    @id @default(autoincrement())
  name String
  Project Project @relation(fields: [projectId], references: [id])
  projectId Int
}

model Equipment {
  id   Int    @id @default(autoincrement())
  name String
  Project Project @relation(fields: [projectId], references: [id])
  projectId Int
}

model Schedule {
  id          Int    @id @default(autoincrement())
  day         String
  time        String
  Project     Project @relation(fields: [projectId], references: [id])
  projectId   Int
}

model Video {
  id         Int    @id @default(autoincrement())
  url        String
  description String?
  Project    Project @relation(fields: [projectId], references: [id])
  projectId  Int
}

// components/ProjectsPage.tsx

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import prisma from "../lib/prisma";

interface Project {
  id: number;
  name: string;
  description?: string | null;
}

interface User {
  id: number;
  email: string;
  name?: string | null;
  projects: Project[];
}

const ProjectsPage = () => {
  const { user } = useUser();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (user) {
      fetchUserProjects(user.id);
    }
  }, [user]);

  const fetchUserProjects = async (userId: number) => {
    const data = await prisma.user.findUnique({
      where: { id: userId },
      include: { projects: true },
    });
    setProjects(data.projects);
  };

  return (
    <div>
      <h1>Your Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description || "No description"}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;