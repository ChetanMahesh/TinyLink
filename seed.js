const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
async function main(){
  await prisma.link.createMany({
    data: [
      { code: 'abc123', url: 'https:
    ],
    skipDuplicates: true,
  })
}
main().catch(e=>{ console.error(e); process.exit(1)}).finally(()=>prisma.$disconnect())
