"use client";
import React from 'react';
import Link from 'next/link';
import styles from '@/app/page.module.css'; // Reusing home styles for footer
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerMain}>
                    {/* Column 1: About Us */}
                    <div className={styles.footerCol}>
                        <h4>ABOUT US</h4>
                        <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#6B7280' }}>
                            At Rhythm PreSchool, we believe every child learns differently. Our play-based learning approach encourages curiosity, creativity, communication, and confidence while building the essential foundations for lifelong learning in a safe, caring, and stimulating environment.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className={styles.footerCol}>
                        <h4>QUICK LINKS</h4>
                        <div className={styles.footerLinks}>
                            <Link href="/">HOME</Link>
                            <Link href="/about">ABOUT</Link>
                            <Link href="/programs">PROGRAMS</Link>
                            <Link href="/facilities">FACILITIES</Link>
                            <Link href="/admissions">ADMISSIONS</Link>
                            <Link href="/contact">CONTACT</Link>
                            <Link href="/schedule-visit">SCHEDULE A VISIT</Link>
                            <Link href="/privacy-policy">PRIVACY POLICY</Link>
                        </div>
                    </div>

                    {/* Column 3: Contact Us */}
                    <div className={styles.footerCol}>
                        <h4>CONTACT US</h4>
                        <p style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '12px' }}>
                            <MapPin size={16} color="var(--primary)" style={{ marginTop: '4px', flexShrink: 0 }} /> 
                            <span style={{ fontSize: '14px', lineHeight: '1.4' }}>No. 507 B, T. H. ROAD, MELMANAMBEDU, VELLAVEDU POST, THIRUVALLUR DIST, CHENNAI - 600124</span>
                        </p>
                        <p style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                            <Phone size={16} color="var(--primary)" /> 
                            <span style={{ fontSize: '14px' }}>+91 95662 63956</span>
                        </p>
                        <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Mail size={16} color="var(--primary)" /> 
                            <span style={{ fontSize: '14px' }}>rhythmpreschool2026@gmail.com</span>
                        </p>
                    </div>
                </div>

                <div className={styles.footerBottom} style={{ borderTop: '2px solid #E5E7EB', paddingTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className={styles.footerLogoContainer} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <motion.h2 
                            className={styles.footerLogo} 
                            style={{ 
                                margin: 0,
                                fontSize: 'clamp(40px, 10vw, 150px)', // Scalable and responsive logo size
                                width: '100%',
                                textAlign: 'center'
                            }}
                        >
                            Rhythm PreSchool
                        </motion.h2>
                    </div>
                </div>
                
                <div className={styles.zapstersCredit} style={{ textAlign: 'center', marginTop: '30px', fontFamily: '"Nunito", sans-serif', fontWeight: 700, fontSize: '18px', color: '#4B5563', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                    <span>Made with</span>
                    <Heart size={18} fill="#EF4444" color="#EF4444" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                    <span>by</span>
                    <a href="https://www.zapsters.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--deep-black)', textDecoration: 'underline', fontWeight: 800 }}>ZAPSTERS</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
