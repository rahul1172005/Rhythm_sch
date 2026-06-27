import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // 1. Clean existing database
    await prisma.activity.deleteMany({});
    await prisma.deal.deleteMany({});
    await prisma.contact.deleteMany({});
    await prisma.account.deleteMany({});
    await prisma.user.deleteMany({});

    // 2. Create Admin User
    const admin = await prisma.user.create({
        data: {
            email: 'admin@rhythmpreschool.com',
            name: 'Rhythm Admin',
            password: 'admin', // Keep it simple for local prototype/demo authentication
            role: 'ADMIN',
        },
    });

    console.log('Seeded User:', admin.email);

    // 3. Create family accounts & inquiries (admissions pipeline deals)
    // Family 1: The Sharma Family
    const sharmaAccount = await prisma.account.create({
        data: {
            familyName: 'Sharma Family',
            email: 'parent.sharma@example.com',
            phone: '+91 95662 63956',
            address: 'Flat 402, Green Glen Layout, Bangalore',
        },
    });

    await prisma.contact.createMany({
        data: [
            {
                name: 'Rohan Sharma',
                type: 'PARENT',
                accountId: sharmaAccount.id,
            },
            {
                name: 'Aarav Sharma',
                type: 'CHILD',
                gender: 'MALE',
                accountId: sharmaAccount.id,
            },
        ],
    });

    const sharmaDeal = await prisma.deal.create({
        data: {
            title: "Aarav's Nursery Admission",
            childName: 'Aarav Sharma',
            program: 'NURSERY',
            stage: 'MEET_EDUCATORS',
            status: 'OPEN',
            healthScore: 85,
            accountId: sharmaAccount.id,
        },
    });

    await prisma.activity.createMany({
        data: [
            {
                type: 'SYSTEM',
                description: 'Inquiry received online for Nursery.',
                accountId: sharmaAccount.id,
                dealId: sharmaDeal.id,
                createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
            },
            {
                type: 'CALL',
                description: 'Called parent. Outlined program curriculum. Parent requested campus visit.',
                accountId: sharmaAccount.id,
                dealId: sharmaDeal.id,
                createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
            },
            {
                type: 'MEETING',
                description: 'Campus visit scheduled for next Tuesday.',
                accountId: sharmaAccount.id,
                dealId: sharmaDeal.id,
                createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
            },
        ],
    });

    // Family 2: The Smith Family
    const smithAccount = await prisma.account.create({
        data: {
            familyName: 'Smith Family',
            email: 'parent.smith@example.com',
            phone: '+1 (555) 019-9281',
            address: '742 Evergreen Terrace, Springfield',
        },
    });

    await prisma.contact.createMany({
        data: [
            {
                name: 'Alice Smith',
                type: 'PARENT',
                accountId: smithAccount.id,
            },
            {
                name: 'Lily Smith',
                type: 'CHILD',
                gender: 'FEMALE',
                accountId: smithAccount.id,
            },
        ],
    });

    const smithDeal = await prisma.deal.create({
        data: {
            title: "Lily's Play Group Admission",
            childName: 'Lily Smith',
            program: 'PLAYGROUP',
            stage: 'BOOK_VISIT',
            status: 'OPEN',
            healthScore: 95,
            accountId: smithAccount.id,
        },
    });

    await prisma.activity.create({
        data: {
            type: 'SYSTEM',
            description: 'Online registration submitted. Requested campus tour booking.',
            accountId: smithAccount.id,
            dealId: smithDeal.id,
            createdAt: new Date(),
        },
    });

    // Family 3: The Patel Family
    const patelAccount = await prisma.account.create({
        data: {
            familyName: 'Patel Family',
            email: 'parent.patel@example.com',
            phone: '+91 99887 76655',
            address: '12B Sky Heights, Mumbai',
        },
    });

    await prisma.contact.createMany({
        data: [
            {
                name: 'Dev Patel',
                type: 'PARENT',
                accountId: patelAccount.id,
            },
            {
                name: 'Sia Patel',
                type: 'CHILD',
                gender: 'FEMALE',
                accountId: patelAccount.id,
            },
        ],
    });

    const patelDeal = await prisma.deal.create({
        data: {
            title: "Sia's Senior KG Admission",
            childName: 'Sia Patel',
            program: 'SENIOR_KG',
            stage: 'WELCOME',
            status: 'WON',
            healthScore: 100,
            accountId: patelAccount.id,
        },
    });

    await prisma.activity.createMany({
        data: [
            {
                type: 'SYSTEM',
                description: 'Application submitted online for Senior KG.',
                accountId: patelAccount.id,
                dealId: patelDeal.id,
                createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
            },
            {
                type: 'MEETING',
                description: 'Campus visit and assessment completed. SIA showed great social skills.',
                accountId: patelAccount.id,
                dealId: patelDeal.id,
                createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
            },
            {
                type: 'EMAIL',
                description: 'Offer letter sent via email.',
                accountId: patelAccount.id,
                dealId: patelDeal.id,
                createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
            },
            {
                type: 'SYSTEM',
                description: 'Payment received. Registration completed. Child enrolled in Senior KG!',
                accountId: patelAccount.id,
                dealId: patelDeal.id,
                createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
            },
        ],
    });

    console.log('Successfully seeded database with Accounts, Contacts, Deals, and Activities!');
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
