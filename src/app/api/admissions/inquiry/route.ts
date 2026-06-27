import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { parentName, email, phone, childName, program, tourDate, notes } = body;

        // Validation
        if (!parentName || !email || !phone || !childName || !program || !tourDate) {
            return NextResponse.json(
                { error: 'Please provide all required fields.' },
                { status: 400 }
            );
        }

        // 1. Find or create the Account based on Parent Email
        const familyName = `${parentName.split(' ')[0]} Family`;
        const account = await prisma.account.upsert({
            where: { email },
            update: { phone }, // Update phone if they submit a new one
            create: {
                familyName,
                email,
                phone,
            },
        });

        // 2. Create the Parent Contact if not exists
        const existingParentContact = await prisma.contact.findFirst({
            where: {
                name: parentName,
                type: 'PARENT',
                accountId: account.id,
            },
        });

        if (!existingParentContact) {
            await prisma.contact.create({
                data: {
                    name: parentName,
                    type: 'PARENT',
                    accountId: account.id,
                },
            });
        }

        // 3. Create the Child Contact
        const childContact = await prisma.contact.create({
            data: {
                name: childName,
                type: 'CHILD',
                accountId: account.id,
            },
        });

        // 4. Create the Admissions Deal (Pipeline Lead)
        const programLabel = program.toUpperCase(); // PLAYGROUP, NURSERY, JUNIOR_KG, SENIOR_KG
        const deal = await prisma.deal.create({
            data: {
                title: `${childName}'s ${program.replace('_', ' ')} Admission`,
                childName,
                program: programLabel,
                stage: 'BOOK_VISIT',
                status: 'OPEN',
                healthScore: 95, // High starting health score for new inquiries
                accountId: account.id,
            },
        });

        // 5. Create the Initial Activity Logs
        await prisma.activity.create({
            data: {
                type: 'SYSTEM',
                description: `Online tour request received. Preferred Date: ${tourDate}.`,
                accountId: account.id,
                dealId: deal.id,
            },
        });

        if (notes && notes.trim() !== '') {
            await prisma.activity.create({
                data: {
                    type: 'NOTE',
                    description: `Parent comment: "${notes}"`,
                    accountId: account.id,
                    dealId: deal.id,
                },
            });
        }

        return NextResponse.json({ success: true, dealId: deal.id });
    } catch (error: any) {
        console.error('Admissions Inquiry Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error. Please try again.' },
            { status: 500 }
        );
    }
}
