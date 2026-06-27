import React from 'react';
import styles from './admin.module.css';
import Link from 'next/link';
import { LayoutDashboard, Users, LogOut, FileText } from 'lucide-react';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.adminContainer}>
            <aside className={styles.sidebar}>
                <div className={styles.adminLogo}>Rhythm PreSchool Admin</div>
                <nav className={styles.adminNav}>
                    <Link href="/admin"><LayoutDashboard size={18} /> Dashboard</Link>
                    <Link href="/admin/inquiries"><FileText size={18} /> Inquiries</Link>
                </nav>
                <div className={styles.sidebarFooter}>
                    <Link href="/"><LogOut size={18} /> Exit Admin</Link>
                </div>
            </aside>
            <main className={styles.adminContent}>
                {children}
            </main>
        </div>
    );
}
