"use client";
import React from 'react';
import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';

export default function LogoutButton() {
    return (
        <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            style={{
                background: '#E31837',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                fontFamily: 'Archivo Black',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '12px'
            }}
        >
            <LogOut size={14} /> LOGOUT
        </button>
    );
}
