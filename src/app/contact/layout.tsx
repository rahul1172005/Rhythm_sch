import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Rhythm PreSchool | Melmanambedu, Chennai',
  description:
    'Contact Rhythm PreSchool at No. 507 B, T. H. Road, Melmanambedu, Vellavedu Post, Thiruvallur Dist, Chennai. Phone: +91 95662 63956. Schedule your campus visit.',
  keywords: [
    'contact rhythm preschool',
    'preschool address melmanambedu',
    'rhythm school phone number',
    'preschool directions thiruvallur chennai'
  ],
  alternates: {
    canonical: '/contact'
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
