// src/components/Homepage.jsx
import React, { useState, useEffect } from 'react';
import { Clock, User, Eye, MessageCircle, Share2, TrendingUp, Play, ChevronRight, Calendar, Star } from 'lucide-react';

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredNews = [
    {
      id: 2,
      title: "Tech Giants Announce Revolutionary AI Partnership",
      excerpt: "Major technology companies collaborate on next-generation artificial intelligence development with focus on ethical AI.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
      category: "Technology",
      readTime: "4 min read",
      views: "1.8k",
      author: "Michael Chen",
      date: "4 hours ago"
    },
    {
      id: 3,
      title: "Olympic Champions Set New World Records",
      excerpt: "Unprecedented performances mark historic day in international athletics competition as multiple records fall.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",
      category: "Sports",
      readTime: "3 min read",
      views: "3.2k",
      author: "Emma Rodriguez",
      date: "6 hours ago"
    }
  ];

  const trendingNews = [
    {
      id: 1,
      title: "Stock Markets Reach All-Time Highs Amid Economic Optimism",
      excerpt: "Global financial markets surge amid positive economic indicators and renewed investor confidence.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
      category: "Business",
      readTime: "2 min read",
      views: "1.5k",
      author: "David Wilson"
    },
    {
      id: 2,
      title: "Revolutionary Medical Breakthrough in Cancer Treatment",
      excerpt: "Scientists develop new immunotherapy showing promising results in clinical trials.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      category: "Health",
      readTime: "6 min read",
      views: "2.1k",
      author: "Dr. Lisa Chang"
    },
    {
      id: 3,
      title: "Sustainable Fashion Week Showcases Eco-Friendly Designs",
      excerpt: "Leading designers present innovative sustainable fashion solutions for conscious consumers.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=250&fit=crop",
      category: "Lifestyle",
      readTime: "4 min read",
      views: "980",
      author: "Sophie Martin"
    }
  ];

  const categories = [
    { name: "Politics", color: "bg-red-500", count: 45, icon: "🏛️" },
    { name: "Sports", color: "bg-blue-500", count: 32, icon: "⚽" },
    { name: "Business", color: "bg-green-500", count: 28, icon: "💼" },
    { name: "Technology", color: "bg-purple-500", count: 39, icon: "💻" },
    { name: "Lifestyle", color: "bg-pink-500", count: 24, icon: "✨" },
    { name: "Health", color: "bg-indigo-500", count: 18, icon: "🏥" }
  ];

  return (
    <div className="pt-20">

      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
    
            <div className="lg:col-span-2">
              <div className="relative group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={featuredNews[currentSlide].image} 
                    alt={featuredNews[currentSlide].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      featuredNews[currentSlide].category === 'Politics' ? 'bg-red-500' :
                      featuredNews[currentSlide].category === 'Technology' ? 'bg-purple-500' :
                      'bg-blue-500'
                    }`}>
                      {featuredNews[currentSlide].category}
                    </span>
                    <div className="flex items-center space-x-2 text-sm opacity-90">
                      <Clock className="w-4 h-4" />
                      <span>{featuredNews[currentSlide].readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-3 leading-tight">
                    {featuredNews[currentSlide].title}
                  </h2>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    {featuredNews[currentSlide].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span className="text-sm">{featuredNews[currentSlide].author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">{featuredNews[currentSlide].views}</span>
                      </div>
                    </div>
                    
                    <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200">
                      <span className="text-sm font-medium">Read More</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-2 mt-6">
                {featuredNews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-red-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-red-500" />
                  <h3 className="text-xl font-bold text-gray-900">Trending Now</h3>
                </div>
                
                <div className="space-y-4">
                  {trendingNews.map((article, index) => (
                    <div key={article.id} className="group cursor-pointer">
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-lg overflow-hidden">
                            <img 
                              src={article.image} 
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
                            {article.title}
                          </h4>
                          <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                            <span className={`px-2 py-1 rounded-full text-white ${
                              article.category === 'Business' ? 'bg-green-500' :
                              article.category === 'Health' ? 'bg-indigo-500' :
                              'bg-pink-500'
                            }`}>
                              {article.category}
                            </span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                      {index < trendingNews.length - 1 && <hr className="mt-4 border-gray-100" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover news and stories across various topics that matter to you
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-xl">{category.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} articles</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Stories</h2>
              <p className="text-gray-600">Stay updated with the most recent news and developments</p>
            </div>
            <button className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors duration-200">
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...trendingNews, ...featuredNews.slice(0, 3)].map((article, index) => (
              <article key={`${article.id}-${index}`} className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      article.category === 'Politics' ? 'bg-red-500' :
                      article.category === 'Sports' ? 'bg-blue-500' :
                      article.category === 'Business' ? 'bg-green-500' :
                      article.category === 'Technology' ? 'bg-purple-500' :
                      article.category === 'Health' ? 'bg-indigo-500' :
                      'bg-pink-500'
                    }`}>
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-xs">4.8</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views}</span>
                      </div>
                      <button className="hover:text-red-500 transition-colors duration-200">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Never Miss a Story</h2>
            <p className="text-red-100 mb-8 text-lg">
              Subscribe to our newsletter and get the latest news delivered straight to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
                Subscribe
              </button>
            </div>
            
            <div className="flex items-center justify-center space-x-6 mt-8 text-red-100">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">50k+ subscribers</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Daily updates</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">No spam</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;