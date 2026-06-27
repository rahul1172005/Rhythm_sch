"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./about.module.css";
import Image from "next/image";
import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.heroSection}>
                <div className="container">
                    <h1 className={styles.title}>OUR STORY<span>©</span></h1>
                    <div className={styles.heroGrid}>
                        <div className={styles.heroImage}>
                            <Image src="/images/trio_chefs_uploaded.jpg" alt="The Trio" fill style={{ objectFit: 'cover' }} />
                            <div className="sticker" style={{ position: 'absolute', bottom: -20, left: 40, fontSize: '24px' }}>EST. 2026</div>
                        </div>
                        <div className={styles.heroContent}>
                            <h2 className={styles.accentTitle}>THREE MASTERS. <br /> ONE FLAME.</h2>
                            <p className={styles.leadText}>
                                It started in a small kitchen with a big dream. Three brothers, one grill, and an obsession with the perfect spice blend. Today, Taste of Trio's (TOT) is the city's anthem for bold, unapologetic street food.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding" style={{ background: 'white' }}>
                <div className="container">
                    <div className={styles.timelineGrid}>
                        <div className={styles.timelineBlock}>
                            <h3 className={styles.year}>2020</h3>
                            <div className={styles.editorialBox} style={{ background: 'var(--pop-mint)' }}>
                                <h4>THE CONCEPT</h4>
                                <p>Three brothers, one lockdown dream. The idea for TOT was born in a home kitchen, experimenting with spice blends and street food classics.</p>
                            </div>
                        </div>
                        <div className={styles.timelineBlock}>
                            <h3 className={styles.year}>2024</h3>
                            <div className={styles.editorialBox} style={{ background: 'var(--pop-pink)' }}>
                                <h4>THE BLUEPRINT</h4>
                                <p>We secured our first location and spent two years perfecting the menu. Every burger, every wrap was tested a hundred times.</p>
                            </div>
                        </div>
                        <div className={styles.timelineBlock}>
                            <h3 className={styles.year}>2026</h3>
                            <div className={styles.editorialBox} style={{ background: 'var(--pop-purple)' }}>
                                <h4>GRAND OPENING</h4>
                                <p>On May 1st, TOT officially opened its doors. A new era of editorial street food begins right here, right now.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.philosophySection}>
                <div className="container">
                    <div className={styles.philosophyGrid}>
                        <div className={styles.philTitle}>
                            <h2>WHY WE RIDE<span>©</span></h2>
                        </div>
                        <div className={styles.philItems}>
                            <div className={styles.philItem}>
                                <h3>01. AUDACITY</h3>
                                <p>We don't do "mild". Every bite should be a punch to the senses. If it doesn't leave a mark, it's not a TOT meal.</p>
                            </div>
                            <div className={styles.philItem}>
                                <h3>02. COMMUNITY</h3>
                                <p>The street is where we belong. We source local, hire local, and feed the soul of the community that built us.</p>
                            </div>
                            <div className={styles.philItem}>
                                <h3>03. CRAFT</h3>
                                <p>Street food is art. From the hand-kneaded dough to the 24-hour marinated shawarma, we respect the process.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className={styles.collageFooter}>
                        <div className={styles.bigImage}>
                            <Image src="/images/hero_burgers_trio.png" alt="Burger" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className={styles.smallImages}>
                            <div className={styles.imgWrap}><Image src="/images/shawarma_luxury.png" alt="Shawarma" fill style={{ objectFit: 'cover' }} /></div>
                            <div className={styles.imgWrap} style={{ background: 'var(--pop-yellow)', border: 'var(--border-thick)', display: 'flex', alignItems: 'center', justifyItems: 'center', padding: '20px' }}>
                                <h3 style={{ fontSize: '40px', textAlign: 'center' }}>KEEP IT <br /> FIERY</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AboutPage;
