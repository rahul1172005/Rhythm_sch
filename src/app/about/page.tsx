"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./about.module.css";
import Image from "next/image";
import { motion } from 'framer-motion';

const AboutPage = () => {
    const scrollAnimationProps = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6 }
    };

    return (
        <main className={styles.main}>
            <Navbar />

            <motion.section {...scrollAnimationProps} className={styles.heroSection}>
                <div className="container">
                    <h1 className={styles.title}>OUR STORY</h1>
                    <div className={styles.heroGrid}>
                        <div className={styles.heroImageContainer} style={{ position: 'relative', width: '100%', height: '600px' }}>
                            <div className={styles.heroImage} style={{ position: 'relative', width: '100%', height: '100%', border: 'var(--border-thick)', borderRadius: '32px', overflow: 'hidden' }}>
                                <Image 
                                    src="/images/hero_preschool_kids.png" 
                                    alt="Happy kids" 
                                    fill 
                                    style={{ 
                                        objectFit: 'cover'
                                    }} 
                                />
                            </div>
                            <div className="sticker" style={{ position: 'absolute', bottom: -20, left: 40, fontSize: '24px' }}>EST. 2026</div>
                        </div>
                        <div className={styles.heroContent}>
                            <h2 className={styles.accentTitle}>Growing Happy Hearts & <br /> Curious Minds</h2>
                            <p className={styles.leadText}>
                                At Rhythm Preschool, we believe every child learns differently. Our play-based learning approach encourages curiosity, creativity, communication, and confidence while building the essential foundations for lifelong learning.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section {...scrollAnimationProps} className="section-padding" style={{ background: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span className={styles.timelineSubtitle}>OUR HISTORY</span>
                        <h2 className={styles.timelineHeading}>Our Journey & Milestones</h2>
                    </div>
                    <div className={styles.timelineSingle}>
                        <div className={styles.timelineBlock}>
                            <h3 className={styles.year}>2026</h3>
                            <div className={styles.editorialBox} style={{ background: 'var(--pop-purple)', border: 'var(--border-thick)', boxShadow: '4px 4px 0px var(--deep-black)', borderRadius: '16px', padding: '20px' }}>
                                <h4>GRAND OPENING</h4>
                                <p>Rhythm Preschool officially welcomed its first batch of playgroups, nursery, junior, and senior kindergarten students.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section {...scrollAnimationProps} className="section-padding" style={{ background: '#FFFDF9' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span className={styles.timelineSubtitle}>OUR LEADERSHIP</span>
                        <h2 className={styles.timelineHeading}>Our Founders</h2>
                    </div>
                    <div className={styles.foundersGrid}>
                        <div className={styles.founderCard} style={{ background: 'var(--pop-yellow)' }}>
                            <div className={styles.founderRole}>PRESIDENT</div>
                            <h3 className={styles.founderName}>Mr. Giridharan</h3>
                            <p className={styles.founderDegree}>D.T.Ed., B.B.A., M.B.A.</p>
                        </div>
                        <div className={styles.founderCard} style={{ background: 'var(--pop-pink)' }}>
                            <div className={styles.founderRole}>SECRETARY</div>
                            <h3 className={styles.founderName}>Mrs. Shobana</h3>
                            <p className={styles.founderDegree}>D.T.Ed., B.A., B.Ed.</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section {...scrollAnimationProps} className={styles.philosophySection}>
                <div className="container">
                    <div className={styles.philosophyGrid}>
                        <div className={styles.philTitle}>
                            <h2>LEARNING BEYOND BOOKS</h2>
                        </div>
                        <div className={styles.philItems}>
                            <div className={styles.philItem}>
                                <h3>01. PLAY & DISCOVERY</h3>
                                <p>We believe children explore the world through sensory playing. Daily games, blocks, sandbox play, and puzzles are central to early cognitive development.</p>
                            </div>
                            <div className={styles.philItem}>
                                <h3>02. HOLISTIC HEALTH</h3>
                                <p>Education is emotional, social, and physical. We monitor and support emotional intelligence, confidence building, and peer collaboration.</p>
                            </div>
                            <div className={styles.philItem}>
                                <h3>03. PARENT COOPERATION</h3>
                                <p>A child's education is a partnership. We work closely with families through continuous app updates, weekly reviews, and open communication channels.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section {...scrollAnimationProps} className="section-padding" style={{ background: 'white' }}>
                <div className="container">
                    <div className={styles.collageFooter}>
                        <div className={styles.bigImage}>
                            <Image 
                                src="/images/preschool_playground.png" 
                                alt="Playground play" 
                                fill 
                                style={{ objectFit: 'cover' }} 
                            />
                        </div>
                        <div className={styles.smallImages}>
                            <div className={styles.imgWrap}>
                                <Image 
                                    src="/images/preschool_classroom.png" 
                                    alt="Classroom play" 
                                    fill 
                                    style={{ objectFit: 'cover' }} 
                                />
                            </div>
                            <div className={styles.imgWrap} style={{ background: 'var(--pop-yellow)', border: 'var(--border-thick)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', boxShadow: '6px 6px 0px var(--deep-black)' }}>
                                <h3 style={{ fontSize: '32px', textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>GROW & <br /> CREATE</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            <Footer />
        </main>
    );
};

export default AboutPage;
