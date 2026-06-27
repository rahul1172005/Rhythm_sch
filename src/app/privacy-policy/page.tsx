"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';
import styles from './privacy.module.css';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: `When you schedule a visit or contact us, we may collect the following personal information:
      • Parent / Guardian full name
      • Child's name and age
      • Phone number and email address
      • Preferred visit date and time
      • Program of interest
      • Any additional messages you provide
      
      We only collect information that is necessary to process your visit request and to communicate with you about our programs.`,
    },
    {
      title: '2. How We Use Your Information',
      content: `Your information is used exclusively for the following purposes:
      • To confirm and schedule your campus visit
      • To contact you regarding your enquiry
      • To send relevant information about our programs and admissions process
      • To improve our services and communication
      
      We do not use your information for automated decision-making or profiling.`,
    },
    {
      title: '3. Data Storage & Security',
      content: `All submitted data is securely stored in Google Firebase (Firestore), a cloud database service provided by Google LLC. Firebase employs industry-standard security measures including:
      • Data encryption in transit (TLS/SSL)
      • Data encryption at rest
      • Role-based access controls
      
      Access to your data is strictly limited to authorised Rhythm PreSchool staff.`,
    },
    {
      title: '4. Data Sharing',
      content: `We do not sell, trade, or rent your personal information to third parties.

      Your information may only be shared with:
      • Google Firebase (data storage infrastructure)
      • Internal Rhythm PreSchool administrative staff
      
      We will never share your data with marketing companies or unrelated organisations.`,
    },
    {
      title: '5. Data Retention',
      content: `We retain your submitted information for a maximum of 12 months from the date of submission, unless you request earlier deletion or unless retention is required for legitimate administrative purposes (e.g. ongoing admission processes).`,
    },
    {
      title: '6. Your Rights',
      content: `You have the right to:
      • Access the personal data we hold about you
      • Request correction of inaccurate data
      • Request deletion of your personal data
      • Withdraw your consent at any time
      
      To exercise any of these rights, please contact us at rhythmpreschool2026@gmail.com or call +91 95662 63956.`,
    },
    {
      title: '7. Cookies',
      content: `Our website does not currently use tracking cookies. We may use essential cookies to ensure proper functionality of the website (e.g. session management). No third-party advertising or analytics cookies are used.`,
    },
    {
      title: '8. Children\'s Privacy',
      content: `Our website is intended for parents and guardians. We do not knowingly collect personal information directly from children under the age of 13. Any child-related information collected (such as name and age) is provided by a parent or guardian.`,
    },
    {
      title: '9. Changes to This Policy',
      content: `We may update this Privacy Policy from time to time. The most recent version will always be available on this page with the effective date noted below. We encourage you to review this page periodically.`,
    },
    {
      title: '10. Contact Us',
      content: `If you have any questions or concerns about this Privacy Policy, please contact us:
      
      Rhythm PreSchool
      No. 507 B, T. H. Road, Melmanambedu, Vellavedu Post, Thiruvallur Dist, Chennai - 600124
      📞 +91 95662 63956
      ✉️ rhythmpreschool2026@gmail.com`,
    },
  ];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.heroContent}
        >
          <div className={styles.badge}>
            <Shield size={15} /> Privacy Policy
          </div>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.subtitle}>
            At Rhythm PreSchool, we are committed to protecting your personal information and being transparent about how we use it.
          </p>
          <p className={styles.effectiveDate}>Effective Date: 27 June 2025 &nbsp;|&nbsp; Last Updated: 27 June 2025</p>
        </motion.div>
      </section>

      <div className={styles.content}>
        <Link href="/schedule-visit" className={styles.backBtn}>
          <ArrowLeft size={16} /> Back to Schedule a Visit
        </Link>

        <div className={styles.sections}>
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              className={styles.section}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h2 className={styles.sectionTitle}>{sec.title}</h2>
              <p className={styles.sectionContent}>{sec.content}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.footer}>
          <p>By using our website and submitting the visit request form, you acknowledge that you have read and understood this Privacy Policy.</p>
          <Link href="/schedule-visit" className={styles.ctaBtn}>Schedule a Visit →</Link>
        </div>
      </div>
    </main>
  );
}
