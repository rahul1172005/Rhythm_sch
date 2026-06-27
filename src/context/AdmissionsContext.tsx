"use client";
import React, { createContext, useContext, useState } from 'react';

type AdmissionsContextType = {
    inquiryOpen: boolean;
    setInquiryOpen: (open: boolean) => void;
    selectedProgram: string;
    setSelectedProgram: (program: string) => void;
};

const AdmissionsContext = createContext<AdmissionsContextType | undefined>(undefined);

export const AdmissionsProvider = ({ children }: { children: React.ReactNode }) => {
    const [inquiryOpen, setInquiryOpen] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState('');

    return (
        <AdmissionsContext.Provider value={{
            inquiryOpen,
            setInquiryOpen,
            selectedProgram,
            setSelectedProgram
        }}>
            {children}
        </AdmissionsContext.Provider>
    );
};

export const useAdmissions = () => {
    const context = useContext(AdmissionsContext);
    if (!context) throw new Error('useAdmissions must be used within AdmissionsProvider');
    return context;
};
