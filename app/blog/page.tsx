import BlogPost from "../components/BlogPost"

const blogPosts = [
  {
    title: "The Future of AI in Healthcare",
    excerpt: "Exploring how artificial intelligence is revolutionizing the healthcare industry...",
    date: "2023-05-15",
    slug: "future-of-ai-in-healthcare",
  },
  {
    title: "Building Scalable Machine Learning Systems",
    excerpt: "Best practices for designing and implementing scalable ML systems...",
    date: "2023-05-01",
    slug: "building-scalable-ml-systems",
  },
  // Add more blog posts here
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-green-400">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  )
}

