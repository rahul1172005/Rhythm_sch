"use client";
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./contact.module.css";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { db } from '@/lib/firebase';
import { ref, push } from 'firebase/database';
import Link from 'next/link';

const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM',
];

const ContactPage = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [formData, setFormData] = useState({
        parentName: '',
        email: '',
        phone: '',
        childName: '',
        childAge: '',
        program: '',
        tourDate: '',
        tourTime: '',
        notes: '',
        agreePrivacy: false,
    });

    // Get tomorrow as min date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const target = e.target as HTMLInputElement;
        setFormData(prev => ({
            ...prev,
            [target.name]: target.type === 'checkbox' ? target.checked : target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.agreePrivacy) {
            setErrorMsg('Please agree to the Privacy Policy before submitting.');
            return;
        }
        setLoading(true);
        setErrorMsg('');

        try {
            await push(ref(db, 'scheduleVisits'), {
                parentName: formData.parentName,
                email: formData.email,
                phone: formData.phone,
                childName: formData.childName,
                childAge: formData.childAge,
                program: formData.program,
                tourDate: formData.tourDate,
                tourTime: formData.tourTime,
                notes: formData.notes,
                submittedAt: new Date().toISOString(),
                status: 'pending',
            });
            setSuccess(true);
        } catch (err) {
            console.error(err);
            setErrorMsg('Something went wrong. Please try again or call us directly.');
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
                        {/* Info Cards */}
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
                                <p>rhythmpreschool2026@gmail.com</p>
                            </div>

                            <div className={styles.infoCard}>
                                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Clock size={18} /> VISIT HOURS
                                </h3>
                                <p>Mon – Fri: 9:00 AM – 4:00 PM</p>
                                <p>Saturday: 9:00 AM – 12:00 PM</p>
                            </div>
                        </div>

                        {/* Form */}
                        <div className={styles.formCard}>
                            <h2>Schedule a Visit</h2>

                            {success ? (
                                <div className={styles.successBox}>
                                    <div className={styles.successEmoji}>🎉</div>
                                    <h3>Visit Scheduled!</h3>
                                    <p>Thank you, <strong>{formData.parentName}</strong>! We&apos;ve received your visit request for <strong>{formData.tourDate}</strong> at <strong>{formData.tourTime}</strong>.</p>
                                    <p>Our team will call you within 24 hours to confirm your visit.</p>
                                    <button className={styles.submitBtn} style={{ marginTop: '10px' }} onClick={() => { setSuccess(false); setFormData({ parentName: '', email: '', phone: '', childName: '', childAge: '', program: '', tourDate: '', tourTime: '', notes: '', agreePrivacy: false }); }}>
                                        Book Another Visit
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="parentName">Parent / Guardian Name *</label>
                                            <input
                                                type="text" id="parentName" name="parentName" required
                                                value={formData.parentName} onChange={handleChange}
                                                className={styles.input} placeholder="e.g. Priya Sharma"
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="childName">Child&apos;s Name *</label>
                                            <input
                                                type="text" id="childName" name="childName" required
                                                value={formData.childName} onChange={handleChange}
                                                className={styles.input} placeholder="e.g. Aarav Sharma"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="childAge">Child&apos;s Age *</label>
                                            <input
                                                type="text" id="childAge" name="childAge" required
                                                value={formData.childAge} onChange={handleChange}
                                                className={styles.input} placeholder="e.g. 3 years"
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="program">Program of Interest *</label>
                                            <select id="program" name="program" required value={formData.program} onChange={handleChange} className={styles.select}>
                                                <option value="">Select a Program</option>
                                                <option value="PLAYGROUP">Playgroup (1.5 – 2.5 Years)</option>
                                                <option value="NURSERY">Nursery (2.5 – 3.5 Years)</option>
                                                <option value="JUNIOR_KG">Junior KG (3.5 – 4.5 Years)</option>
                                                <option value="SENIOR_KG">Senior KG (4.5 – 5.5 Years)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="phone">Phone Number *</label>
                                            <input
                                                type="tel" id="phone" name="phone" required
                                                value={formData.phone} onChange={handleChange}
                                                className={styles.input} placeholder="+91 XXXXX XXXXX"
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="email">Email Address</label>
                                            <input
                                                type="email" id="email" name="email"
                                                value={formData.email} onChange={handleChange}
                                                className={styles.input} placeholder="you@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="tourDate">Preferred Visit Date *</label>
                                            <input
                                                type="date" id="tourDate" name="tourDate" required min={minDate}
                                                value={formData.tourDate} onChange={handleChange}
                                                className={styles.input}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="tourTime">Preferred Time *</label>
                                            <select id="tourTime" name="tourTime" required value={formData.tourTime} onChange={handleChange} className={styles.select}>
                                                <option value="">Select Time</option>
                                                {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="notes">Questions / Comments</label>
                                        <textarea
                                            id="notes" name="notes" rows={3}
                                            value={formData.notes} onChange={handleChange}
                                            className={styles.textarea}
                                            placeholder="Any specific questions or requirements?"
                                        />
                                    </div>

                                    <div className={styles.privacyCheck}>
                                        <input
                                            type="checkbox" id="agreePrivacy" name="agreePrivacy"
                                            checked={formData.agreePrivacy} onChange={handleChange}
                                        />
                                        <label htmlFor="agreePrivacy">
                                            I agree to the{' '}
                                            <Link href="/privacy-policy" target="_blank" className={styles.policyLink}>
                                                Privacy Policy
                                            </Link>
                                            {' '}and consent to Rhythm PreSchool storing my information.
                                        </label>
                                    </div>

                                    {errorMsg && (
                                        <div className={styles.errorBox}>{errorMsg}</div>
                                    )}

                                    <button type="submit" disabled={loading} className={styles.submitBtn}>
                                        {loading ? 'Submitting...' : 'Schedule My Visit →'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </motion.section>

            <Footer />
        </main>
    );
};

export default ContactPage;
