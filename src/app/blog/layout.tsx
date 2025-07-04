import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - DAL CSL',
  description: 'Latest insights, tips, and success stories from the DAL CSL community',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 