"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.topSection}>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={styles.mainTitle}
                    >
                        TOT<span>©</span>
                    </motion.h1>
                    <p className={styles.tagline}>
                        Craving something delicious? Taste of Trio's brings you the tastiest dishes, curated from the best chefs and local favorites.
                    </p>
                    <div className={styles.ctaGroup}>
                        <Link href="/menu" className={styles.primaryBtn}>ORDER NOW</Link>
                        <Link href="/menu" className={styles.secondaryBtn}>VIEW MENU</Link>
                    </div>
                </div>

                <div className={styles.collageGrid}>
                    <div className={styles.collageLarge}>
                        <Image src="/images/trio_chefs_uploaded.jpg" alt="Featured" fill style={{ objectFit: 'cover' }} />
                        <div className="sticker" style={{ position: 'absolute', top: 20, right: 20 }}>NEW ARRIVAL</div>
                    </div>

                    <div className={styles.collageSide}>
                        <div className={styles.miniBlock} style={{ background: 'var(--pop-mint)' }}>
                            <h3>FOOD FOR THE CRAVING</h3>
                            <div className={styles.orderTape}>ORDER NOW</div>
                        </div>
                        <div className={styles.miniBlock} style={{ background: 'var(--pop-pink)' }}>
                            <Image src="/images/hero_burgers_trio.png" alt="Burger" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className={styles.miniBlock} style={{ background: 'var(--pop-purple)' }}>
                            <h3>JOIN US</h3>
                            <p>@TRIOFOOD</p>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomAwards}>
                    <h2>SERVING BOLD FLAVORS TO THE CITY SINCE MAY 2026</h2>
                </div>
            </div>
        </section>
    );
};

export default Hero;
