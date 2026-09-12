import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Our Preschool, Educators & Philosophy',
  description:
    'Learn about Rhythm PreSchool in Melmanambedu, Chennai. Discover our play-based learning philosophy, passionate educators, and commitment to holistic child development.',
  keywords: [
    'about rhythm preschool',
    'preschool philosophy chennai',
    'early childhood educators thiruvallur',
    'play based curriculum melmanambedu'
  ],
  alternates: {
    canonical: '/about'
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
