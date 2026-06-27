import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const deals = await prisma.deal.findMany({
            include: {
                account: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

        return NextResponse.json({ deals });
    } catch (error) {
        console.error('List deals error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
