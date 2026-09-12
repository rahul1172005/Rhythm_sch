import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Safe Campus Facilities, Smart Classrooms & Play Zones',
  description:
    'Tour our state-of-the-art facilities at Rhythm PreSchool: child-safe furniture, CCTV security, interactive smart classrooms, sensory play zones, and GPS transport.',
  keywords: [
    'preschool facilities chennai',
    'safe kindergarten thiruvallur',
    'cctv monitored school melmanambedu',
    'preschool transport poonamallee'
  ],
  alternates: {
    canonical: '/facilities'
  }
};

export default function FacilitiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
