"use client";
import React from 'react';
import Link from 'next/link';
import styles from '@/app/page.module.css'; // Reusing home styles for footer
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerMain}>
                    <div className={styles.footerCol}>
                        <h4>CONTACT US</h4>
                        <p style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                            <MapPin size={16} color="var(--primary)" style={{ marginTop: '4px', flexShrink: 0 }} /> 
                            <span>No. 507 B, T. H. ROAD, MELMANAMBEDU, VELLAVEDU POST, THIRUVALLUR DIST, CHENNAI - 600124</span>
                        </p>
                        <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Phone size={16} color="var(--primary)" /> +91 95662 63956
                        </p>
                        <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Mail size={16} color="var(--primary)" /> girihitter@gmail.com
                        </p>
                        <div className={styles.footerLinks} style={{ marginTop: '15px' }}>
                            <Link href="/">HOME</Link>
                            <Link href="/about">ABOUT</Link>
                            <Link href="/programs">PROGRAMS</Link>
                            <Link href="/facilities">FACILITIES</Link>
                        </div>
                    </div>
                    <div className={styles.footerCol}>
                        <h4>QUICK LINKS</h4>
                        <p>Join the Rhythm family today!</p>
                        <div className={styles.footerLinks}>
                            <Link href="/admissions">ADMISSIONS</Link>
                            <Link href="/contact">CONTACT</Link>
                            <Link href="/admin">ADMIN PORTAL</Link>
                        </div>
                    </div>
                    <div className={styles.footerCol}>
                        <h4>OUR VISION</h4>
                        <p>At Rhythm Preschool, we believe every child learns differently. Our play-based learning approach encourages curiosity, creativity, communication, and confidence while building the essential foundations for lifelong learning in a safe, caring, and stimulating environment.</p>
                    </div>
                </div>
                <motion.h2 className={styles.footerLogo}>RHYTHM</motion.h2>
                <div className={styles.zapstersCredit} style={{ textAlign: 'center', marginTop: '20px', fontFamily: '"Nunito", sans-serif', fontWeight: 600 }}>
                    Made by <a href="https://www.zapsters.in/" target="_blank" style={{ color: 'var(--deep-black)', textDecoration: 'underline' }}>ZAPSTERS</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
