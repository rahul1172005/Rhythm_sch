import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function resetAdmin() {
    const adminEmail = 'admin@tot.com';

    // Delete if exists
    try {
        await prisma.user.delete({
            where: { email: adminEmail }
        });
        console.log('Deleted existing admin.');
    } catch (e) {
        console.log('Admin did not exist or could not delete.');
    }

    // Create fresh
    const admin = await prisma.user.create({
        data: {
            email: adminEmail,
            name: 'TOT Admin',
            password: 'admin', // Explicitly 'admin'
            role: 'ADMIN',
        },
    });

    console.log('Created admin:', admin);

    const allUsers = await prisma.user.findMany();
    console.log("ALL USERS IN DB:", allUsers);
}

resetAdmin()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
