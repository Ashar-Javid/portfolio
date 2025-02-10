import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

// Local data (or fetch from API route)
const blogPosts: Post[] = [
  {
    slug: 'first-post',
    title: 'My First Blog Post',
    excerpt: 'Introduction to my blog...',
    date: '2024-03-20'
  },
  // Add more posts
];

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <article 
            key={post.slug}
            className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-400">{post.excerpt}</p>
              <time className="text-sm text-gray-500">{post.date}</time>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

