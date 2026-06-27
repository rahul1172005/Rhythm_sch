import React from 'react';
import styles from './admin.module.css';
import { prisma } from '@/lib/prisma';
import { DollarSign, ShoppingBag, Users, Clock } from 'lucide-react';

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/admin/login');
    }

    const orders = await prisma.order.findMany({ orderBy: { createdAt: 'desc' }, take: 5 });
    const totalOrders = await prisma.order.count();
    const menuItems = await prisma.menuItem.count();
    const newOrdersCount = await prisma.order.count({ where: { status: 'NEW' } });

    return (
        <div className={styles.dashboard}>
            <header className={styles.dashboardHeader}>
                <h1>Dashboard</h1>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p>Welcome back, TOT Admin.</p>
                    <LogoutButton />
                </div>
            </header>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: '#E31837' }}><DollarSign /></div>
                    <div className={styles.statInfo}>
                        <span>Total Sales</span>
                        <h3>₹0.00</h3>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: '#FFB800' }}><ShoppingBag /></div>
                    <div className={styles.statInfo}>
                        <span>Total Orders</span>
                        <h3>{totalOrders}</h3>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: '#2ECC71' }}><Users /></div>
                    <div className={styles.statInfo}>
                        <span>Items on Menu</span>
                        <h3>{menuItems}</h3>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: '#FF6B00' }}><Clock /></div>
                    <div className={styles.statInfo}>
                        <span>Pending Orders</span>
                        <h3>{newOrdersCount}</h3>
                    </div>
                </div>
            </div>

            <section className={styles.recentOrders}>
                <div className={styles.sectionHead}>
                    <h2>Recent Orders</h2>
                    <button className={styles.viewAllBtn}>View All</button>
                </div>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length === 0 ? (
                                <tr>
                                    <td colSpan={5} style={{ textAlign: 'center', padding: '40px' }}>No orders yet.</td>
                                </tr>
                            ) : (
                                orders.map(order => (
                                    <tr key={order.id}>
                                        <td>#{order.orderNumber}</td>
                                        <td>{order.customerName}</td>
                                        <td>₹{order.total.toFixed(2)}</td>
                                        <td><span className={`${styles.statusBadge} ${styles[order.status.toLowerCase()]}`}>{order.status}</span></td>
                                        <td>{new Date(order.createdAt).toLocaleDateString()}</td>
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

// Client helper for logout
import LogoutButton from "./LogoutButton";
