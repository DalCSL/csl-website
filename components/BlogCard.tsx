"use client";

import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  slug: string;
  image: string;
}

interface BlogCardProps {
  post: BlogPost;
  className?: string;
  href?: string;
}

export function BlogCard({ post, className = "", href }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <Link href={href || `/blog/${post.slug}`} className="block">
      <div className={`w-full max-w-2xl min-w-[320px] group/card cursor-pointer ${className}`}>
        <div
          className="overflow-hidden relative card h-96 rounded-md shadow-xl max-w-2xl mx-auto backgroundImage flex flex-col justify-between p-4 bg-cover bg-center"
          style={{
            backgroundImage: `url(${post.image})`
          }}
        >
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
          
          <div className="flex flex-row items-center space-x-4 z-10">
            <div className="h-10 w-10 rounded-full border-2 border-white bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {post.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="flex flex-col">
              <p className="font-normal text-base text-gray-50 relative z-10">
                {post.author}
              </p>
              <p className="text-sm text-gray-400">{post.readTime}</p>
            </div>
          </div>
          
          <div className="text content">
            <div className="mb-2">
              <span className="inline-flex items-center rounded-md bg-white/20 backdrop-blur-xs px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/30">
                {post.category}
              </span>
            </div>
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10 mb-2">
              {post.title}
            </h1>
            <p className="font-normal text-sm text-gray-50 relative z-10 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            <p className="text-xs text-gray-400 relative z-10">
              {formatDate(post.publishedAt)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
} 