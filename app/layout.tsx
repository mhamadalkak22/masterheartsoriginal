import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { MotionConfigProvider } from '@/components/motion-config-provider'
import { SiteShell } from '@/components/site-shell'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Master Hearts Marketing',
    template: '%s | Master Hearts Marketing',
  },
  description:
    'We craft beautiful, high-performance websites and digital experiences that drive results.',
  // Favicons: `app/icon.png` and `app/apple-icon.png` (from `public/goo/logo.png`)
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <MotionConfigProvider>
            <SiteShell>{children}</SiteShell>
          </MotionConfigProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
