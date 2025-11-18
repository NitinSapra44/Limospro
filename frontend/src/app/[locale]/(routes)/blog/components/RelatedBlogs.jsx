import BlogCard from '@/components/GlobalComponents/Reusable-Cards/blogCard'
import { RelatedBlogsData } from '../data/BlogData'
import Link from 'next/link'

export default function RelatedBlogs() {
  return (
    <section aria-labelledby="related-blogs-heading" className="w-full flex py-16 bg-[#F5F5F5]">
      <div className="flex flex-col gap-4 lg:w-[80%] max-w-[1440px] w-full mx-auto items-start">
        {/* Section Heading */}
        <div className="gap-2 px-3 lg:px-0 flex flex-col">
          <p
            style={{ fontFamily: 'var(--font-quicksand)' }}
            className="text-base lg:text-lg text-[#2C2C2C] font-semibold items-start"
          >
            Related Blogs
          </p>
          <h2
            id="related-blogs-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-bold text-xl lg:text-3xl text-[#003366] items-start"
          >
            Discover More Travel Tips and Insights
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 px-3 lg:px-0 gap-4 w-full">
          {RelatedBlogsData.map((data, idx) => (
            <article key={idx}>
              <Link href={`/blog/${data.id}`}>
                <BlogCard
                  index={idx}
                  src={data.featuredImage}
                  alt={data.title}
                  title={data.title}
                  excerpt={data.excerpt}
                  publishedAt={data.publishedAt}
                />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
