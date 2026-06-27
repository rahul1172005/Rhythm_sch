"use client";
import React, { useState, useEffect } from 'react';
import styles from '../admin.module.css';
import { CheckCircle2, ChevronRight, User, Phone, Mail, Filter } from 'lucide-react';
import toast from 'react-hot-toast';

type Deal = {
    id: string;
    title: string;
    childName: string;
    program: string;
    stage: string;
    status: string;
    healthScore: number;
    createdAt: string;
    account: {
        familyName: string;
        email: string;
        phone: string;
    };
};

const STAGES = ['BOOK_VISIT', 'MEET_EDUCATORS', 'APP_SUBMISSION', 'CONFIRMATION', 'WELCOME'];

export default function AdminInquiries() {
    const [deals, setDeals] = useState<Deal[]>([]);
    const [loading, setLoading] = useState(true);
    const [filterProgram, setFilterProgram] = useState('ALL');
    const [filterStage, setFilterStage] = useState('ALL');

    const fetchDeals = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/admissions/list');
            if (res.ok) {
                const data = await res.json();
                setDeals(data.deals);
            } else {
                toast.error('Failed to load inquiries.');
            }
        } catch (error) {
            toast.error('Network error loading inquiries.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDeals();
    }, []);

    const handleAdvance = async (dealId: string, currentStage: string) => {
        const currentIndex = STAGES.indexOf(currentStage);
        if (currentIndex === -1 || currentIndex === STAGES.length - 1) return; // Already at final stage
        
        const nextStage = STAGES[currentIndex + 1];
        try {
            const res = await fetch('/api/admissions/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ dealId, stage: nextStage })
            });

            if (res.ok) {
                toast.success('Stage advanced successfully!');
                fetchDeals();
            } else {
                toast.error('Failed to update stage.');
            }
        } catch (error) {
            toast.error('Network error updating stage.');
        }
    };

    const getStageLabel = (stage: string) => {
        return stage.replace('_', ' ');
    };

    // Filter deals
    const filteredDeals = deals.filter(deal => {
        const matchProgram = filterProgram === 'ALL' || deal.program === filterProgram;
        const matchStage = filterStage === 'ALL' || deal.stage === filterStage;
        return matchProgram && matchStage;
    });

    return (
        <div className={styles.adminPage}>
            <header className={styles.sectionHead}>
                <div>
                    <h1 style={{ fontSize: '36px', fontWeight: 800, fontFamily: 'Poppins' }}>Manage Inquiries</h1>
                    <p style={{ fontFamily: 'Nunito', fontSize: '16px', color: '#6b7280' }}>Track, audit, and advance student admissions from inquiries to orientation.</p>
                </div>
            </header>

            {/* Filter Section */}
            <div className={styles.recentOrders} style={{ marginBottom: '30px', padding: '20px 30px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '14px' }}>
                        <Filter size={16} /> Filters:
                    </div>
                    
                    <div>
                        <select
                            value={filterProgram}
                            onChange={(e) => setFilterProgram(e.target.value)}
                            style={{ padding: '8px 12px', border: '1.5px solid #d1d5db', borderRadius: '6px', outline: 'none' }}
                        >
                            <option value="ALL">All Programs</option>
                            <option value="PLAYGROUP">Play Group</option>
                            <option value="NURSERY">Nursery</option>
                            <option value="JUNIOR_KG">Junior KG</option>
                            <option value="SENIOR_KG">Senior KG</option>
                        </select>
                    </div>

                    <div>
                        <select
                            value={filterStage}
                            onChange={(e) => setFilterStage(e.target.value)}
                            style={{ padding: '8px 12px', border: '1.5px solid #d1d5db', borderRadius: '6px', outline: 'none' }}
                        >
                            <option value="ALL">All Stages</option>
                            <option value="BOOK_VISIT">Book Visit</option>
                            <option value="MEET_EDUCATORS">Meet Educators</option>
                            <option value="APP_SUBMISSION">App Submission</option>
                            <option value="CONFIRMATION">Confirmation</option>
                            <option value="WELCOME">Welcome / Enrolled</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className={styles.recentOrders}>
                <div className={styles.tableWrapper}>
                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '40px' }}>Loading inquiries...</div>
                    ) : filteredDeals.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '40px' }}>No inquiries match the filters.</div>
                    ) : (
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Child Name</th>
                                    <th>Parent & Contact</th>
                                    <th>Program</th>
                                    <th>Stage</th>
                                    <th>Health</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredDeals.map(deal => (
                                    <tr key={deal.id}>
                                        <td>
                                            <strong style={{ fontSize: '16px' }}>{deal.childName}</strong>
                                        </td>
                                        <td>
                                            <div>{deal.account.familyName}</div>
                                            <div style={{ display: 'flex', gap: '15px', marginTop: '5px', fontSize: '12px', color: '#6b7280' }}>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><Phone size={12} /> {deal.account.phone}</span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><Mail size={12} /> {deal.account.email}</span>
                                            </div>
                                        </td>
                                        <td><strong>{deal.program.replace('_', ' ')}</strong></td>
                                        <td>
                                            <span className={`${styles.statusBadge} ${styles[deal.stage.toLowerCase()]}`}>
                                                {getStageLabel(deal.stage)}
                                            </span>
                                        </td>
                                        <td>
                                            <span style={{ 
                                                fontWeight: 800, 
                                                color: deal.healthScore >= 90 ? '#10B981' : deal.healthScore >= 80 ? '#F59E0B' : '#EF4444' 
                                            }}>
                                                {deal.healthScore}%
                                            </span>
                                        </td>
                                        <td>{new Date(deal.createdAt).toLocaleDateString()}</td>
                                        <td>
                                            {deal.stage !== 'WELCOME' ? (
                                                <button
                                                    onClick={() => handleAdvance(deal.id, deal.stage)}
                                                    className={styles.primaryActionBtn}
                                                    style={{ padding: '6px 12px', fontSize: '12px', boxShadow: '2px 2px 0px var(--deep-black)', border: '1.5px solid var(--deep-black)' }}
                                                    title="Advance to next stage"
                                                >
                                                    Next Stage <ChevronRight size={14} />
                                                </button>
                                            ) : (
                                                <span style={{ color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 800 }}>
                                                    <CheckCircle2 size={16} /> Enrolled
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}
