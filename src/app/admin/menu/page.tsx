import React from 'react';
import { prisma } from '@/lib/prisma';
import styles from '../admin.module.css';
import { Plus, Edit, Trash, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default async function AdminMenu() {
    const items = await prisma.menuItem.findMany({
        include: { category: true },
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div className={styles.adminPage}>
            <header className={styles.sectionHead}>
                <div>
                    <h1>Manage Menu</h1>
                    <p>Add, edit or remove items from your menu.</p>
                </div>
                <button className={styles.primaryActionBtn}>
                    <Plus size={20} /> Add New Item
                </button>
            </header>

            <div className={styles.recentOrders}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <div className={styles.itemThumb}>
                                            <Image src={item.imageUrl} alt={item.name} width={50} height={50} style={{ objectFit: 'cover', borderRadius: '8px' }} />
                                        </div>
                                    </td>
                                    <td>
                                        <strong>{item.name}</strong>
                                        <p style={{ fontSize: '12px', color: '#888' }}>{item.isVeg ? 'Veg' : 'Non-Veg'}</p>
                                    </td>
                                    <td>{item.category.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>
                                        <span className={`${styles.statusBadge} ${item.isAvailable ? styles.ready : styles.new}`}>
                                            {item.isAvailable ? 'Available' : 'Sold Out'}
                                        </span>
                                    </td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <button className={styles.iconBtn}><Edit size={16} /></button>
                                            <button className={styles.iconBtn} style={{ color: '#E31837' }}><Trash size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
