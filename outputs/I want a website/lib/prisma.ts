// db.js

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

if (process.env.NODE_ENV === 'development') {
  prisma.$connect()
}

export default prisma