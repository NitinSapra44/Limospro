'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function BlogPagination({ totalPages = 10 }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  const goToPage = (page) => {
    router.push(`/blog?page=${page}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Show current + next 2 pages
  const getVisiblePages = () => {
    const pages = []
    const start = currentPage
    const end = Math.min(start + 2, totalPages)
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    return pages
  }

  const visiblePages = getVisiblePages()

  return (
    <Pagination className="flex justify-end mt-8">
      <PaginationContent>
        {/* Left arrow */}
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
            className={`px-3 ${currentPage === 1 ? 'opacity-40 pointer-events-none' : ''}`}
          >
            <ArrowLeft />
          </PaginationLink>
        </PaginationItem>

        {/* Page numbers */}
        {visiblePages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              style={{ fontFamily: 'var(--font-varela)' }}
              className={`text-base px-3 py-1 rounded transition-colors duration-200 ${
                page === currentPage
                  ? 'bg-gradient-to-r from-[#0062C4] to-[#004C97] text-white shadow-md'
                  : 'bg-transparent text-gray-700 hover:bg-gray-200'
              }`}
              href="#"
              onClick={() => goToPage(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Ellipsis + last page */}
        {visiblePages[visiblePages.length - 1] < totalPages && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                className="px-3 py-1 rounded hover:bg-gray-200"
                onClick={() => goToPage(totalPages)}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {/* Right arrow */}
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => currentPage < totalPages && goToPage(currentPage + 1)}
            className={`px-3 ${currentPage === totalPages ? 'opacity-40 pointer-events-none' : ''}`}
          >
            <ArrowRight />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
