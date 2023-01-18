import { PrismaClient } from "@prisma/client";

// initialize the db connection
const prisma = new PrismaClient();

export default prisma;
