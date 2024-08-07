import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function run() {
 console.log('start script');

 await prisma.user.createMany({
  data: [
   {
    id: 1,
    email: "test@gmail.com"
   },
   {
    id: 2,
    email: "test2@yahoo.com"
   }
  ]
 })
 const allUsers = await prisma.user.findMany()
 console.log(allUsers)

}

run()
 .then(async () => {
  await prisma.$disconnect()
 })
 .catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
 })