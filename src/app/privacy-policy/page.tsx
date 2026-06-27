"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import styles from './privacy.module.css';

const sections = [
    {
        number: '01',
        title: 'INFORMATION WE COLLECT',
        content: `When you schedule a visit or contact us, we may collect the following personal information:\n\n• Parent / Guardian full name\n• Child's name and age\n• Phone number and email address\n• Preferred visit date and time\n• Program of interest\n• Any additional messages you provide\n\nWe only collect information that is necessary to process your visit request and to communicate with you about our programs.`,
    },
    {
        number: '02',
        title: 'HOW WE USE YOUR INFORMATION',
        content: `Your information is used exclusively for the following purposes:\n\n• To confirm and schedule your campus visit\n• To contact you regarding your enquiry\n• To send relevant information about our programs and admissions process\n• To improve our services and communication\n\nWe do not use your information for automated decision-making or profiling.`,
    },
    {
        number: '03',
        title: 'DATA STORAGE & SECURITY',
        content: `All submitted data is securely stored in Google Firebase (Firestore), a cloud database service provided by Google LLC. Firebase employs industry-standard security measures including:\n\n• Data encryption in transit (TLS/SSL)\n• Data encryption at rest\n• Role-based access controls\n\nAccess to your data is strictly limited to authorised Rhythm PreSchool staff.`,
    },
    {
        number: '04',
        title: 'DATA SHARING',
        content: `We do not sell, trade, or rent your personal information to third parties.\n\nYour information may only be shared with:\n• Google Firebase (data storage infrastructure)\n• Internal Rhythm PreSchool administrative staff\n\nWe will never share your data with marketing companies or unrelated organisations.`,
    },
    {
        number: '05',
        title: 'DATA RETENTION',
        content: `We retain your submitted information for a maximum of 12 months from the date of submission, unless you request earlier deletion or unless retention is required for legitimate administrative purposes such as an ongoing admission process.`,
    },
    {
        number: '06',
        title: 'YOUR RIGHTS',
        content: `You have the right to:\n\n• Access the personal data we hold about you\n• Request correction of inaccurate data\n• Request deletion of your personal data\n• Withdraw your consent at any time\n\nTo exercise any of these rights, contact us at rhythmpreschool2026@gmail.com or call +91 95662 63956.`,
    },
    {
        number: '07',
        title: 'COOKIES',
        content: `Our website does not currently use tracking cookies. We may use essential cookies to ensure proper functionality of the website such as session management. No third-party advertising or analytics cookies are used.`,
    },
    {
        number: '08',
        title: "CHILDREN'S PRIVACY",
        content: `Our website is intended for parents and guardians. We do not knowingly collect personal information directly from children under the age of 13. Any child-related information collected such as name and age is provided by a parent or guardian.`,
    },
    {
        number: '09',
        title: 'CHANGES TO THIS POLICY',
        content: `We may update this Privacy Policy from time to time. The most recent version will always be available on this page. We encourage you to review this page periodically.`,
    },
    {
        number: '10',
        title: 'CONTACT US',
        content: `If you have any questions or concerns about this Privacy Policy, please contact us:\n\nRhythm PreSchool\nNo. 507 B, T. H. Road, Melmanambedu, Vellavedu Post, Thiruvallur Dist, Chennai - 600124\n\n📞 +91 95662 63956\n✉️ rhythmpreschool2026@gmail.com`,
    },
];

const colors = [
    'var(--pop-yellow)',
    'var(--pop-mint)',
    'var(--pop-pink)',
    'var(--pop-purple)',
    'var(--pop-yellow)',
    'var(--pop-mint)',
    'var(--pop-pink)',
    'var(--pop-purple)',
    'var(--pop-yellow)',
    'var(--pop-mint)',
];

export default function PrivacyPolicyPage() {
    const scrollAnim = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' },
        transition: { duration: 0.6 },
    };

    return (
        <main className={styles.main}>
            <Navbar />

            {/* Hero */}
            <motion.section {...scrollAnim} className={styles.heroSection}>
                <div className="container">
                    <h1 className={styles.pageTitle}>PRIVACY<br />POLICY</h1>
                    <div className={styles.heroBadgeRow}>
                        <span className={styles.badge}>Effective: 27 June 2025</span>
                        <span className={styles.badge}>Last Updated: 27 June 2025</span>
                    </div>
                    <p className={styles.heroLead}>
                        At Rhythm PreSchool, we are committed to protecting your personal information and being fully transparent about how we use it.
                    </p>
                    <Link href="/schedule-visit" className={styles.backBtn}>
                        <ArrowLeft size={16} /> Back to Schedule a Visit
                    </Link>
                </div>
            </motion.section>

            {/* Sections */}
            <section className={styles.sectionsArea}>
                <div className="container">
                    <div className={styles.grid}>
                        {sections.map((sec, i) => (
                            <motion.div
                                key={i}
                                {...scrollAnim}
                                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                                className={styles.card}
                                style={{ background: colors[i] }}
                            >
                                <span className={styles.cardNumber}>{sec.number}</span>
                                <h2 className={styles.cardTitle}>{sec.title}</h2>
                                <p className={styles.cardContent}>{sec.content}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Strip */}
            <motion.section {...scrollAnim} className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaBox}>
                        <h2 className={styles.ctaTitle}>READY TO VISIT?</h2>
                        <p className={styles.ctaText}>
                            By using our website and submitting the visit request form, you acknowledge that you have read and understood this Privacy Policy.
                        </p>
                        <Link href="/schedule-visit" className={styles.ctaBtn}>
                            Schedule a Visit →
                        </Link>
                    </div>
                </div>
            </motion.section>

            <Footer />
        </main>
    );
}
