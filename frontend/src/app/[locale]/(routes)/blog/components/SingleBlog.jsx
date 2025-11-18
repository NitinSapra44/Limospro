import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { AllBlogs as posts } from '../data/BlogData'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { formatDate } from '@/lib/formatDate'

export default async function SingleBlog({ params }) {
  const { id } = await params
  const blog = posts.find((b) => b.id === id)

  if (!blog) return notFound()

  return (
    <article className="w-full py-16 flex flex-col items-center justify-center">
      <div className="w-full lg:w-[80%] max-w-[1440px] p-2 lg:p-0">
        {/* Breadcrumb navigation */}
        <nav aria-label="breadcrumb" className="pb-8">
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
                  className=" text-lg font-medium"
                >
                  Blog
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className="text-[#003366] text-lg font-medium"
                >
                  {blog.title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>

        {/* Blog Header */}
        <header className="flex flex-col gap-3 pb-8">
          <p
            style={{ fontFamily: 'var(--font-quicksand)' }}
            className="text-gray-600 font-semibold"
          >
            Published Date: {formatDate(blog.publishedAt)}
          </p>

          <h1
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="text-4xl font-bold text-[#003366]"
          >
            {blog.title}
          </h1>
        </header>

        {/* Featured Image */}
        <figure className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] mb-8">
          <Image
            src={blog.featuredImage}
            alt={blog.title}
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 768px) 100vw, 75vw"
          />
          {/* Optional figcaption if needed */}
          {/* <figcaption className="text-sm text-gray-500 mt-2">Image description</figcaption> */}
        </figure>

        {/* Optional Excerpt */}
        {blog.excerpt && (
          <p style={{ fontFamily: 'var(--font-varela)' }} className="text-lg text-gray-700 mt-2">
            {blog.excerpt}
          </p>
        )}

        {/* Blog Content */}
        <div
          className="prose prose-lg prose-blue max-w-none mt-8"
          style={{ fontFamily: 'var(--font-montserrat)' }}
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </article>
  )
}
