import type { Metadata } from 'next'
import '@octoai-apps/design-system/dist/styles.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Aquarelle | Powered by OctoAI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}




