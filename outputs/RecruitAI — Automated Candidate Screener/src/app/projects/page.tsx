typescript
// prisma/schema.prisma

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

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

// components/ProjectCard/index.tsx

import React from "react";
import { Project } from "../types/project";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;

// pages/projects.tsx

import { useUser } from "@clerk/nextjs";
import prisma from "../../prisma/schema";
import ProjectCard from "../../components/ProjectCard";

interface Project extends prisma.Project {
  user: prisma.User;
}

const Projects: React.FC = () => {
  const { user } = useUser();
  const [projects, setProjects] = React.useState<Project[]>([]);

  React.useEffect(() => {
    if (user?.id) {
      const fetchData = async () => {
        const data = await prisma.user.findUnique({
          where: { id: user.id },
          include: { projects: true },
        });

        setProjects(data?.projects || []);
      };

      fetchData();
    }
  }, [user]);

  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;

// types/project.ts

export interface Project {
  id: number;
  name: string;
  description?: string | null;
  userId: number;
  user: {
    id: number;
    name?: string | null;
    email: string;
  };
}