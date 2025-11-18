'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'

function Tabs({ className, ...props }) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  )
}

function TabsList({ className, ...props }) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'bg-white text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]',
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        // base styles
        'relative inline-flex flex-1 items-center justify-center gap-1.5 px-2 py-1 text-xs font-medium text-[#A9A9A9] dark:text-muted-foreground whitespace-nowrap transition-colors duration-200 border-b-2 border-transparent',

        // when active (selected)
        'data-[state=active]:border-b-primary data-[state=active]:text-black',

        // focus styles
        'focus:outline-none focus-visible:ring-0 focus-visible:border-b-primary',

        // disabled styles
        'disabled:pointer-events-none disabled:opacity-50',

        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('flex-1 outline-none', className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
