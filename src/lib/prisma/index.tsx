import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.PROJECT_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({ log: ['query', 'error', 'warn'] });
  }
  prisma = global.prisma;
}

export default prisma;
