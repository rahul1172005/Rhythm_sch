import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './slug.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS, getBlogPost, getRelatedPosts } from '@/data/blogPosts';
import { JsonLd } from '@/components/JsonLd';
import {
  Clock,
  Calendar,
  ChevronRight,
  Sparkles,
  ArrowRight,
  BookOpenCheck,
  Share2
} from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Article Not Found | Rhythm PreSchool',
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://rhythmpreschool.in/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 512,
          height: 512,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: `https://rhythmpreschool.in${post.image}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://rhythmpreschool.in/blog/${post.slug}`,
    },
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Rhythm PreSchool',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rhythmpreschool.in/images/school_logo_favicon.png',
      },
    },
    keywords: post.keywords.join(', '),
    articleSection: post.category,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://rhythmpreschool.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://rhythmpreschool.in/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://rhythmpreschool.in/blog/${post.slug}`,
      },
    ],
  };

  return (
    <main className={styles.articleMain}>
      <JsonLd data={blogPostingSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      <div className="container">
        <header className={styles.articleHeader}>
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <Link href="/blog">Blog</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--deep-black)', fontWeight: 700 }}>{post.category}</span>
          </nav>

          <span className={styles.categoryBadge}>{post.category}</span>
          <h1 className={styles.articleTitle}>{post.title}</h1>

          <div className={styles.articleMeta}>
            <div className={styles.authorDetails}>
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={44}
                height={44}
                className={styles.authorAvatar}
              />
              <div>
                <div className={styles.authorName}>{post.author.name}</div>
                <div className={styles.authorRole}>{post.author.role}</div>
              </div>
            </div>

            <div className={styles.metaStats}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={16} /> {post.readTime}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={16} /> {post.publishedAt}
              </span>
            </div>
          </div>

          {/* Key Takeaways */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className={styles.takeawaysBox}>
              <div className={styles.takeawaysTitle}>
                <BookOpenCheck size={20} color="var(--primary)" />
                KEY TAKEAWAYS FOR PARENTS
              </div>
              <ul className={styles.takeawaysList}>
                {post.keyTakeaways.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </header>

        {/* Article Body */}
        <article className={styles.articleBody}>
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          {/* Inline Campus Visit CTA */}
          <div className={styles.inlineCta}>
            <Sparkles size={32} color="var(--secondary)" style={{ marginBottom: '8px' }} />
            <h3 className={styles.ctaTitle}>Looking for the Best Preschool in West Chennai?</h3>
            <p className={styles.ctaSubtitle}>
              Give your child the gift of joyful, exploratory play-based learning at Rhythm PreSchool, Melmanambedu.
            </p>
            <Link href="/contact" className={styles.ctaBtn}>
              SCHEDULE A CAMPUS TOUR <ArrowRight size={18} />
            </Link>
          </div>

          {/* Tags */}
          <div className={styles.tagsContainer}>
            <span style={{ fontWeight: 800, fontSize: '13px', alignSelf: 'center', marginRight: '6px' }}>
              TAGS:
            </span>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className={styles.relatedSection}>
            <h2 className={styles.relatedTitle}>More Insights for Parents</h2>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((rel) => (
                <div
                  key={rel.slug}
                  style={{
                    background: 'white',
                    border: 'var(--border-thick)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-block)',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <span
                    style={{
                      background: 'var(--pop-mint)',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontSize: '11px',
                      fontWeight: 800,
                      alignSelf: 'flex-start',
                      marginBottom: '12px',
                      border: '1px solid var(--deep-black)',
                    }}
                  >
                    {rel.category}
                  </span>
                  <h4 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px' }}>
                    <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                  </h4>
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#4B5563',
                      lineHeight: '1.5',
                      marginBottom: '16px',
                      flexGrow: 1,
                    }}
                  >
                    {rel.excerpt}
                  </p>
                  <Link
                    href={`/blog/${rel.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontWeight: 800,
                      color: 'var(--primary)',
                      fontSize: '14px',
                    }}
                  >
                    READ ARTICLE <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </main>
  );
}
