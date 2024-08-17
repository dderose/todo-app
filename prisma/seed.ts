import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const dan = await prisma.user.upsert({
        where: { email: 'dan.derose@gmail.com' },
        update: {},
        create: {
            email: 'dan.derose@gmail.com',
            first_name: 'Dan',
            last_name: 'DeRose',
            avatar: '/',
            todos: {
                create: {
                    id: '3641107c-03d9-415c-b562-417e325cde18',
                    name: 'Task 1',
                    description: 'This is the first task on your road to world domination.',
                    due: '2024-08-30 03:54:15Z',
                    complete: false,
                }
            }
        },
    });
    const satya = await prisma.user.upsert({
        where: { email: 'satya@untetherlabs.com' },
        update: {},
        create: {
            email: 'satya@untetherlabs.com',
            first_name: 'Satya',
            last_name: 'Patel',
            avatar: '/'
        },
    });
    const melanie = await prisma.user.upsert({
        where: { email: 'melanie@untetherlabs.com' },
        update: {},
        create: {
            email: 'melanie@untetherlabs.com',
            first_name: 'Melanie',
            last_name: 'McDougall',
            avatar: '/'
        },
    });
    const aditya = await prisma.user.upsert({
        where: { email: 'aditya@untetherlabs.com' },
        update: {},
        create: {
            email: 'aditya@untetherlabs.com',
            first_name: 'Aditya',
            last_name: 'Sharma',
            avatar: '/'
        },
    });
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })