import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rhythm PreSchool Chennai',
    short_name: 'Rhythm PreSchool',
    description:
      'A nurturing preschool in Chennai & Thiruvallur where children learn through joyful play, exploration, and meaningful experiences.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F9FAFB',
    theme_color: '#4F46E5',
    icons: [
      {
        src: '/images/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/school_logo_favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
