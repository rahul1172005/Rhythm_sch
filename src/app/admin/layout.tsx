import React from 'react';
import styles from './admin.module.css';
import Link from 'next/link';
import { LayoutDashboard, Utensils, ShoppingBasket, Settings, LogOut } from 'lucide-react';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.adminContainer}>
            <aside className={styles.sidebar}>
                <div className={styles.adminLogo}>TOT<span>.</span> ADMIN</div>
                <nav className={styles.adminNav}>
                    <Link href="/admin"><LayoutDashboard /> Dashboard</Link>
                    <Link href="/admin/menu"><Utensils /> Manage Menu</Link>
                    <Link href="/admin/orders"><ShoppingBasket /> Orders</Link>
                    <Link href="/admin/settings"><Settings /> Settings</Link>
                </nav>
                <div className={styles.sidebarFooter}>
                    <Link href="/"><LogOut /> Exit Admin</Link>
                </div>
            </aside>
            <main className={styles.adminContent}>
                {children}
            </main>
        </div>
    );
}
