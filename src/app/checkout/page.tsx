"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import styles from './checkout.module.css';
import { CreditCard, Truck, MapPin, Phone, User as UserIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
    const { cart, total, clearCart } = useCart();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            toast.success('Order placed successfully!');
            clearCart();
            router.push('/');
        }, 2000);
    };

    if (cart.length === 0) {
        return (
            <main style={{ paddingTop: '150px', textAlign: 'center' }}>
                <Navbar />
                <h2>Your cart is empty.</h2>
                <p>Go back to menu to add some delicious food.</p>
            </main>
        )
    }

    return (
        <main className={styles.main}>
            <Navbar />
            <div className="container">
                <h1 className={styles.title}>Checkout</h1>

                <div className={styles.grid}>
                    <div className={styles.formSection}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label><UserIcon size={18} /> Full Name</label>
                                <input type="text" required placeholder="John Doe" />
                            </div>
                            <div className={styles.formGroup}>
                                <label><Phone size={18} /> Phone Number</label>
                                <input type="tel" required placeholder="+1 234 567 890" />
                            </div>
                            <div className={styles.formGroup}>
                                <label><MapPin size={18} /> Delivery Address</label>
                                <textarea required placeholder="Enter your full address" rows={3}></textarea>
                            </div>

                            <div className={styles.paymentMethods}>
                                <h3>Payment Method</h3>
                                <div className={styles.paymentGrid}>
                                    <label className={styles.paymentOption}>
                                        <input type="radio" name="payment" defaultChecked />
                                        <div className={styles.optionContent}>
                                            <CreditCard />
                                            <span>Card / UPI</span>
                                        </div>
                                    </label>
                                    <label className={styles.paymentOption}>
                                        <input type="radio" name="payment" />
                                        <div className={styles.optionContent}>
                                            <Truck />
                                            <span>Cash on Delivery</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <button type="submit" disabled={loading} className={styles.submitBtn}>
                                {loading ? 'Processing...' : `Pay $${(total + 5.99).toFixed(2)}`}
                            </button>
                        </form>
                    </div>

                    <div className={styles.summarySection}>
                        <div className={styles.summaryCard}>
                            <h2>Order Summary</h2>
                            <div className={styles.summaryItems}>
                                {cart.map(item => (
                                    <div key={item.id} className={styles.summaryItem}>
                                        <span>{item.quantity}x {item.name}</span>
                                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.divider} />
                            <div className={styles.summaryRow}>
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span>Delivery Charge</span>
                                <span>$5.99</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span>Tax (GST)</span>
                                <span>$2.50</span>
                            </div>
                            <div className={styles.divider} />
                            <div className={`${styles.summaryRow} ${styles.total}`}>
                                <span>Total</span>
                                <span>${(total + 5.99 + 2.50).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
