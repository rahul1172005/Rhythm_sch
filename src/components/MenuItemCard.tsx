"use client";
import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import styles from '@/app/menu/menu.module.css';

interface Props {
    item: {
        id: string;
        name: string;
        price: number;
        imageUrl: string;
        description: string;
        isVeg?: boolean;
        isCombo?: boolean;
    };
}

const MenuItemCard = ({ item }: Props) => {
    const { addToCart } = useCart();

    return (
        <div className={`${styles.itemCard} ${item.isCombo ? styles.comboCard : ''}`}>
            <div className={styles.itemImage}>
                <Image src={item.imageUrl} alt={item.name} fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.itemInfo}>
                <div className={styles.itemHeader}>
                    <h3>{item.name}</h3>
                    {item.isVeg !== undefined && (
                        item.isVeg ? <span className={styles.veg}>Veg</span> : <span className={styles.nonVeg}>Non-Veg</span>
                    )}
                </div>
                <p className={styles.desc}>{item.description}</p>
                <div className={styles.itemFooter}>
                    <span className={styles.price}>${item.price.toFixed(2)}</span>
                    <button
                        className={styles.addBtn}
                        onClick={() => addToCart({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            imageUrl: item.imageUrl,
                            quantity: 1
                        })}
                    >
                        {item.isCombo ? 'Add Combo' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuItemCard;
