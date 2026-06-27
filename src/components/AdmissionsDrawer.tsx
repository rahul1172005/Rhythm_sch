"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar } from 'lucide-react';
import { useAdmissions } from '@/context/AdmissionsContext';
import styles from './AdmissionsDrawer.module.css';
import toast from 'react-hot-toast';

const AdmissionsDrawer = () => {
    const { inquiryOpen, setInquiryOpen, selectedProgram, setSelectedProgram } = useAdmissions();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        parentName: '',
        email: '',
        phone: '',
        childName: '',
        program: '',
        tourDate: '',
        notes: ''
    });

    // Sync selected program from context
    useEffect(() => {
        if (selectedProgram) {
            setFormData(prev => ({ ...prev, program: selectedProgram }));
        }
    }, [selectedProgram]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/admissions/inquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                toast.success('Inquiry submitted! We will contact you soon.');
                // Reset form
                setFormData({
                    parentName: '',
                    email: '',
                    phone: '',
                    childName: '',
                    program: '',
                    tourDate: '',
                    notes: ''
                });
                setSelectedProgram('');
                setInquiryOpen(false);
            } else {
                toast.error(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            toast.error('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {inquiryOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setInquiryOpen(false)}
                        className={styles.overlay}
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className={styles.drawer}
                    >
                        <div className={styles.header}>
                            <h2>Book a Campus Tour</h2>
                            <button onClick={() => setInquiryOpen(false)} className={styles.closeBtn}>
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.formContent}>
                            <div className={styles.formGroup}>
                                <label htmlFor="parentName">Parent Name *</label>
                                <input
                                    type="text"
                                    id="parentName"
                                    name="parentName"
                                    required
                                    value={formData.parentName}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="Enter parent's full name"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="yourname@example.com"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="e.g. +91 98765 43210"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="childName">Child Name *</label>
                                <input
                                    type="text"
                                    id="childName"
                                    name="childName"
                                    required
                                    value={formData.childName}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="Enter child's name"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="program">Program of Interest *</label>
                                <select
                                    id="program"
                                    name="program"
                                    required
                                    value={formData.program}
                                    onChange={handleChange}
                                    className={styles.select}
                                >
                                    <option value="">Select a Program</option>
                                    <option value="PLAYGROUP">Play Group (2–3 Years)</option>
                                    <option value="NURSERY">Nursery (3–4 Years)</option>
                                    <option value="JUNIOR_KG">Junior KG (4–5 Years)</option>
                                    <option value="SENIOR_KG">Senior KG (5–6 Years)</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="tourDate">Preferred Tour Date *</label>
                                <input
                                    type="date"
                                    id="tourDate"
                                    name="tourDate"
                                    required
                                    value={formData.tourDate}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="notes">Questions / Comments</label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    rows={4}
                                    value={formData.notes}
                                    onChange={handleChange}
                                    className={styles.textarea}
                                    placeholder="Any specific questions or details you would like to share?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={styles.submitBtn}
                            >
                                {loading ? 'Submitting...' : 'Schedule Visit'}
                            </button>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default AdmissionsDrawer;
