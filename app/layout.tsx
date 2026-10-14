import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title: 'NOMAA Coffee — Your Daily Coffee Ritual', description: 'Bold flavors, smooth blends, and refreshing moments. Discover your daily coffee ritual with NOMAA.'};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
