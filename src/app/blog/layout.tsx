import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Early Education & Parenting Blog | Rhythm PreSchool Chennai',
  description:
    'Expert insights on play-based learning, toddler routines, kindergarten readiness, and parenting advice for families in Chennai, Poonamallee, and Thiruvallur.',
  keywords: [
    'preschool blog chennai',
    'parenting tips toddlers india',
    'play based learning benefits',
    'preschool admissions checklist 2026',
    'kindergarten readiness thiruvallur'
  ],
  alternates: {
    canonical: '/blog'
  },
  openGraph: {
    title: 'Early Education & Parenting Blog | Rhythm PreSchool Chennai',
    description:
      'Expert insights on play-based learning, toddler routines, kindergarten readiness, and parenting advice.',
    url: 'https://rhythmpreschool.in/blog',
    type: 'website',
    images: [
      {
        url: '/images/school_logo_favicon.png',
        width: 512,
        height: 512,
        alt: 'Rhythm PreSchool Blog'
      }
    ]
  }
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
