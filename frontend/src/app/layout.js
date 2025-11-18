// app/layout.js
import './globals.css'
import { Geist, Geist_Mono, Montserrat, Varela, Quicksand } from 'next/font/google'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-montserrat',
})
const varela = Varela({ weight: '400', subsets: ['latin'], variable: '--font-varela' })
const quicksand = Quicksand({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-quicksand',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${varela.variable} ${quicksand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
