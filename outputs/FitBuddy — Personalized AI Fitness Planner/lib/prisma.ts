typescript
// prisma.ts

import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: null | PrismaClient;
}

const client = globalThis.prisma || new PrismaClient();

if (process.env.RESET_DATABASE) {
  // If the RESET_DATABASE environment variable is set, reset the database
  client.$transaction(client.empty => [
    client.${pluralize(this.constructor.name)}.deleteMany(),
    ...client.${pluralize(this.constructor.name)}.createMany({
      data: [],
    }),
  ]);
}

globalThis.prisma = client;

export default client;

// utils.ts

import { pluralize } from 'pluralize';

export { pluralize };