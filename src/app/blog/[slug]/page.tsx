import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | DAL CSL Blog',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: `${post.title} | DAL CSL Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug) || blogPosts[0]; // fallback to dummy post

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Link href="/blog" className="text-indigo-600 hover:text-indigo-800">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="max-w-3xl mx-auto px-4 pt-12">
        <div className="group">
          <Link href="/" className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-semibold text-sm mb-8 transition-all transform">
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-gray-500 text-sm">{post.author}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-500 text-sm">{new Date(post.publishedAt).toLocaleDateString()}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-500 text-sm">{post.readTime}</span>
        </div>
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-8" />
        <div className="prose max-w-none text-gray-800">
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
} 