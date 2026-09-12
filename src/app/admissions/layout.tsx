import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preschool Admissions 2026-2027 Open | Enroll Now',
  description:
    'Admissions open for Playgroup, Nursery, Junior KG, and Senior KG for the 2026-2027 academic session at Rhythm PreSchool, Melmanambedu, Chennai.',
  keywords: [
    'preschool admissions 2026 chennai',
    'nursery school enrollment thiruvallur',
    'playgroup admissions vellavedu',
    'kg admission form melmanambedu'
  ],
  alternates: {
    canonical: '/admissions'
  }
};

export default function AdmissionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
