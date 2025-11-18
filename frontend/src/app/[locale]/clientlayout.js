'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import HeaderPrimary from '@/components/GlobalComponents/HeaderPrimary';
import HeaderSecondary from '@/components/GlobalComponents/HeaderSecondary';

export default function ClientLayout({ children, header2Routes, locale }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Compute after locale removal
  const pathnameWithoutLocale = pathname?.replace(`/${locale}`, '') || '/';
  const useSecondaryHeader = header2Routes.includes(pathnameWithoutLocale);

  return (
    <>
      {/* Render consistent header during SSR */}
      {!mounted ? (
        <HeaderPrimary />
      ) : useSecondaryHeader ? (
        <HeaderSecondary />
      ) : (
        <HeaderPrimary />
      )}
      {children}
    </>
  );
}
