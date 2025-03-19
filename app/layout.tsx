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
    ],
    apple: [
      { url: '/bunny-57.png', sizes: '57x57', type: 'image/png' },
      { url: '/bunny-60.png', sizes: '60x60', type: 'image/png' },
      { url: '/bunny-72.png', sizes: '72x72', type: 'image/png' },
      { url: '/bunny-76.png', sizes: '76x76', type: 'image/png' },
    ],
    other: [
      { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    ]
  },
  manifest: '/site.webmanifest',
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