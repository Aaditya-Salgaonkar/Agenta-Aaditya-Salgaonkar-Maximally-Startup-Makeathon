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
  password  String
  projects  Project[]
}

model Project {
  id          Int      @id @default(autoincrement())
  name        String
  description String?
  createdBy   User     @relation(fields: [createdById], references: [id])
  createdById  Int
  downloadUrl String
  expiresAt   DateTime
  users       User[]   @relation(references: [id])
}

// components/ProjectsPage.tsx

import { useUser } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import prisma from "../prisma";
import { Project } from "@prisma/client";

interface ProjectsPageProps {}

export const ProjectsPage: React.FC<ProjectsPageProps> = () => {
  const { user } = useUser();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        const projects = await prisma.project.findMany({
          where: {
            users: {
              some: {
                id: user.id,
              },
            },
          },
        });
        setProjects(projects);
      };
      fetchData().catch(console.error);
    }
  }, [user]);

  return (
    <div>
      <h1>Your Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>Download URL: {project.downloadUrl}</p>
          <p>Expires at: {new Date(project.expiresAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};