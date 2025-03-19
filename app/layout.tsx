import type React from "react"
import "@/app/globals.css"
import { JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata = {
  title: "bunnyrabbit",
  description: "Something mysterious is coming soon...",
  icons: {
    icon: [
      { url: '/bunny-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/bunny-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/bunny-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/bunny-57.png', sizes: '57x57', type: 'image/png' },
      { url: '/bunny-60.png', sizes: '60x60', type: 'image/png' },
      { url: '/bunny-70.png', sizes: '70x70', type: 'image/png' },
      { url: '/bunny-72.png', sizes: '72x72', type: 'image/png' },
      { url: '/bunny-76.png', sizes: '76x76', type: 'image/png' },
      { url: '/bunny-100.png', sizes: '100x100', type: 'image/png' },
    ],
    other: [
      { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/svg+xml', url: '/favicon.svg' },
      { rel: 'icon', type: 'image/x-icon', url: '/favicon.ico' },
    ]
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "bunnyrabbit",
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/bunny-32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={mono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="theme"
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'