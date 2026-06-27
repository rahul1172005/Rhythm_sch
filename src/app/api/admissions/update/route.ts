import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { dealId, stage, status } = body;

        if (!dealId) {
            return NextResponse.json({ error: 'Deal ID is required' }, { status: 400 });
        }

        const deal = await prisma.deal.findUnique({
            where: { id: dealId },
        });

        if (!deal) {
            return NextResponse.json({ error: 'Deal not found' }, { status: 440 });
        }

        // Recalculate health score based on stage
        let healthScore = deal.healthScore;
        if (stage) {
            const stages = ['BOOK_VISIT', 'MEET_EDUCATORS', 'APP_SUBMISSION', 'CONFIRMATION', 'WELCOME'];
            const idx = stages.indexOf(stage);
            if (idx !== -1) {
                healthScore = Math.min(100, 75 + idx * 5); // 75, 80, 85, 90, 100
            }
        }

        const updatedDeal = await prisma.deal.update({
            where: { id: dealId },
            data: {
                stage: stage || deal.stage,
                status: status || (stage === 'WELCOME' ? 'WON' : deal.status),
                healthScore,
            },
        });

        // Add activity log
        await prisma.activity.create({
            data: {
                type: 'SYSTEM',
                description: `Admissions stage updated to: ${stage.replace('_', ' ')} by admin.`,
                accountId: deal.accountId,
                dealId: deal.id,
            },
        });

        return NextResponse.json({ success: true, deal: updatedDeal });
    } catch (error) {
        console.error('Update deal error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
