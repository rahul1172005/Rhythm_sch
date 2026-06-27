"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import whatsappIcon from '../../public/images/image.png';

const WhatsAppCTA = () => {
    return (
        <motion.a
            href="https://wa.me/919566263956?text=Hello!%20I%27m%20interested%20in%20Rhythm%20Preschool%20admissions."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                border: '3px solid #1F2937', // Neobrutalist border
                zIndex: 1999,
                cursor: 'pointer',
                overflow: 'hidden',
                background: '#25D366'
            }}
            title="Chat with us on WhatsApp"
        >
            <Image
                src={whatsappIcon}
                alt="WhatsApp"
                width={60}
                height={60}
                style={{
                    objectFit: 'contain',
                    transform: 'scale(0.85) translate(0px, 0px)', // Added scale and X/Y translation controls
                    transition: 'transform 0.2s ease-in-out'
                }}
            />
        </motion.a>
    );
};

export default WhatsAppCTA;
