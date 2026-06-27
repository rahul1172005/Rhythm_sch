"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { useAdmissions } from '@/context/AdmissionsContext';

const Hero = () => {
    const { setInquiryOpen } = useAdmissions();

    return (
        <section className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.topSection}>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={styles.mainTitle}
                    >
                        RHYTHM
                    </motion.h1>
                    <p className={styles.tagline}>
                        Where Every Little Step Creates a Bright Future. A nurturing preschool where children learn through play, creativity, exploration, and meaningful experiences in a safe and joyful environment.
                    </p>
                    <div className={styles.ctaGroup}>
                        <button onClick={() => setInquiryOpen(true)} className={styles.primaryBtn}>
                            ENROLL NOW
                        </button>
                        <a href="tel:+919566263956" className={styles.secondaryBtn} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                            CALL US
                        </a>
                    </div>
                </div>

                <div className={styles.collageGrid}>
                    <div className={styles.collageLarge}>
                        <Image src="/images/image copy.png" alt="Children playing with blocks" fill style={{ objectFit: 'cover' }} priority />
                        <div className="sticker" style={{ position: 'absolute', top: 20, right: 20 }}>PLAY-BASED LEARNING</div>
                    </div>

                    <div className={styles.collageSide}>
                        <div className={styles.miniBlock} style={{ background: 'var(--pop-mint)' }}>
                            <h3>DISCOVER & IMAGINE</h3>
                            <div className={styles.orderTape}>VISIT CAMPUS</div>
                        </div>
                        <div className={styles.miniBlock} style={{ background: 'var(--pop-pink)' }}>
                            <Image src="/images/preschool_classroom.png" alt="Preschool classroom" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className={styles.miniBlock} style={{ background: 'var(--pop-purple)' }}>
                            <h3>JOIN US</h3>
                            <p>@RHYTHMSCHOOL</p>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomAwards}>
                    <h2>NURTURING HAPPY HEARTS & CURIOUS MINDS FOR AGES 2 TO 6</h2>
                </div>
            </div>
        </section>
    );
};

export default Hero;
