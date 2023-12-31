import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Cioso',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={''}>{children}</body>
    </html>
  )
}
