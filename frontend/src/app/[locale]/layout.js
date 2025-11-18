// app/[locale]/layout.js
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/config'
import { SpeedInsights } from '@vercel/speed-insights/next'
import FooterPrimary from '@/components/GlobalComponents/FooterPrimary'
import ClientLayout from './clientlayout'
import '../globals.css'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params
  if (!locales.includes(locale)) notFound()

  const messages = await getMessages(locale)
  const isRTL = locale === 'ar'

  // Wrap children in a div instead of html/body
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div lang={locale} dir={isRTL ? 'rtl' : 'ltr'} >
        <ClientLayout header2Routes={['/chauffeurs', '/blog']} locale={locale}>
          {children}
        </ClientLayout>

        <SpeedInsights />
        <FooterPrimary />
      </div>
    </NextIntlClientProvider>
  )
}
