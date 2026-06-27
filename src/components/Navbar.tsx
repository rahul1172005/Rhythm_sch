"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, User } from 'lucide-react';
import styles from './Navbar.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <div className={`container ${styles.navContainer}`}>
                <div className={styles.navLeft}>
                    <Link href="/" className={styles.logo} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                        <Image 
                            src="/images/school_logo.png" 
                            alt="Rhythm Preschool Logo" 
                            width={56} 
                            height={56} 
                            style={{ 
                                objectFit: 'contain',
                                transform: 'scale(1.0) translate(0px, 0px)',
                                borderRadius: '4px'
                            }} 
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.0', textAlign: 'left' }}>
                            <span style={{ fontSize: '28px', fontWeight: 900, fontFamily: 'Poppins, sans-serif', color: 'var(--deep-black)' }}>Rhythm</span>
                            <span style={{ fontSize: '13px', fontWeight: 800, fontFamily: 'Nunito, sans-serif', color: 'var(--primary)', letterSpacing: '2px', marginTop: '2px' }}>PRESCHOOL</span>
                        </div>
                    </Link>
                </div>

                <div className={styles.navCenter}>
                    <Link href="/">HOME</Link>
                    <Link href="/about">ABOUT</Link>
                    <Link href="/programs">PROGRAMS</Link>
                    <Link href="/facilities">FACILITIES</Link>
                    <Link href="/admissions">ADMISSIONS</Link>
                    <Link href="/contact">CONTACT</Link>
                </div>

                <div className={styles.navRight}>
                    <a href="tel:+919566263956" className={styles.cartBtn}>
                        CALL US
                    </a>

                    <Link href="/admin" className={styles.adminIcon} title="Admin Dashboard">
                        <User size={20} />
                    </Link>

                    <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={styles.mobileMenu}
                    >
                        <Link href="/" onClick={() => setIsOpen(false)}>HOME</Link>
                        <Link href="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
                        <Link href="/programs" onClick={() => setIsOpen(false)}>PROGRAMS</Link>
                        <Link href="/facilities" onClick={() => setIsOpen(false)}>FACILITIES</Link>
                        <Link href="/admissions" onClick={() => setIsOpen(false)}>ADMISSIONS</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link>
                        <a 
                            href="tel:+919566263956" 
                            className={styles.cartBtn}
                            style={{ width: '100%', marginTop: '10px', textAlign: 'center', display: 'block' }}
                            onClick={() => setIsOpen(false)}
                        >
                            CALL US
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
