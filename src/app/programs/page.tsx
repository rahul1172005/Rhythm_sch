"use client";
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./programs.module.css";
import Image from "next/image";
import { useAdmissions } from '@/context/AdmissionsContext';
import { motion, AnimatePresence } from 'framer-motion';

const ProgramsPage = () => {
    const { setInquiryOpen, setSelectedProgram } = useAdmissions();

    const programItems = [
        { 
            id: 'PLAYGROUP', 
            name: 'PLAY GROUP', 
            age: '2–3 Years', 
            desc: 'A gentle introduction to learning. Focuses on sensory play, building fine motor skills, language exploration, music, movement, and initial peer interactions in a warm, comforting space.', 
            badgeClass: styles.playgroup, 
            img: '/images/hero_preschool_kids.png' 
        },
        { 
            id: 'NURSERY', 
            name: 'NURSERY', 
            age: '3–4 Years', 
            desc: 'Expands language competency, self-expression, early math concepts, and creative thinking. Activities include painting, sorting, simple numeracy games, and sharing stories.', 
            badgeClass: styles.nursery, 
            img: '/images/preschool_classroom.png' 
        },
        { 
            id: 'JUNIOR_KG', 
            name: 'JUNIOR KG', 
            age: '4–5 Years', 
            desc: 'Prepares children for reading, writing, and logical analysis. Children explore science, math, pre-reading blocks, storytelling, team games, and building structured problem-solving skills.', 
            badgeClass: styles.juniorKg, 
            img: '/images/preschool_playground.png' 
        },
        { 
            id: 'SENIOR_KG', 
            name: 'SENIOR KG', 
            age: '5–6 Years', 
            desc: 'Full school readiness program focusing on elementary mathematics, reading comprehension, writing sentences, science projects, teamwork, creative arts, and leadership skills.', 
            badgeClass: styles.seniorKg, 
            img: '/images/hero_preschool_kids.png' 
        }
    ];

    const scrollAnimationProps = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6 }
    };

    return (
        <main className={styles.main}>
            <Navbar />

            <div className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>OUR PROGRAMS</h1>
                    <p className={styles.subtitle}>Thoughtfully designed paths for every development stage.</p>
                </div>
            </div>

            <motion.section {...scrollAnimationProps} className="section-padding">
                <div className="container">
                    <div className={styles.programsGrid}>
                        <AnimatePresence mode='popLayout'>
                            {programItems.map((item) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    key={item.id}
                                    className={styles.editorialItem}
                                >
                                    <div className={styles.itemHeader}>
                                        <div className={styles.itemMeta}>
                                            <span className={`${styles.badge} ${item.badgeClass}`}>{item.id}</span>
                                            <span>RHYTHM SYSTEM</span>
                                        </div>
                                        <h3>{item.name}</h3>
                                    </div>
                                    <div className={styles.itemBody}>
                                        <div className={styles.itemImage}>
                                            <Image src={item.img} alt={item.name} fill style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div className={styles.itemInfo}>
                                            <p className={styles.desc}>{item.desc}</p>
                                            <div className={styles.itemFooter}>
                                                <span className={styles.age}>{item.age}</span>
                                                <button
                                                    onClick={() => {
                                                        setSelectedProgram(item.id);
                                                        setInquiryOpen(true);
                                                    }}
                                                    className={styles.addBtn}
                                                >
                                                    ENROLL NOW
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.section>

            <Footer />
        </main>
    );
};

export default ProgramsPage;
