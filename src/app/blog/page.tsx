"use client";

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './blog.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Clock, Calendar, Sparkles, Search, Compass } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '@/data/blogPosts';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['All', 'Early Learning', 'Parenting Tips', 'Local Guide', 'Admissions'] as const;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = BLOG_POSTS[0];

  return (
    <main className={styles.blogMain}>
      <Navbar />

      <section className={styles.heroSection}>
        <div className="container">
          <span className={styles.badge}>
            <Sparkles size={14} style={{ display: 'inline', marginRight: '6px' }} />
            RHYTHM LEARNING HUB
          </span>
          <h1 className={styles.title}>Preschool & Parenting Insights</h1>
          <p className={styles.subtitle}>
            Explore proven early childhood development tips, play-based learning frameworks, and local educational guides crafted by our educators in Chennai.
          </p>

          <div className={styles.controlsBar}>
            <div style={{ position: 'relative' }}>
              <Search
                size={20}
                style={{
                  position: 'absolute',
                  left: '18px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#9CA3AF'
                }}
              />
              <input
                type="text"
                placeholder="Search articles on play, admissions, routines, or Chennai schools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
                style={{ paddingLeft: '50px' }}
              />
            </div>

            <div className={styles.categoryPills}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`${styles.pill} ${selectedCategory === cat ? styles.pillActive : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Card (Shown when on "All" and no search query) */}
          {selectedCategory === 'All' && searchQuery.trim() === '' && featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={styles.featuredCard}
            >
              <div className={styles.featuredImage}>
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={220}
                  height={220}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div className={styles.featuredMeta}>
                  <span className={styles.categoryTag}>{featuredPost.category}</span>
                  <span style={{ fontSize: '13px', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={14} /> {featuredPost.readTime}
                  </span>
                  <span style={{ fontSize: '13px', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={14} /> {featuredPost.publishedAt}
                  </span>
                </div>
                <h2 className={styles.featuredTitle}>
                  <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>
                <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
                <Link href={`/blog/${featuredPost.slug}`} className={styles.readMoreBtn}>
                  READ ARTICLE <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          )}

          {/* Posts Grid */}
          <div className={styles.postsGrid}>
            <AnimatePresence>
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={styles.postCard}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.categoryTag}>{post.category}</span>
                    <span style={{ fontSize: '12px', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={13} /> {post.readTime}
                    </span>
                  </div>

                  <h3 className={styles.postTitle}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className={styles.postExcerpt}>{post.excerpt}</p>

                  <div className={styles.cardFooter}>
                    <div className={styles.authorMeta}>
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={34}
                        height={34}
                        className={styles.authorAvatar}
                      />
                      <div>
                        <div className={styles.authorName}>{post.author.name}</div>
                        <div className={styles.postDate}>{post.publishedAt}</div>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        color: 'var(--primary)',
                        fontWeight: '800',
                        fontSize: '14px',
                        gap: '4px'
                      }}
                    >
                      READ <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filteredPosts.length === 0 && (
            <div style={{ padding: '60px 20px', textAlign: 'center' }}>
              <h3>No articles found</h3>
              <p style={{ color: '#6B7280', marginTop: '8px' }}>
                Try searching for different keywords or reset your category filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className={styles.pill}
                style={{ marginTop: '16px' }}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Admissions Callout Banner */}
          <div className={styles.ctaBanner}>
            <Compass size={40} color="var(--primary)" />
            <h2 className={styles.ctaTitle}>Experience the Rhythm Campus in Person</h2>
            <p className={styles.ctaSubtitle}>
              Tour our child-safe classrooms, outdoor activity zones, and play facilities at Melmanambedu, Chennai. Speak with our caring educators today.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryCta}>
                SCHEDULE A CAMPUS VISIT <ArrowRight size={18} />
              </Link>
              <Link
                href="/admissions"
                className={styles.pill}
                style={{ padding: '14px 28px', fontSize: '15px' }}
              >
                VIEW ADMISSIONS PROCESS
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
