import { AllBlogs } from '../data/BlogData'
import Image from 'next/image'
import { formatDate } from '@/lib/formatDate'
import Link from 'next/link'
import BlogCard from '@/components/GlobalComponents/Reusable-Cards/blogCard'
import PaginationDemo from './BlogPagination'
const POSTS_PER_PAGE = 6

export default async function Blogs({ searchParams }) {
  const searchParamsData = await searchParams
  const page = parseInt(searchParamsData?.page || '1', 10)

  const heroBlog = AllBlogs[0]
  const otherBlogs = AllBlogs.slice(1)

  const startIndex = (page - 1) * POSTS_PER_PAGE
  const paginatedBlogs = otherBlogs.slice(startIndex, startIndex + POSTS_PER_PAGE)

  const totalPages = Math.ceil(otherBlogs.length / POSTS_PER_PAGE)

  return (
    <section
      aria-labelledby="blog-listing-heading"
      className="w-full py-16 flex flex-col items-center justify-center"
    >
      <div className="w-full lg:w-[80%] max-w-[1440px] p-2 lg:p-0">
        {/* ✅ Hero only on first page */}
        {page === 1 && (
          <article className="flex flex-col pb-16 lg:flex-row gap-4">
            <Link href={`/blog/${heroBlog.id}`} className="flex-1 flex flex-col lg:flex-row gap-4">
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] lg:flex-1">
                <Image
                  src={heroBlog.featuredImage}
                  alt={heroBlog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="flex flex-col gap-4 lg:flex-1">
                <p
                  style={{ fontFamily: 'var(--font-quicksand)' }}
                  className="text-lg font-semibold"
                >
                  Published Date: {formatDate(heroBlog.publishedAt)}
                </p>
                <h2
                  id="blog-listing-heading"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className="text-3xl text-[#003366] font-bold"
                >
                  {heroBlog.title}
                </h2>
                <p style={{ fontFamily: 'var(--font-varela)' }} className="text-lg">
                  {heroBlog.excerpt}
                </p>
              </div>
            </Link>
          </article>
        )}

        {/* ✅ Other Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 px-3 lg:px-0 gap-4 w-full">
          {paginatedBlogs.map((blog, idx) => (
            <article key={idx}>
              <Link href={`/blog/${blog.id}`}>
                <BlogCard
                  index={idx}
                  src={blog.featuredImage}
                  alt={blog.title}
                  title={blog.title}
                  excerpt={blog.excerpt}
                  publishedAt={blog.publishedAt}
                />
              </Link>
            </article>
          ))}
        </div>

        <PaginationDemo totalPages={totalPages} />
      </div>
    </section>
  )
}
