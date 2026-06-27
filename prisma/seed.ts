import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const adminEmail = 'admin@tot.com';
    // In a real app, hash this password! For now, simple string comparison for demo speed if user allows, 
    // but better to use simple hashing or just storing plain text if this is a prototype.
    // Given the "NextAuth" dependency, using bcrypt is standard. 
    // However, I don't see bcrypt in package.json. 
    // I will check if I can add it, or just use plain text for now and matching in NextAuth credential provider.
    // The user asked for "username and password". I will use email as username for simplicity or add a username field.
    // The schema has `email` and `password`.

    const admin = await prisma.user.upsert({
        where: { email: adminEmail },
        update: {},
        create: {
            email: adminEmail,
            name: 'TOT Admin',
            password: 'admin', // PLAIN TEXT for simplicity in this prototype unless requested otherwise.
            role: 'ADMIN',
        },
    });

    console.log({ admin });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
