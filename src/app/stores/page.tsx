"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./stores.module.css";
import Image from "next/image";
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';

const StoresPage = () => {
    const stores = [
        {
            id: 1,
            name: "TOT FLAGSHIP - DOWNTOWN",
            address: "123 Fire Street, Flavor District, NY 10001",
            phone: "+1 (555) 001-TRIO",
            hours: "11:00 AM - 02:00 AM",
            image: "/images/tot_storefront.png",
            tag: "FLAGSHIP"
        },
        {
            id: 2,
            name: "TOT EXPRESS - THE HUB",
            address: "88 Neon Plaza, Student Block, NY 10012",
            phone: "+1 (555) 002-TRIO",
            hours: "10:00 AM - 12:00 AM",
            image: "/images/tot_interior.png",
            tag: "EXPRESS"
        },
        {
            id: 3,
            name: "TOT ROOFTOP - SKYLINE",
            address: "Penthouse 9, Zenith Towers, NY 10045",
            phone: "+1 (555) 003-TRIO",
            hours: "05:00 PM - 03:00 AM",
            image: "/images/trio_chefs_uploaded.jpg",
            tag: "PREMIUM"
        }
    ];

    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>OUR STORES<span>©</span></h1>
                    <p className={styles.subtitle}>Find your nearest flame. 15 locations and counting.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className={styles.storesGrid}>
                        {stores.map((store) => (
                            <div key={store.id} className={styles.storeCard}>
                                <div className={styles.cardImage}>
                                    <Image src={store.image} alt={store.name} fill style={{ objectFit: 'cover' }} />
                                    <div className="sticker" style={{ position: 'absolute', top: 20, right: 20 }}>{store.tag}</div>
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.cardHeader}>
                                        <h2>{store.name}</h2>
                                        <a href="#" className={styles.mapLink}><ArrowUpRight size={24} /></a>
                                    </div>

                                    <div className={styles.details}>
                                        <div className={styles.detailItem}>
                                            <MapPin size={18} />
                                            <span>{store.address}</span>
                                        </div>
                                        <div className={styles.detailItem}>
                                            <Phone size={18} />
                                            <span>{store.phone}</span>
                                        </div>
                                        <div className={styles.detailItem}>
                                            <Clock size={18} />
                                            <span>{store.hours}</span>
                                        </div>
                                    </div>

                                    <button className={styles.directionBtn}>GET DIRECTIONS</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Placeholder Section */}
            {/* Invitation Section */}
            <section className={styles.mapSection}>
                <div className="container">
                    <div className={styles.mapContainer} style={{ background: 'var(--pop-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ textAlign: 'center', padding: '40px', maxWidth: '600px' }}>
                            <h2 style={{ fontSize: '64px', lineHeight: 1, marginBottom: '20px' }}>YOU'RE INVITED!</h2>
                            <p style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '20px', fontWeight: 600, marginBottom: '30px' }}>
                                Be part of history. Join us for the GRAND OPENING EVENT on May 1st, 2026.
                                Free burgers for the first 100 guests and exclusive TOT merchandise drops.
                            </p>
                            <button className="sticker" style={{ cursor: 'pointer', fontSize: '24px', padding: '15px 40px' }}>RSVP NOW</button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default StoresPage;
