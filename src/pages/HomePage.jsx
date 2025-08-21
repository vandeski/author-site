import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-secondary-dark overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Author Image Placeholder */}
            <div className="mx-auto w-48 h-48 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-6xl text-white">👤</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block mb-2">Michael</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary via-teal-300 to-cyan-300">
                Vadney
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Fantasy Author & Podcaster
            </p>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Exploring the journey from hobbyist writer to professional author through storytelling and honest conversation.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link 
                to="/books" 
                className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore My Books
              </Link>
              <Link 
                to="/podcast" 
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Listen to Podcast
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Featured Books Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest <span className="text-secondary">Works</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dive into epic fantasy worlds filled with magic, adventure, and unforgettable characters.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Book 1 */}
            <div className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-32 h-48 bg-gradient-to-br from-secondary via-teal-600 to-secondary-dark rounded-lg shadow-lg flex items-center justify-center">
                    <span className="text-white text-4xl">📖</span>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <span className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      Coming Feb 28, 2026
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Crownfall</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      In the fight for power, justice, and survival, everyone must decide who they will become.
                    </p>
                    <Link 
                      to="/books" 
                      className="text-secondary hover:text-secondary-dark font-semibold inline-flex items-center group"
                    >
                      Learn More 
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Book 2 */}
            <div className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-32 h-48 bg-gradient-to-br from-slate-600 via-gray-700 to-slate-800 rounded-lg shadow-lg flex items-center justify-center">
                    <span className="text-white text-4xl">⚡</span>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <span className="inline-block bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      In Development
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Chrono-Stained</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      A thrilling adventure through time where past and future collide in unexpected ways.
                    </p>
                    <Link 
                      to="/books" 
                      className="text-secondary hover:text-secondary-dark font-semibold inline-flex items-center group"
                    >
                      Learn More 
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Adjacent Podcast Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-dark to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Author <span className="text-secondary">Adjacent</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Join the honest conversation about the writing journey from hobbyist to professional author.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Every episode dives deep into the challenges, victories, and everything in between on the path to becoming a published author. Real talk, practical advice, and community support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/podcast" 
                  className="bg-secondary hover:bg-teal-400 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 text-center"
                >
                  Listen Now
                </Link>
                <a 
                  href="https://youtube.com/@AuthorAdjacent" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 text-center"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🎙️</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Latest Episode</h3>
                    <p className="text-gray-400 text-sm">Author Adjacent Podcast</p>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  The Reality of Being an Indie Author
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Exploring the challenges and rewards of independent publishing in today's market.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>45 minutes</span>
                  <span className="mx-2">•</span>
                  <span>Episode 23</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Stay Connected
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get updates on new releases, podcast episodes, and behind-the-scenes insights from the writing journey.
          </p>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 max-w-md mx-auto">
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
              <button className="w-full bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300">
                Subscribe to Updates
              </button>
              <p className="text-xs text-gray-500">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;