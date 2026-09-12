import React from 'react';

interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const schoolLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['Preschool', 'EducationalOrganization', 'LocalBusiness', 'ChildCare'],
  '@id': 'https://rhythmpreschool.in/#organization',
  name: 'Rhythm PreSchool',
  alternateName: ['Rhythm Preschool Chennai', 'Rhythm Kids', 'Rhythm PreSchool Melmanambedu'],
  url: 'https://rhythmpreschool.in',
  logo: 'https://rhythmpreschool.in/images/school_logo_favicon.png',
  image: 'https://rhythmpreschool.in/images/school_logo_favicon.png',
  description:
    'A nurturing preschool in Chennai & Thiruvallur where children learn through play, creativity, exploration, and meaningful experiences in a safe, joyful environment.',
  telephone: '+91 95662 63956',
  email: 'rhythmpreschool.in@gmail.com',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 507 B, T. H. Road, Melmanambedu, Vellavedu Post',
    addressLocality: 'Thiruvallur Dist, Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600124',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.0645,
    longitude: 80.0385
  },
  hasMap: 'https://maps.google.com/?q=13.0645,80.0385',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '16:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '12:00'
    }
  ],
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Chennai' },
    { '@type': 'AdministrativeArea', name: 'Melmanambedu' },
    { '@type': 'AdministrativeArea', name: 'Vellavedu' },
    { '@type': 'AdministrativeArea', name: 'Poonamallee' },
    { '@type': 'AdministrativeArea', name: 'Thiruvallur' },
    { '@type': 'AdministrativeArea', name: 'Thirumazhisai' },
    { '@type': 'AdministrativeArea', name: 'Chembarambakkam' },
    { '@type': 'AdministrativeArea', name: 'Kuthambakkam' }
  ],
  sameAs: [
    'https://www.facebook.com/rhythmpreschool',
    'https://www.instagram.com/rhythmpreschool'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Preschool Programs',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'EducationalOccupationalProgram',
          name: 'Playgroup Program',
          description: 'Sensory play, rhythm, music, and motor skill development for toddlers aged 2-3 years.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'EducationalOccupationalProgram',
          name: 'Nursery Program',
          description: 'Linguistic phonics, fine motor development, numeracy, and cooperative socialization for children aged 3-4 years.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'EducationalOccupationalProgram',
          name: 'Junior KG',
          description: 'Reading readiness, early mathematics, STEM exploration, and creative expression for children aged 4-5 years.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'EducationalOccupationalProgram',
          name: 'Senior KG',
          description: 'Comprehensive primary school readiness, problem solving, teamwork, and leadership for children aged 5-6 years.'
        }
      }
    ]
  }
};
