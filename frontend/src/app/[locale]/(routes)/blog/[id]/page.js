import SingleBlog from '../components/SingleBlog'
import RelatedBlogs from '../components/RelatedBlogs'
import { AllBlogs as posts } from '../data/BlogData'
import { notFound } from 'next/navigation'

// Dynamically generate SEO for each blog
export async function generateMetadata({ params }) {
  const { id } = params
  const blog = posts.find((b) => b.id === id)

  if (!blog) return notFound()

  return {
    title: blog.title,
    description: blog.excerpt || "Read this blog on LIMOSPRO's luxury transportation services.",
    keywords: [
      'limospro blog',
      'luxury limousine tips',
      'chauffeur service insights',
      'houston limo blog',
      'airport transfer tips',
      'luxury transportation articles',
    ],
    openGraph: {
      title: blog.title,
      description: blog.excerpt || "Read this blog on LIMOSPRO's luxury transportation services.",
      url: `https://yourdomain.com/blog/${id}`,
      images: [blog.featuredImage],
      siteName: 'LIMOSPRO',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt || "Read this blog on LIMOSPRO's luxury transportation services.",
      images: [blog.featuredImage],
    },
  }
}

export default function Page({ params }) {
  return (
    <main>
      <SingleBlog params={params} />
      <RelatedBlogs />
    </main>
  )
}
