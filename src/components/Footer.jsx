import React, { useState } from 'react';
import { TrendingUp, Mail, Send, Facebook, Twitter, Instagram, Youtube, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    { name: 'Politics', href: '#' },
    { name: 'Sports', href: '#' },
    { name: 'Business', href: '#' },
    { name: 'Lifestyle', href: '#' },

  ];


  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative">
 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  NewsBlogger
                </h2>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Your trusted source for breaking news, in-depth analysis, and compelling stories from around the world. Stay informed, stay connected.
              </p>
    
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Categories</h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={category.name}>
                    <a 
                      href={category.href} 
                      className="text-gray-300 hover:text-red-400 transition-all duration-200 flex items-center group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe to our newsletter for the latest news and exclusive content.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${
                    isSubscribed 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800'
                  }`}
                >
                  {isSubscribed ? (
                    <>
                      <Heart className="w-4 h-4" />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Subscribe</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  &copy; {new Date().getFullYear()} NewsBlogger. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Made with <Heart className="w-3 h-3 inline text-red-500" /> for news enthusiasts worldwide
                </p>
              </div>
              
              <button
                onClick={scrollToTop}
                className="p-3 bg-gray-800 hover:bg-red-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
              >
                <ArrowUp className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;