import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'FurSphere — Pet Personality Showcase',
  description: 'Explore FurSphere’s original pet-care concept and interactive pet personality questionnaire. A showcase without live AI generation or accounts.',
  icons: { icon: '/fursphere-mbti-offical/favicon.ico' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body style={{ fontFamily: 'Inter, sans-serif' }}>{children}</body></html>;
}
