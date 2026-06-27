"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./facilities.module.css";
import Image from "next/image";
import { motion } from 'framer-motion';

const FacilitiesPage = () => {
    const facilities = [
        {
            id: 1,
            name: "Smart Classrooms",
            desc: "Spacious classrooms equipped with interactive digital smart boards, reading corners, child-safe ergonomic furniture, and climate control.",
            image: "/images/preschool_classroom.png",
            tag: "LEARNING"
        },
        {
            id: 2,
            name: "Indoor Play Area",
            desc: "Soft-cushioned indoor activity hall with slides, ball pits, sensory walls, climbing blocks, and structured physical growth toys.",
            image: "/images/hero_preschool_kids.png",
            tag: "ACTIVE PLAY"
        },
        {
            id: 3,
            name: "Outdoor Playground",
            desc: "A wide, gated playground featuring soft grass lawns, standard slides, swings, and sandboxes under strict teacher supervision.",
            image: "/images/preschool_playground.png",
            tag: "OUTDOOR"
        },
        {
            id: 4,
            name: "CCTV Surveillance",
            desc: "24/7 high-definition security camera monitoring covering classrooms, playgrounds, and entrance points to guarantee safety.",
            image: "/images/preschool_classroom.png",
            tag: "SAFETY"
        },
        {
            id: 5,
            name: "Hygienic Dining Area",
            desc: "Clean, sterilised, and bright dining space where kids enjoy dietitian-planned healthy snacks and practice mealtime etiquette.",
            image: "/images/hero_preschool_kids.png",
            tag: "HEALTH"
        },
        {
            id: 6,
            name: "School Transport",
            desc: "GPS-tracked buses and vans operating across the city, accompanied by trained conductors and verified supervisors.",
            image: "/images/preschool_playground.png",
            tag: "TRANSPORT"
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

            <section className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>OUR FACILITIES</h1>
                    <p className={styles.subtitle}>Safe, hygienic, and modern infrastructure designed exclusively for child development.</p>
                </div>
            </section>

            <motion.section {...scrollAnimationProps} className="section-padding">
                <div className="container">
                    <div className={styles.facilitiesGrid}>
                        {facilities.map((fac) => (
                            <div key={fac.id} className={styles.facilityCard}>
                                <div className={styles.cardImage}>
                                    <Image src={fac.image} alt={fac.name} fill style={{ objectFit: 'cover' }} />
                                    <div className="sticker" style={{ position: 'absolute', top: 20, right: 20 }}>{fac.tag}</div>
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.cardHeader}>
                                        <h2>{fac.name}</h2>
                                    </div>
                                    <p className={styles.details}>{fac.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <Footer />
        </main>
    );
};

export default FacilitiesPage;
