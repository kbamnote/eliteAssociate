import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Search, Tag } from 'lucide-react';
import SEOHead from '../../common/SEOHead';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState([]);

  const categories = ['all', 'Programming', 'Interview', 'Development', 'Data Science', 'Success Stories', 'DevOps'];

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Programming Languages to Learn in 2024",
      excerpt: "Discover the most in-demand programming languages that will boost your career prospects in the tech industry.",
      content: "The tech industry is constantly evolving, and staying updated with the latest programming languages is crucial for career growth...",
      author: "Elite Associate Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Programming",
      tags: ["Programming", "Career", "Technology"],
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 2,
      title: "How to Crack Technical Interviews at Top Companies",
      excerpt: "Essential tips and strategies to ace your technical interviews at FAANG and other top tech companies.",
      content: "Technical interviews can be challenging, but with the right preparation and mindset, you can succeed...",
      author: "Interview Expert",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Interview",
      tags: ["Interview", "Career", "Tips"],
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 3,
      title: "Building Scalable Web Applications with React",
      excerpt: "Learn best practices for developing scalable and maintainable React applications for enterprise-level projects.",
      content: "React has become the go-to library for building modern web applications...",
      author: "Development Team",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Development",
      tags: ["React", "Development", "Web"],
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 7,
      title: "Full Stack Development: Complete Roadmap for Beginners",
      excerpt: "A comprehensive guide to becoming a full stack developer from scratch with practical projects and resources.",
      content: "Full stack development is one of the most sought-after skills in the tech industry today...",
      author: "Technical Team",
      date: "2024-01-05",
      readTime: "12 min read",
      category: "Development",
      tags: ["Full Stack", "Web Development", "Beginner"],
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 4,
      title: "Data Science Career Path: Skills and Opportunities",
      excerpt: "Explore the exciting world of data science with comprehensive career guidance and skill development roadmap.",
      content: "Data science is one of the most promising career paths in today's technology-driven world...",
      author: "Data Science Team",
      date: "2024-01-01",
      readTime: "7 min read",
      category: "Data Science",
      tags: ["Data Science", "Career", "Analytics"],
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 5,
      title: "DevOps Best Practices for Modern Development",
      excerpt: "Learn essential DevOps practices that streamline development workflows and improve deployment efficiency.",
      content: "DevOps has revolutionized how we develop, deploy, and maintain software applications...",
      author: "DevOps Team",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "DevOps",
      tags: ["DevOps", "CI/CD", "Automation"],
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 6,
      title: "Success Story: From Fresher to Senior Developer",
      excerpt: "Inspiring journey of our student who landed a senior developer role at a top tech company within 2 years.",
      content: "This is the inspiring story of one of our students who transformed their career...",
      author: "Success Stories Team",
      date: "2023-12-25",
      readTime: "4 min read",
      category: "Success Stories",
      tags: ["Success Story", "Career Growth", "Inspiration"],
      image: "/api/placeholder/600/300",
      featured: false
    }
  ];

  useEffect(() => {
    let filtered = [...blogPosts]; // Create a copy to avoid mutation

    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(post => post && post.category === selectedCategory);
    }

    if (searchTerm && searchTerm.trim()) {
      filtered = filtered.filter(post => {
        if (!post) return false;
        
        const titleMatch = post.title && post.title.toLowerCase().includes(searchTerm.toLowerCase());
        const excerptMatch = post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const tagsMatch = post.tags && Array.isArray(post.tags) && 
          post.tags.some(tag => tag && tag.toLowerCase().includes(searchTerm.toLowerCase()));
        
        return titleMatch || excerptMatch || tagsMatch;
      });
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  const featuredPosts = blogPosts.filter(post => post && post.featured === true);

  return (
    <>
      <SEOHead
        title="Blog - Elite Associate | Latest Tech Insights & Career Tips"
        description="Stay updated with the latest technology trends, career tips, and success stories from Elite Associate. Read our expert insights on programming, interviews, and career development."
        keywords="tech blog, programming tips, career advice, interview preparation, technology trends, Elite Associate blog"
        canonicalUrl="https://www.eliteassociate.in/blog"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Tech Insights & Career Tips
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Stay ahead in your tech career with expert insights, industry trends, and success stories
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Articles' : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === 'all' && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="h-64 bg-gradient-to-br from-purple-400 to-blue-500"></div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{post.title}</h3>
                      <p className="text-gray-600 mb-6">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {post.tags && post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <button className="flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors">
                          Read More <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {selectedCategory === 'all' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-500">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-500 group-hover:scale-105 transition-transform duration-300"></div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {post.category}
                        </span>
                        <button className="flex items-center gap-1 text-purple-600 font-medium hover:text-purple-700 transition-colors text-sm">
                          Read <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl mb-8 text-purple-100">
                Get the latest tech insights and career tips delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-300"
                />
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;