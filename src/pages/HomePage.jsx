import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Light Background */}
      <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        {/* Floating Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/5 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-secondary/8 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-secondary/6 rounded-full animate-float"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/3 rounded-full animate-pulse"></div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in-up">
            {/* Author Image Placeholder */}
            <div className="mx-auto w-48 h-48 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center shadow-2xl animate-scale-in">
              <span className="text-6xl text-white">👤</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-900 leading-tight">
              <span className="block mb-2 animate-slide-in-left">Michael</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary to-secondary-dark animate-slide-in-right">
                Vadney
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              Fantasy Author & Podcaster
            </p>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-500">
              Exploring the journey from hobbyist writer to professional author through storytelling and honest conversation.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-up delay-700">
              <Link 
                to="/books" 
                className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
              >
                Explore My Books
              </Link>
              <Link 
                to="/podcast" 
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
              >
                Listen to Podcast
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-secondary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-secondary/60 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Featured Books Section - Broader Horizontal Layout */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-full px-8 lg:px-16">
          <div className="text-center mb-20 animate-fade-in-up" style={{transform: `translateY(${scrollY * 0.1}px)`}}>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Latest <span className="text-secondary">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dive into epic fantasy worlds filled with magic, adventure, and unforgettable characters.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            {/* Horizontal Book Layout */}
            <div className="space-y-16">
              {/* Book 1 - Full Width */}
              <div className="group animate-slide-in-left">
                <div className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                  <div className="grid lg:grid-cols-5 gap-12 items-center">
                    <div className="lg:col-span-1">
                      <div className="w-48 h-72 mx-auto bg-gradient-to-br from-secondary via-teal-600 to-secondary-dark rounded-2xl shadow-2xl flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-500">
                        <span className="text-white text-6xl">📖</span>
                      </div>
                    </div>
                    <div className="lg:col-span-4 text-center lg:text-left space-y-6">
                      <div className="space-y-4">
                        <span className="inline-block bg-secondary text-white px-6 py-2 rounded-full text-lg font-semibold">
                          Coming Feb 28, 2026
                        </span>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900">Crownfall</h3>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                          In the fight for power, justice, and survival, everyone must decide who they will become. 
                          An epic tale of kingdoms in turmoil, where ancient magic meets political intrigue, and heroes 
                          are forged in the crucible of war.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">Epic Fantasy</span>
                        <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">Political Intrigue</span>
                        <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">Magic System</span>
                      </div>
                      <Link 
                        to="/books" 
                        className="inline-flex items-center bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 group"
                      >
                        Learn More 
                        <span className="ml-3 transform group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Book 2 - Full Width, Reversed Layout */}
              <div className="group animate-slide-in-right">
                <div className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                  <div className="grid lg:grid-cols-5 gap-12 items-center">
                    <div className="lg:col-span-4 text-center lg:text-left space-y-6 order-2 lg:order-1">
                      <div className="space-y-4">
                        <span className="inline-block bg-gray-600 text-white px-6 py-2 rounded-full text-lg font-semibold">
                          In Development
                        </span>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900">Chrono-Stained</h3>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl lg:ml-auto">
                          A thrilling adventure through time where past and future collide in unexpected ways. 
                          When reality itself becomes unstable, our heroes must navigate the streams of time to 
                          prevent the unraveling of existence.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">Time Travel</span>
                        <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">Sci-Fantasy</span>
                        <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">Adventure</span>
                      </div>
                      <Link 
                        to="/books" 
                        className="inline-flex items-center bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 group"
                      >
                        Learn More 
                        <span className="ml-3 transform group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                    <div className="lg:col-span-1 order-1 lg:order-2">
                      <div className="w-48 h-72 mx-auto bg-gradient-to-br from-slate-600 via-gray-700 to-slate-800 rounded-2xl shadow-2xl flex items-center justify-center transform group-hover:-rotate-3 transition-transform duration-500">
                        <span className="text-white text-6xl">⚡</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Adjacent Podcast Section */}
      <section className="py-32 bg-white">
        <div className="max-w-full px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-gray-900 animate-fade-in-up">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">
                  Author <span className="text-secondary">Adjacent</span>
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Join the honest conversation about the writing journey from hobbyist to professional author.
                </p>
                <p className="text-gray-600 mb-12 leading-relaxed text-lg">
                  Every episode dives deep into the challenges, victories, and everything in between on the path to becoming a published author. Real talk, practical advice, and community support.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link 
                    to="/podcast" 
                    className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 text-center transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Listen Now
                  </Link>
                  <a 
                    href="https://youtube.com/@AuthorAdjacent" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 text-center transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
              
              <div className="relative animate-scale-in">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 shadow-2xl border border-gray-200">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                      <span className="text-white text-2xl">🎙️</span>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold text-xl">Latest Episode</h3>
                      <p className="text-secondary text-lg font-semibold">Author Adjacent Podcast</p>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    The Reality of Being an Indie Author
                  </h4>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Exploring the challenges and rewards of independent publishing in today's market.
                  </p>
                  <div className="flex items-center text-gray-500 text-lg">
                    <span>45 minutes</span>
                    <span className="mx-3">•</span>
                    <span>Episode 23</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 lg:px-16 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Stay Connected
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
              Get updates on new releases, podcast episodes, and behind-the-scenes insights from the writing journey.
            </p>
            <div className="bg-white rounded-3xl p-12 max-w-2xl mx-auto shadow-2xl border border-gray-200">
              <div className="space-y-6">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-lg"
                />
                <button className="w-full bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Subscribe to Updates
                </button>
                <p className="text-sm text-gray-500">
                  No spam, unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;