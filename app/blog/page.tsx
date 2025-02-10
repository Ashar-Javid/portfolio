'use client';

import { useState } from 'react';
import Link from 'next/link';
import { blogPosts, BlogPost } from '@/lib/posts';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  // Get unique tags from all posts
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search blogs..."
          className="bg-gray-800 text-white p-3 rounded-lg flex-grow"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="bg-gray-800 text-white p-3 rounded-lg"
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          <option value="All">All Tags</option>
          {allTags.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-8">
        {filteredPosts.map((post, index) => (
          <motion.article 
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 p-8 rounded-xl shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-400 mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <span key={tag} className="bg-gray-700 px-2 py-1 rounded text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <Link 
              href={`/blog/${post.slug}`}
              className="mt-4 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              Read Case Study

            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

