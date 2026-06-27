"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './CartDrawer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const CartDrawer = () => {
    const { cart, isOpen, setIsOpen, updateQuantity, removeFromCart } = useCart();

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className={styles.overlay}
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className={styles.drawer}
                    >
                        <div className={styles.header}>
                            <h2>YOUR BAG</h2>
                            <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
                                <X size={20} />
                            </button>
                        </div>

                        <div className={styles.itemsList}>
                            {cart.length === 0 ? (
                                <div className={styles.empty}>
                                    <ShoppingBag size={64} strokeWidth={1} style={{ marginBottom: '20px', opacity: 0.3 }} />
                                    <p>YOUR BAG IS EMPTY</p>
                                    <button onClick={() => setIsOpen(false)} className={styles.shopBtn}>
                                        START ORDERING
                                    </button>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className={styles.item}>
                                        <div className={styles.itemImg}>
                                            <Image src={item.imageUrl} alt={item.name} fill style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div className={styles.itemInfo}>
                                            <h3>{item.name}</h3>
                                            <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
                                            <div className={styles.quantityControls}>
                                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14} /></button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className={styles.footer}>
                                <div className={styles.subtotal}>
                                    <span>SUBTOTAL</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <Link href="/checkout" onClick={() => setIsOpen(false)}>
                                    <button className={styles.checkoutBtn}>CHECKOUT NOW</button>
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
