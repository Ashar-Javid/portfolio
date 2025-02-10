import { blogPosts, BlogPost } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post: BlogPost) => post.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="container mx-auto py-12 px-4 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <time className="text-gray-500 block mb-8">{post.date}</time>
      <div 
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <Link href="/blog" className="mt-8 inline-block text-blue-400 hover:text-blue-300">
        ← Back to Blog
      </Link>
    </article>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
} 