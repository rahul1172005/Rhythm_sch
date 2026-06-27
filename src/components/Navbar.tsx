"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cart, setIsOpen: setIsCartOpen } = useCart();

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className={styles.nav}>
            <div className={`container ${styles.navContainer}`}>
                <div className={styles.navLeft}>
                    <Link href="/" className={styles.logo}>
                        TOT<span>©</span>
                    </Link>
                </div>

                <div className={styles.navCenter}>
                    <Link href="/menu">MENU</Link>
                    <Link href="/about">STORY</Link>
                    <Link href="/stores">STORES</Link>
                </div>

                <div className={styles.navRight}>
                    <button onClick={() => setIsCartOpen(true)} className={styles.cartBtn}>
                        CART ({totalItems})
                    </button>

                    <Link href="/admin" className={styles.adminIcon}>
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
                        <Link href="/menu" onClick={() => setIsOpen(false)}>MENU</Link>
                        <Link href="/about" onClick={() => setIsOpen(false)}>STORY</Link>
                        <Link href="/admin" onClick={() => setIsOpen(false)}>LOGIN</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
