"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import styles from "./page.module.css";
import Image from "next/image";
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import HomePopularCard from "@/components/HomePopularCard";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';

export default function Home() {
  const categories = [
    { title: 'BURGER', img: '/images/hero_burgers_trio.png', color: 'var(--pop-mint)' },
    { title: 'PIZZZZA', img: '/images/hero_burgers_trio.png', color: 'var(--pop-purple)' },
    { title: 'SHAWS', img: '/images/shawarma_luxury.png', color: 'var(--pop-pink)' },
    { title: 'SANDW', img: '/images/trio_combo_pack.png', color: 'var(--pop-yellow)' },
  ];

  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />

      {/* Narrative Section */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.narrativeGrid}>
            <div className={styles.narrativeImage}>
              <Image src="/images/trio_chefs_flaming_shawarma.png" alt="Chef" width={600} height={800} style={{ objectFit: 'cover', borderRadius: '40px' }} />
              <div className="sticker" style={{ position: 'absolute', bottom: '40px', left: '-20px', fontSize: '24px' }}>ORDER NOW</div>
            </div>
            <div className={styles.narrativeContent}>
              <p>At Taste of Trio's, we're all about bringing you mouthwatering flavors with a twist. From classic favorites to bold new bites, we serve up deliciousness that excites your taste buds. Fresh ingredients, creative recipes, and pure food joy—welcome to TOT House!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Receipt Section */}
      <section className={styles.receiptSection}>
        <div className="container">
          <div className={styles.receiptCircle}>
            <Image src="/images/hero_burgers_trio.png" alt="Food" fill style={{ objectFit: 'cover' }} />
            <div className={styles.receiptOverlay}>
              <div className={styles.receiptPaper}>
                <h3 className={styles.receiptLogo}>TOT</h3>
                <p>Invoice #: 00012345</p>
                <p>Date: 01/05/2026</p>
                <div className={styles.receiptDivider}></div>
                <div className={styles.receiptLine}><span>1x Trio Burger</span> <span>₹399</span></div>
                <div className={styles.receiptLine}><span>2x Spicy Shawarma</span> <span>₹498</span></div>
                <div className={styles.receiptDivider}></div>
                <div className={styles.receiptLine}><strong>TOTAL</strong> <strong>₹897</strong></div>
                <div className={styles.receiptBarcode}>|| |||| | ||||| | ||</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catchy Headline */}
      <section className="section-padding">
        <div className="container">
          <h2 className={styles.catchyHeadline}>FOOD YOU NEVER CAN FORGET, AND YOU WILL BUY DAILY</h2>
        </div>
      </section>

      {/* Category Grid */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className={styles.editorialGrid}>
            {categories.map((cat, i) => (
              <div key={i} className={styles.editorialCard} style={{ background: cat.color }}>
                <div className={styles.cardHeader}>
                  <h3>{cat.title}</h3>
                  <div className={styles.cardHeaderMeta}>
                    <span>(2026)</span>
                    <span>PREMIUM QUALITY</span>
                  </div>
                </div>
                <div className={styles.cardImage}>
                  <Image src={cat.img} alt={cat.title} fill style={{ objectFit: 'cover' }} />
                  <div className="sticker" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-10deg)', fontSize: '12px' }}>ADD TO CART</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior / Collage Section */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.collagePoster}>
            <div className={styles.polaroidGrid}>
              <div className={styles.polaroid}><Image src="/images/hero_burgers_trio.png" width={200} height={200} alt="P1" /></div>
              <div className={styles.polaroid}><Image src="/images/trio_chefs_flaming_shawarma.png" width={200} height={200} alt="P2" /></div>
              <div className={styles.polaroid}><Image src="/images/shawarma_luxury.png" width={200} height={200} alt="P3" /></div>
            </div>
            <div className={styles.interiorBadge}>INTERIOR</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
