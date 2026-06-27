"use client";
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./contact.module.css";
import toast from 'react-hot-toast';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
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
                setFormData({
                    parentName: '',
                    email: '',
                    phone: '',
                    childName: '',
                    program: '',
                    tourDate: '',
                    notes: ''
                });
            } else {
                toast.error(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            toast.error('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const scrollAnimationProps = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6 }
    };

    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>CONTACT US</h1>
                    <p className={styles.subtitle}>Get in touch or schedule a visit to our beautiful campus.</p>
                </div>
            </section>

            <motion.section {...scrollAnimationProps} className="section-padding">
                <div className="container">
                    <div className={styles.contactGrid}>
                        <div className={styles.infoSection}>
                            <div className={styles.infoCard}>
                                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <MapPin size={18} /> ADDRESS
                                </h3>
                                <p>No. 507 B, T. H. ROAD, MELMANAMBEDU,</p>
                                <p>VELLAVEDU POST, THIRUVALLUR DIST, CHENNAI - 600124</p>
                            </div>

                            <div className={styles.infoCard}>
                                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Phone size={18} /> TELEPHONE
                                </h3>
                                <p>Primary: +91 95662 63956</p>
                                <p>WhatsApp: +91 95662 63956</p>
                            </div>

                            <div className={styles.infoCard}>
                                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Mail size={18} /> EMAIL
                                </h3>
                                <p>General: girihitter@gmail.com</p>
                                <p>Support: girihitter@gmail.com</p>
                            </div>
                        </div>

                        <div className={styles.formCard}>
                            <h2>Schedule a Visit</h2>
                            <form onSubmit={handleSubmit}>
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
                                        placeholder="Enter your full name"
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
                                        placeholder="e.g. +91 95662 63956"
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
                                        placeholder="Child's full name"
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
                                        placeholder="Any specific questions or details?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={styles.submitBtn}
                                >
                                    {loading ? 'Submitting...' : 'Submit Inquiry'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </motion.section>

            <Footer />
        </main>
    );
};

export default ContactPage;
