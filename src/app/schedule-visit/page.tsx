"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, AlertCircle, Shield } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import styles from './schedule.module.css';

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '2:00 PM',
  '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM',
];

const programOptions = [
  'Playgroup (1.5 - 2.5 years)',
  'Nursery (2.5 - 3.5 years)',
  'Jr. KG (3.5 - 4.5 years)',
  'Sr. KG (4.5 - 5.5 years)',
];

export default function ScheduleVisitPage() {
  const [form, setForm] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    program: '',
    visitDate: '',
    visitTime: '',
    message: '',
    agreePrivacy: false,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    setForm(prev => ({
      ...prev,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agreePrivacy) {
      setErrorMsg('Please agree to the Privacy Policy before submitting.');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      await addDoc(collection(db, 'scheduleVisits'), {
        parentName: form.parentName,
        childName: form.childName,
        childAge: form.childAge,
        phone: form.phone,
        email: form.email,
        program: form.program,
        visitDate: form.visitDate,
        visitTime: form.visitTime,
        message: form.message,
        submittedAt: serverTimestamp(),
        status: 'pending',
      });
      setStatus('success');
    } catch (err) {
      console.error(err);
      setErrorMsg('Something went wrong. Please try again or call us directly.');
      setStatus('error');
    }
  };

  // Get tomorrow's date as min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <main className={styles.page}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={styles.heroContent}
        >
          <span className={styles.badge}>
            <Calendar size={14} /> Book a Visit
          </span>
          <h1 className={styles.heroTitle}>Schedule a Visit</h1>
          <p className={styles.heroSubtitle}>
            Come see Rhythm PreSchool in person! Meet our teachers, explore the campus, and get all your questions answered.
          </p>
        </motion.div>
      </section>

      <div className={styles.layout}>
        {/* Info Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.sidebar}
        >
          <div className={styles.infoCard}>
            <h3>What to Expect</h3>
            <ul className={styles.expectList}>
              <li><CheckCircle size={16} color="var(--primary)" /> Campus tour with our staff</li>
              <li><CheckCircle size={16} color="var(--primary)" /> Meet the teachers &amp; admin team</li>
              <li><CheckCircle size={16} color="var(--primary)" /> Q&amp;A session about curriculum</li>
              <li><CheckCircle size={16} color="var(--primary)" /> Learn about fee structure</li>
              <li><CheckCircle size={16} color="var(--primary)" /> Explore our play areas &amp; classrooms</li>
            </ul>
          </div>

          <div className={styles.infoCard}>
            <h3>Visit Hours</h3>
            <p className={styles.infoLine}><Clock size={15} /> Mon – Fri: 9:00 AM – 4:00 PM</p>
            <p className={styles.infoLine}><Clock size={15} /> Saturday: 9:00 AM – 12:00 PM</p>
          </div>

          <div className={styles.infoCard}>
            <h3>Need Help?</h3>
            <p className={styles.infoLine}><Phone size={15} /> +91 95662 63956</p>
            <p className={styles.infoLine}><Mail size={15} /> rhythmpreschool2026@gmail.com</p>
          </div>
        </motion.aside>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.formWrap}
        >
          {status === 'success' ? (
            <div className={styles.successBox}>
              <CheckCircle size={56} color="var(--primary)" />
              <h2>Visit Scheduled! 🎉</h2>
              <p>Thank you, <strong>{form.parentName}</strong>! We&apos;ve received your visit request for <strong>{form.visitDate}</strong> at <strong>{form.visitTime}</strong>.</p>
              <p>Our team will call you within 24 hours to confirm.</p>
              <Link href="/" className={styles.homeBtn}>Back to Home</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <h2 className={styles.formTitle}>Book Your Campus Visit</h2>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label><User size={14} /> Parent / Guardian Name *</label>
                  <input name="parentName" required value={form.parentName} onChange={handleChange} placeholder="e.g. Priya Sharma" />
                </div>
                <div className={styles.field}>
                  <label><User size={14} /> Child&apos;s Name *</label>
                  <input name="childName" required value={form.childName} onChange={handleChange} placeholder="e.g. Aarav Sharma" />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label><User size={14} /> Child&apos;s Age *</label>
                  <input name="childAge" required value={form.childAge} onChange={handleChange} placeholder="e.g. 3 years" />
                </div>
                <div className={styles.field}>
                  <label>Program of Interest *</label>
                  <select name="program" required value={form.program} onChange={handleChange}>
                    <option value="">Select Program</option>
                    {programOptions.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label><Phone size={14} /> Phone Number *</label>
                  <input name="phone" required type="tel" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className={styles.field}>
                  <label><Mail size={14} /> Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label><Calendar size={14} /> Preferred Visit Date *</label>
                  <input name="visitDate" required type="date" min={minDate} value={form.visitDate} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                  <label><Clock size={14} /> Preferred Time *</label>
                  <select name="visitTime" required value={form.visitTime} onChange={handleChange}>
                    <option value="">Select Time</option>
                    {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div className={styles.field} style={{ gridColumn: '1/-1' }}>
                <label><MessageSquare size={14} /> Additional Message</label>
                <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Any specific questions or requirements?" />
              </div>

              {/* Privacy Policy Checkbox */}
              <div className={styles.privacyCheck}>
                <input
                  type="checkbox"
                  id="agreePrivacy"
                  name="agreePrivacy"
                  checked={form.agreePrivacy}
                  onChange={handleChange}
                />
                <label htmlFor="agreePrivacy">
                  <Shield size={13} /> I agree to the{' '}
                  <Link href="/privacy-policy" target="_blank" className={styles.policyLink}>
                    Privacy Policy
                  </Link>{' '}
                  and consent to Rhythm PreSchool storing my submitted information to schedule a visit.
                </label>
              </div>

              {errorMsg && (
                <div className={styles.errorBox}>
                  <AlertCircle size={16} /> {errorMsg}
                </div>
              )}

              <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                {status === 'loading' ? 'Submitting...' : 'Schedule My Visit →'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </main>
  );
}
