"use client";
import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import styles from '@/app/page.module.css';

interface Props {
    item: {
        id: string;
        name: string;
        price: string;
        img: string;
        tag: string;
    };
}

const HomePopularCard = ({ item }: Props) => {
    const { addToCart, setIsOpen } = useCart();

    return (
        <div className={styles.editorialCard} style={{ background: 'white' }}>
            <div className={styles.cardHeader}>
                <div className={styles.cardHeaderMeta}>
                    <span>{item.tag}</span>
                    <span>(BEST SELLER)</span>
                </div>
                <h3 style={{ fontSize: '32px', minHeight: '80px', display: 'flex', alignItems: 'center' }}>{item.name}</h3>
            </div>
            <div className={styles.cardImage}>
                <Image src={item.img} alt={item.name} fill style={{ objectFit: 'cover' }} />
                <button
                    className="sticker"
                    style={{ position: 'absolute', bottom: '20px', right: '20px', cursor: 'pointer' }}
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
                >
                    ADD TO CART ({item.price})
                </button>
            </div>
        </div>
    );
};

export default HomePopularCard;
