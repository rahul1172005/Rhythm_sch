"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1500); // 1.5s loader
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: '#FFFDF9', // Very soft, warm premium background
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '20px',
                    }}
                >
                    {/* Decorative Soft Background Glow */}
                    <div style={{
                        position: 'absolute',
                        width: '300px',
                        height: '300px',
                        background: 'radial-gradient(circle, rgba(254,243,199,0.6) 0%, rgba(255,253,249,0) 70%)',
                        zIndex: -1,
                        filter: 'blur(40px)',
                    }} />

                    {/* Logo Text Stacking */}
                    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <motion.h1
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                fontSize: '80px',
                                fontWeight: 900,
                                fontFamily: 'Poppins, sans-serif',
                                color: '#4F46E5', // Crisp brand purple/indigo
                                margin: 0,
                                textTransform: 'uppercase',
                                lineHeight: '1.2', // Increased line spacing to prevent any overlapping
                                letterSpacing: '-0.04em',
                            }}
                        >
                            Rhythm
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                fontSize: '38px',
                                fontWeight: 800,
                                fontFamily: 'Nunito, sans-serif',
                                color: '#4F46E5', // Match to same purple brand theme
                                margin: 0,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                lineHeight: '1.2', // Clear spacing
                            }}
                        >
                            PreSchool
                        </motion.h2>
                    </div>

                    {/* Playful Loader Dots */}
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                animate={{ y: [0, -12, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 0.6,
                                    delay: i * 0.15,
                                    ease: 'easeInOut'
                                }}
                                style={{
                                    width: '14px',
                                    height: '14px',
                                    borderRadius: '50%',
                                    border: '2px solid #1F2937', // Neobrutalist outline
                                    background: i === 0 ? '#4F46E5' : i === 1 ? '#FF6B6B' : '#10B981', // Violet, Pink, Mint
                                    boxShadow: '1.5px 1.5px 0px #1F2937'
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
