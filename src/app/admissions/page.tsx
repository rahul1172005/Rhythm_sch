"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./admissions.module.css";
import { useAdmissions } from '@/context/AdmissionsContext';
import { motion } from 'framer-motion';

const AdmissionsPage = () => {
    const { setInquiryOpen } = useAdmissions();

    const steps = [
        {
            num: "1",
            title: "Book a Campus Visit",
            desc: "The admission process begins with a campus tour. Parents can see our child-friendly classrooms, play areas, and meet our principal to understand our learning philosophies."
        },
        {
            num: "2",
            title: "Meet Our Educators",
            desc: "Discuss your child's milestones, specific learning requirements, or transport needs with our early-years educators to ensure a personalized onboarding experience."
        },
        {
            num: "3",
            title: "Application Submission",
            desc: "Fill out the registration form (online or at the school office) and submit required documents (birth certificate, parent identity proofs, and recent passport photos)."
        },
        {
            num: "4",
            title: "Admission Confirmation",
            desc: "Upon reviewing the application, a formal offer is sent to the family. Parents can complete the admission formalities and pay the registration fees."
        },
        {
            num: "5",
            title: "Welcome to Rhythm Preschool",
            desc: "Once enrolled, we host an orientation session for the parent and child to ease transition, introduce classroom routines, and share transport schedules."
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
                    <h1 className={styles.title}>ADMISSION PROCESS</h1>
                    <p className={styles.subtitle}>Enrolling your child at Rhythm PreSchool is simple, transparent, and welcoming.</p>
                </div>
            </section>

            <motion.section {...scrollAnimationProps} className="section-padding">
                <div className="container">
                    <div className={styles.processContainer}>
                        {steps.map((step) => (
                            <div key={step.num} className={styles.processStep}>
                                <div className={styles.stepNumber}>{step.num}</div>
                                <div className={styles.stepContent}>
                                    <h2>{step.title}</h2>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}

                        <div className={styles.ctaSection}>
                            <button onClick={() => setInquiryOpen(true)} className="sticker" style={{ cursor: 'pointer', fontSize: '24px', padding: '15px 45px' }}>
                                START APPLICATION NOW
                            </button>
                        </div>
                    </div>
                </div>
            </motion.section>

            <Footer />
        </main>
    );
};

export default AdmissionsPage;
