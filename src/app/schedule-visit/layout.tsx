import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule a Visit | Rhythm PreSchool',
  description: 'Book a campus tour at Rhythm PreSchool. Meet our teachers, explore the classrooms and learn about our programs for children aged 1.5–5.5 years.',
};

export default function ScheduleVisitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
