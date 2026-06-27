"use client";
import React from 'react';
import Link from 'next/link';
import styles from '@/app/page.module.css'; // Reusing home styles for footer
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerMain}>
                    <div className={styles.footerCol}>
                        <h4>CONTACT</h4>
                        <p>Get weekly email</p>
                        <p>Personal number</p>
                        <div className={styles.footerLinks}>
                            <Link href="/">INDEX</Link>
                            <Link href="/menu">MENU</Link>
                            <Link href="/stores">STORE</Link>
                            <Link href="/cart">CART</Link>
                        </div>
                    </div>
                    <div className={styles.footerCol}>
                        <h4>ADDRESS</h4>
                        <p>Address</p>
                        <p>Home address</p>
                        <div className={styles.footerLinks}>
                            <Link href="/">FACEBOOK</Link>
                            <Link href="/menu">INSTAGRAM</Link>
                        </div>
                    </div>
                    <div className={styles.footerCol}>
                        <p>At Taste of Trio's, we're all about bringing you mouthwatering flavors with a twist. From classic favorites to bold new bites, we serve up deliciousness that excites your taste buds. Fresh ingredients, creative recipes, and pure food joy—welcome to TOT House!</p>
                    </div>
                </div>
                <motion.h2 className={styles.footerLogo}>TOT<span>©</span></motion.h2>
                <div className={styles.zapstersCredit} style={{ textAlign: 'center', marginTop: '20px', fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600 }}>
                    Made by <a href="https://www.zapsters.in/" target="_blank" style={{ color: 'var(--deep-black)', textDecoration: 'underline' }}>ZAPSTERS</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
