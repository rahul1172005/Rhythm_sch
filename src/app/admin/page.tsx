import React from 'react';
import styles from './admin.module.css';
import { prisma } from '@/lib/prisma';
import { FileText, Calendar, FileCheck, Award, LogOut, Phone } from 'lucide-react';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import LogoutButton from "./LogoutButton";

export default async function AdminDashboard() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/admin/login');
    }

    const newInquiries = await prisma.deal.count({ where: { stage: 'BOOK_VISIT' } });
    const toursScheduled = await prisma.deal.count({ where: { stage: 'MEET_EDUCATORS' } });
    const applications = await prisma.deal.count({ where: { stage: 'APP_SUBMISSION' } });
    const enrolled = await prisma.deal.count({ where: { stage: 'WELCOME' } });

    const recentInquiries = await prisma.deal.findMany({
        include: { account: true },
        orderBy: { createdAt: 'desc' },
        take: 5
    });

    return (
        <div className={styles.dashboard}>
            <header className={styles.dashboardHeader}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1>Admissions CRM</h1>
                        <p style={{ marginTop: '5px', color: '#6b7280', fontSize: '15px' }}>Welcome back, {session.user?.name || 'Admin'}. Here is your enrollment activity.</p>
                    </div>
                    <LogoutButton />
                </div>
            </header>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: '#DBEAFE', color: '#1E40AF' }}><FileText /></div>
                    <div className={styles.statInfo}>
                        <span>New Inquiries</span>
                        <h3>{newInquiries}</h3>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: '#FEF3C7', color: '#92400E' }}><Calendar /></div>
                    <div className={styles.statInfo}>
                        <span>Tours Scheduled</span>
                        <h3>{toursScheduled}</h3>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: '#FCE7F3', color: '#9D174D' }}><FileCheck /></div>
                    <div className={styles.statInfo}>
                        <span>Applications</span>
                        <h3>{applications}</h3>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: '#D1FAE5', color: '#065F46' }}><Award /></div>
                    <div className={styles.statInfo}>
                        <span>Enrolled Students</span>
                        <h3>{enrolled}</h3>
                    </div>
                </div>
            </div>

            <section className={styles.recentOrders}>
                <div className={styles.sectionHead}>
                    <h2>Recent Inquiries</h2>
                </div>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Child Name</th>
                                <th>Parent</th>
                                <th>Program</th>
                                <th>Stage</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentInquiries.length === 0 ? (
                                <tr>
                                    <td colSpan={5} style={{ textAlign: 'center', padding: '40px' }}>No inquiries received yet.</td>
                                </tr>
                            ) : (
                                recentInquiries.map(inquiry => (
                                    <tr key={inquiry.id}>
                                        <td><strong>{inquiry.childName}</strong></td>
                                        <td>
                                            <strong>{inquiry.account.familyName}</strong>
                                            <div style={{ fontSize: '12px', color: '#6b7280', display: 'flex', gap: '5px', marginTop: '3px' }}><Phone size={12} /> {inquiry.account.phone}</div>
                                        </td>
                                        <td>{inquiry.program.replace('_', ' ')}</td>
                                        <td>
                                            <span className={`${styles.statusBadge} ${styles[inquiry.stage.toLowerCase()]}`}>
                                                {inquiry.stage.replace('_', ' ')}
                                            </span>
                                        </td>
                                        <td>{new Date(inquiry.createdAt).toLocaleDateString()}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
