
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()


const userNamesById: any = {
 1: 'Loren',
 2: 'Jessica'
}



async function run() {
 console.log('start script');

 // we put code here

 for (const id in userNamesById) {
  console.log(userNamesById[id])

  await prisma.user.update({
   where: { id: Number(id), name: null },
   data: { name: userNamesById[id] }
  })
 }
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