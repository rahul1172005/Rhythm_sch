import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preschool Programs: Playgroup, Nursery, Junior & Senior KG',
  description:
    'Explore Rhythm PreSchool curriculum programs: Playgroup (2-3 yrs), Nursery (3-4 yrs), Junior KG (4-5 yrs), and Senior KG (5-6 yrs) in Chennai & Thiruvallur.',
  keywords: [
    'preschool programs chennai',
    'playgroup admissions',
    'nursery classes thiruvallur',
    'junior kg syllabus chennai',
    'senior kg admissions vellavedu'
  ],
  alternates: {
    canonical: '/programs'
  }
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
