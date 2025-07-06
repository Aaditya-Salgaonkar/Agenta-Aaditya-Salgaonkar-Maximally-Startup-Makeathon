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
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  projects  Project[]
}

model Project {
  id          String   @id @default(cuid())
  name        String
  description String?
  userId      String
  User        User     @relation(fields: [userId], references: [id])
  entries     Entry[]
}

model Entry {
  id          String   @id @default(cuid())
  amount      Float
  description String?
  type        Type
  projectId   String
  Project     Project  @relation(fields: [projectId], references: [id])
  createdAt   DateTime @default(now())
}

enum Type {
  income
  expense
}