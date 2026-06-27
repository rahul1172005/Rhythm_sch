"use client";
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import styles from "./page.module.css";
import Image from "next/image";
import { ArrowRight, Star, Plus, Minus, Check } from 'lucide-react';
import Link from 'next/link';
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from 'framer-motion';
import { useAdmissions } from '@/context/AdmissionsContext';

export default function Home() {
  const { setInquiryOpen, setSelectedProgram } = useAdmissions();
  
  // State for FAQ accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const whyChooseCards = [
    { title: 'Play-Based Learning', text: 'Learning through games, exploration, storytelling, music, and creative activities.', color: 'var(--pop-yellow)' },
    { title: 'Safe Campus', text: 'Secure classrooms, CCTV monitoring, child-friendly infrastructure, and trained staff.', color: 'var(--pop-mint)' },
    { title: 'Experienced Educators', text: 'Passionate teachers who understand every child\'s individual learning style.', color: 'var(--pop-pink)' },
    { title: 'Smart Classrooms', text: 'Interactive digital learning combined with hands-on activities.', color: 'var(--pop-purple)' },
    { title: 'Holistic Development', text: 'Building communication, confidence, creativity, and emotional intelligence.', color: 'var(--pop-orange)' },
    { title: 'Parent Partnership', text: 'Regular updates, meetings, and collaborative learning with families.', color: 'var(--pop-yellow)' },
  ];

  const learningAreas = [
    { name: 'Language Development', color: '#FEE2E2', border: '#EF4444' },
    { name: 'Early Mathematics', color: '#FEF3C7', border: '#F59E0B' },
    { name: 'Science Exploration', color: '#D1FAE5', border: '#10B981' },
    { name: 'Art & Craft', color: '#E0F2FE', border: '#0EA5E9' },
    { name: 'Music & Dance', color: '#F3E8FF', border: '#A855F7' },
    { name: 'Physical Activities', color: '#FCE7F3', border: '#EC4899' },
    { name: 'Storytelling', color: '#E0F2FE', border: '#6366F1' },
    { name: 'Life Skills', color: '#FEF3C7', border: '#84CC16' }
  ];

  const programs = [
    { name: 'Play Group', age: '2–3 Years', focus: 'Learning through sensory play, music, movement, and social interaction.', color: 'var(--pop-mint)', key: 'PLAYGROUP' },
    { name: 'Nursery', age: '3–4 Years', focus: 'Language development, fine motor skills, early numeracy, creativity, and communication.', color: 'var(--pop-pink)', key: 'NURSERY' },
    { name: 'Junior KG', age: '4–5 Years', focus: 'Reading readiness, writing, mathematics, science exploration, and social skills.', color: 'var(--pop-purple)', key: 'JUNIOR_KG' },
    { name: 'Senior KG', age: '5–6 Years', focus: 'School readiness, problem solving, critical thinking, teamwork, and leadership.', color: 'var(--pop-orange)', key: 'SENIOR_KG' }
  ];

  const faqs = [
    { q: 'What is the admission age?', a: 'Children aged 2 to 6 years can enroll depending on the program. Our Play Group starts at 2 years, while Nursery starts at 3 years.' },
    { q: 'Do you provide transport?', a: 'Yes, secure and GPS-enabled school transport is available in selected areas with trained supervisors on board.' },
    { q: 'How do you communicate with parents?', a: 'Through regular parent meetings, digital updates, and progress reports.' },
    { q: 'Are meals provided?', a: 'Healthy snacks and meal options are available (customize based on your policy).' },
    { q: 'Do children have outdoor activities?', a: 'Yes, daily outdoor play and physical activities are part of the curriculum.' }
  ];

  const openFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollAnimationProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />

      {/* About Rhythm Section */}
      <motion.section {...scrollAnimationProps} className="section-padding" style={{ background: '#FFFDF9' }}>
        <div className="container">
          <div className={styles.narrativeGrid}>
            <div className={styles.narrativeImage}>
              <div style={{ position: 'relative', width: '100%', height: '400px' }}>
                <Image src="/images/preschool_classroom.png" alt="Happy classroom" fill style={{ objectFit: 'cover', borderRadius: '24px', border: 'var(--border-thick)' }} />
              </div>
              <div className="sticker" style={{ position: 'absolute', bottom: '20px', left: '-20px', fontSize: '20px' }}>SINCE 2026</div>
            </div>
            <div className={styles.narrativeContent}>
              <span className={styles.sectionSubtitle}>ABOUT OUR PRESCHOOL</span>
              <h2 className={styles.sectionHeading}>Growing Happy Hearts & Curious Minds</h2>
              <p>At Rhythm Preschool, we believe every child learns differently. Our play-based learning approach encourages curiosity, creativity, communication, and confidence while building the essential foundations for lifelong learning.</p>
              <p style={{ marginTop: '20px' }}>We create a safe, caring, and stimulating environment where children explore, imagine, discover, and grow at their own pace. Every activity is thoughtfully designed to support emotional, social, physical, and cognitive development.</p>
              <div style={{ marginTop: '30px' }}>
                <Link href="/about" className={styles.aboutLink}>OUR FULL STORY <ArrowRight size={18} /></Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Section */}
      <motion.section {...scrollAnimationProps} className="section-padding" style={{ background: 'var(--light-bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className={styles.sectionSubtitle}>THE RHYTHM PRESCHOOL DIFFERENCE</span>
            <h2 className={styles.sectionHeading} style={{ fontSize: '64px' }}>Why Choose Rhythm PreSchool?</h2>
          </div>
          <div className={styles.whyChooseGrid}>
            {whyChooseCards.map((card, i) => (
              <div key={i} className={styles.chooseCard} style={{ background: card.color }}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Programs Section */}
      <motion.section {...scrollAnimationProps} className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className={styles.sectionSubtitle}>CURRICULUM PROGRAMS</span>
            <h2 className={styles.sectionHeading} style={{ fontSize: '64px' }}>Our Programs</h2>
          </div>
          <div className={styles.programsGrid}>
            {programs.map((prog, i) => (
              <div key={i} className={styles.programCard} style={{ background: prog.color }}>
                <div className={styles.progHeader}>
                  <h3>{prog.name}</h3>
                  <span className={styles.ageBadge}>{prog.age}</span>
                </div>
                <p className={styles.focusText}>{prog.focus}</p>
                <div className={styles.progFooter}>
                  <button 
                    onClick={() => {
                      setSelectedProgram(prog.key);
                      setInquiryOpen(true);
                    }} 
                    className={styles.enrollBtn}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Learning Areas */}
      <motion.section {...scrollAnimationProps} className="section-padding" style={{ background: '#FFFDF9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className={styles.sectionSubtitle}>HOW WE LEARN</span>
            <h2 className={styles.sectionHeading} style={{ fontSize: '64px' }}>Learning Areas</h2>
          </div>
          <div className={styles.learningGrid}>
            {learningAreas.map((area, i) => (
              <div 
                key={i} 
                className={styles.learningCard} 
                style={{ background: area.color, borderColor: area.border, borderWidth: '3px', borderStyle: 'solid' }}
              >
                <span>{area.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Daily Routine */}
      <motion.section {...scrollAnimationProps} className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className={styles.routineGrid}>
            <div className={styles.routineContent}>
              <span className={styles.sectionSubtitle}>A DAY IN THE LIFE</span>
              <h2 className={styles.sectionHeading}>Our Daily Routine</h2>
              <p style={{ marginBottom: '30px' }}>Our structured yet flexible daily routine provides a reassuring rhythm for our children, balancing active play with focused learning, creative expressions, and nutritious breaks.</p>
              
              <div className={styles.tableWrapper}>
                <table className={styles.routineTable}>
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>9:00 AM</td><td>Welcome & Free Play</td></tr>
                    <tr><td>9:30 AM</td><td>Circle Time</td></tr>
                    <tr><td>10:00 AM</td><td>Learning Activities</td></tr>
                    <tr><td>10:45 AM</td><td>Snack Break</td></tr>
                    <tr><td>11:15 AM</td><td>Outdoor Play</td></tr>
                    <tr><td>12:00 PM</td><td>Creative Arts</td></tr>
                    <tr><td>12:45 PM</td><td>Story Time</td></tr>
                    <tr><td>1:00 PM</td><td>Home Time</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.routineImage}>
              <div style={{ position: 'relative', width: '100%', height: '450px' }}>
                <Image src="/images/preschool_playground.png" alt="Playground play" fill style={{ objectFit: 'cover', borderRadius: '24px', border: 'var(--border-thick)' }} />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Teaching Philosophy */}
      <motion.section {...scrollAnimationProps} className="section-padding" style={{ background: 'var(--pop-pink)' }}>
        <div className="container">
          <div className={styles.philosophyBox}>
            <span className={styles.sectionSubtitle} style={{ color: 'var(--deep-black)' }}>OUR TEACHING PHILOSOPHY</span>
            <h2 className={styles.sectionHeading} style={{ fontSize: '64px', marginBottom: '20px' }}>Learning Beyond Books</h2>
            <p className={styles.philLead}>Children don't simply memorize. They explore, imagine, build, create, play, and grow.</p>
            
            <div className={styles.philChips}>
              {['Explore', 'Imagine', 'Ask Questions', 'Build', 'Create', 'Collaborate', 'Play', 'Grow'].map((item, i) => (
                <div key={i} className={styles.philChip}><Check size={18} /> {item}</div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Admission Process */}
      <motion.section {...scrollAnimationProps} className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className={styles.sectionSubtitle}>BECOMING A MEMBER</span>
            <h2 className={styles.sectionHeading} style={{ fontSize: '64px' }}>Admission Process</h2>
          </div>
          
          <div className={styles.stepsContainer}>
            {[
              { step: 'Step 1', title: 'Book a Campus Visit', desc: 'Schedule a tour to experience our learning spaces first-hand.' },
              { step: 'Step 2', title: 'Meet Our Educators', desc: 'Discuss your child\'s needs and learn about our teaching style.' },
              { step: 'Step 3', title: 'Application Submission', desc: 'Fill out details online or in-person with student records.' },
              { step: 'Step 4', title: 'Admission Confirmation', desc: 'Receive offer and details regarding transport and schedules.' },
              { step: 'Step 5', title: 'Welcome to Rhythm PreSchool', desc: 'Start the joyful educational journey with child orientation.' }
            ].map((s, i) => (
              <div key={i} className={styles.stepCard}>
                <span className={styles.stepNum}>{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section {...scrollAnimationProps} className="section-padding" style={{ background: 'var(--light-bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className={styles.sectionSubtitle}>PARENT STORIES</span>
            <h2 className={styles.sectionHeading} style={{ fontSize: '64px' }}>Parent Testimonials</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {[
              { q: "Rhythm Preschool has given our daughter the confidence to express herself. Every day she comes home excited to share something new.", p: "Priya R." },
              { q: "The teachers genuinely care about every child. We couldn't have asked for a better beginning for our son.", p: "Karthik S." },
              { q: "Safe environment, wonderful staff, and an amazing curriculum.", p: "Meera V." }
            ].map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="var(--secondary)" color="var(--secondary)" />)}
                </div>
                <p>"{t.q}"</p>
                <strong>— {t.p}</strong>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQs */}
      <motion.section {...scrollAnimationProps} className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className={styles.faqLayout}>
            <div className={styles.faqHeader}>
              <span className={styles.sectionSubtitle}>QUESTIONS & ANSWERS</span>
              <h2 className={styles.sectionHeading}>Frequently Asked Questions</h2>
              <p style={{ marginTop: '20px' }}>Can't find the answer you're looking for? Reach out to our front desk team anytime.</p>
            </div>
            
            <div className={styles.faqList}>
              {faqs.map((faq, i) => (
                <div key={i} className={styles.faqItem} onClick={() => openFaq(i)}>
                  <div className={styles.faqQuestion}>
                    <h3>{faq.q}</h3>
                    <span>{activeFaq === i ? <Minus size={20} /> : <Plus size={20} />}</span>
                  </div>
                  <AnimatePresence initial={false}>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={styles.faqAnswer}
                      >
                        <p>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section {...scrollAnimationProps} style={{ background: 'var(--pop-purple)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ background: 'var(--pop-orange)', border: 'var(--border-thick)', padding: '60px 40px', borderRadius: '32px', textAlign: 'center', boxShadow: '8px 8px 0px var(--deep-black)' }}>
            <h2 style={{ fontSize: '48px', lineHeight: 1.1, marginBottom: '20px', fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>Give Your Child the Best Start</h2>
            <p style={{ fontSize: '18px', fontWeight: 600, marginBottom: '35px', maxWidth: '700px', margin: '0 auto 35px' }}>
              Every great journey begins with a joyful first step. Join Rhythm Preschool and help your child discover, imagine, and grow in a caring environment.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => setInquiryOpen(true)} className="sticker" style={{ cursor: 'pointer', fontSize: '20px', padding: '12px 35px', border: 'var(--border-thick)' }}>
                ENROLL NOW
              </button>
              <a href="tel:+919566263956" className="sticker" style={{ cursor: 'pointer', fontSize: '20px', padding: '12px 35px', background: 'white', color: 'var(--deep-black)', border: 'var(--border-thick)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                CALL US
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
