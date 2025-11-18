import Image from 'next/image'
import { Menu, ChevronDown } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useTranslations } from 'next-intl';

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { headerMenu } from '@/data/FrontPage'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

export default function HeaderSecondary() {
   const t = useTranslations();
  return (
    <header className="w-full   ">
      <div
        className="w-full lg:w-[90%] max-w-[1440px] 
                      mx-auto py-5 
                      flex items-center justify-between 
                    text-white"
      >
        {/* Mobile / Tablet Header (<lg) */}
        <div className="flex items-center justify-between w-full lg:hidden">
          {/* Logo */}
          <Link href="/">
            <Image src="/Logos/logo-limospro-2.png" alt="Limospro Logo" width={200} height={60} />
          </Link>

          {/* Right side: Sign In button (sm+) + Hamburger */}
          <div className="flex items-center gap-4">
            {/* Sign In button only sm+ */}
            <Button
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="hidden sm:flex items-center justify-center bg-[#FFB300] font-bold text-base text-black px-6 py-3 rounded-full"
            >
              {t('header.signIn')}
            </Button>

            {/* Hamburger Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-black mr-3  hover:cursor-pointer"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="bg-black text-white flex flex-col gap-6 p-6 z-[9999]"
              >
                <SheetTitle className="sr-only">Menu</SheetTitle>
                {/* Mobile Accordion Menu */}
                <Accordion type="single" collapsible className="w-full">
                  {headerMenu.map((menu, idx) =>
                    menu.items ? (
                      <AccordionItem key={idx} value={`item-${idx}`}>
                        <AccordionTrigger
                          style={{ fontFamily: 'var(--font-montserrat)' }}
                          className="font-bold"
                        >
                          {t(menu.title)}
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-2 pl-4">
                          {menu.items.map((item, i) => (
                            <Link
                              key={i}
                              href={item.href}
                              style={{ fontFamily: 'var(--font-montserrat)' }}
                              className="text-sm text-gray-300  hover:text-white"
                            >
                              {t(item.name)}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <Link
                        key={idx}
                        href={menu.href}
                        className="block text-sm py-2 font-bold"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                      >
                        {t(menu.title)}
                      </Link>
                    )
                  )}
                </Accordion>

                {/* Sign In button inside menu (always visible) */}
                <Button
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className="bg-[#FFB300] text-black font-bold text-base mt-4 w-full hover:cursor-pointer hover:text-white hover:bg-[#FFB300]"
                >
                  {t('header.signIn')}
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Desktop Header (lg+) */}
        <div className="hidden lg:flex items-center justify-evenly w-full">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/Logos/logo-limospro-2.png"
              alt="Limospro Logo"
              width={200}
              height={60}
              className="object-contain"
            />
          </Link>

          {/* Menu items */}
          {headerMenu.map((menu, idx) =>
            menu.items ? (
              <DropdownMenu key={idx}>
                <DropdownMenuTrigger
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className="font-bold text-black text-base flex items-center gap-1 hover:cursor-pointer"
                >
                   {t(menu.title)} <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black shadow-lg rounded-md p-2 min-w-[180px]">
                  {menu.items.map((item, i) => (
                    <DropdownMenuItem key={i} asChild>
                      <Link
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                        href={item.href}
                        className="px-3 py-2 rounded text-white text-sm font-bold block hover:cursor-pointer"
                      >
                       {t(item.name)}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                style={{ fontFamily: 'var(--font-montserrat)' }}
                key={idx}
                href={menu.href}
                className="text-black font-bold text-base"
              >
                {t(menu.title)}
              </Link>
            )
          )}

          {/* Sign In button for desktop */}
          <Button
            aria-label="Sign In"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="bg-[#FFB300] font-bold text-black py-2 px-6 rounded-full hover:cursor-pointer hover:text-white hover:bg-[#FFB300]"
          >
            {t('header.signIn')}
          </Button>
        </div>
      </div>
    </header>
  )
}
