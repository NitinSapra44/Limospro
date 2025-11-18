import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export default function Heading() {
  return (
    <section
      aria-labelledby="blog-page-heading"
      className="w-full flex flex-col items-center justify-center"
    >
      <div className="py-8 lg:w-[80%] max-w-[1440px] w-full flex flex-col p-2 lg:p-0 gap-8">
        {/* Breadcrumb navigation */}
        <nav aria-label="breadcrumb">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className="text-lg font-medium"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className="text-[#003366] text-lg font-medium"
                >
                  Blog
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>

        {/* Page heading */}
        <h1
          id="blog-page-heading"
          style={{ fontFamily: 'var(--font-montserrat)' }}
          className="text-[#003366] font-bold text-3xl"
        >
          Blog
        </h1>
      </div>
    </section>
  )
}
