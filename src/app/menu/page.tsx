"use client";
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./menu.module.css";
import Image from "next/image";
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const MenuPage = () => {
    const [activeCategory, setActiveCategory] = useState('ALL');
    const { addToCart, setIsOpen } = useCart();

    const menuItems = [
        { id: '1', name: 'THE OG TRIO BURGER', price: '₹399', desc: 'Our signature burger with triple-layered patties, melted cheddar, and secret TOT sauce.', category: 'BURGERS', type: 'NON-VEG', img: '/images/hero_burgers_trio.png' },
        { id: '2', name: 'SPICY SHAWARMA WRAP', price: '₹249', desc: 'Lebanese style grilled chicken with garlic sauce and spicy pickles.', category: 'WRAPS', type: 'NON-VEG', img: '/images/shawarma_luxury.png' },
        { id: '3', name: 'SIGNATURE COMBO BOX', price: '₹699', desc: 'A burger, large fries, shawarma roll, and two drinks for the soul.', category: 'COMBOS', type: 'NON-VEG', img: '/images/trio_combo_pack.png' },
        { id: '4', name: 'ZAPSTERS SPECIAL PIZZA', price: '₹499', desc: 'Thin crust with authentic spices and creamy cheese.', category: 'PIZZAS', type: 'VEG', img: '/images/hero_burgers_trio.png' },
        { id: '5', name: 'FIREBIRD WINGS (12PCS)', price: '₹349', desc: 'Crispy wings tossed in our signature Nashville-style fire sauce.', category: 'SIDES', type: 'NON-VEG', img: '/images/shawarma_luxury.png' },
        { id: '6', name: 'TRUFFLE MASHED LOADED FRIES', price: '₹199', desc: 'Hand-cut fries topped with truffle oil, parmesan, and chives.', category: 'SIDES', type: 'VEG', img: '/images/hero_burgers_trio.png' },
        { id: '7', name: 'TOT LAVA CAKE', price: '₹179', desc: 'Oozing Belgian chocolate center served with vanilla bean gelato.', category: 'DESSERTS', type: 'VEG', img: '/images/trio_combo_pack.png' },
        { id: '8', name: 'PISTACHIO KULFI SHAKE', price: '₹149', desc: 'Traditional kulfi flavors blended into a thick, creamy milkshake.', category: 'DESSERTS', type: 'VEG', img: '/images/hero_burgers_trio.png' }
    ];

    const categories = ['ALL', 'BURGERS', 'COMBOS', 'PIZZAS', 'WRAPS', 'SIDES', 'DESSERTS'];

    const filteredItems = activeCategory === 'ALL'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <main className={styles.main}>
            <Navbar />

            <div className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>THE MENU<span>©</span></h1>
                    <p className={styles.subtitle}>Hand-crafted flavors, dangerously delicious.</p>
                </div>
            </div>

            <div className={styles.filterSection}>
                <div className="container">
                    <div className={styles.chips}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`${styles.chip} ${activeCategory === cat ? styles.active : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className={styles.menuGrid}>
                        <AnimatePresence mode='popLayout'>
                            {filteredItems.map((item) => (
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
                                            <span className={item.type === 'VEG' ? styles.veg : styles.nonVeg}>{item.type}</span>
                                            <span>{item.category}</span>
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
                                                <span className={styles.price}>{item.price}</span>
                                                <button
                                                    onClick={() => {
                                                        addToCart({
                                                            id: item.id,
                                                            name: item.name,
                                                            price: parseFloat(item.price.replace('₹', '')),
                                                            imageUrl: item.img,
                                                            quantity: 1
                                                        });
                                                        setIsOpen(true);
                                                    }}
                                                    className={styles.addBtn}
                                                >
                                                    ADD TO CART
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>


            <Footer />
        </main>
    );
};

export default MenuPage;
