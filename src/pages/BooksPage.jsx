const BooksPage = () => {
  const books = [
    {
      id: 1,
      title: "Crownfall",
      subtitle: "A Tale of Power and Vengeance",
      summary: "Nearly a decade under the empire's grip has left Burunt a troubled land, its unrest simmering beneath a fragile surface. Kyndel Heim knows the truth behind the Viceroy's rise to power. After years of torture and experimentation, his only goal is vengeance. But to master his powers he needs a mentor, one that won't kill him first.",
      fullSummary: "Major Jelert Egarro traveled to Burunt to build a better world. But in the wrong hands, his skills becomes a tool of destruction, and those hands are everywhere. Jelert must decide whether to stay true to his ideals or let others dictate his path. Lady Amara Khar rose fast when her once-powerful family fell. Sharp and ruthless, she's kept her house alive through illicit trade, but clawing back power in Burunt means making enemies and unsavory friends.",
      quote: "In the fight for power, justice, and survival, everyone must decide: who they will become?",
      release: "February 28, 2026",
      status: "Coming Soon",
      statusColor: "from-emerald-500 to-teal-600",
      coverColor: "from-slate-700 via-gray-800 to-slate-900",
      genres: ["Epic Fantasy", "Dark Fantasy", "Adventure"]
    },
    {
      id: 2,
      title: "Chrono-Stained",
      subtitle: "Where Time Bends and Reality Fractures",
      summary: "A thrilling adventure through time where past and future collide in unexpected ways. Fullmetal Alchemist meets the Licanius Trilogy in this upcoming fantasy epic.",
      fullSummary: "When the fabric of time itself becomes a battlefield, heroes must navigate through fractured realities to save not just their world, but all possible worlds. Every choice echoes across timelines, and every decision could unravel existence itself.",
      quote: "Time is not a river, but a storm—and we are all caught in its eye.",
      release: "TBA",
      status: "Work in Progress",
      statusColor: "from-amber-500 to-orange-600",
      coverColor: "from-indigo-600 via-purple-700 to-pink-700",
      genres: ["Time Travel", "Epic Fantasy", "Science Fantasy"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-secondary-dark">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Books & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-teal-300 to-cyan-300">Works</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Epic fantasy worlds where heroes face impossible choices and magic comes with a price
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-sm">Epic Fantasy</span>
              <span className="bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-sm">Dark Fantasy</span>
              <span className="bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-sm">Adventure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Books Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {books.map((book, index) => (
            <div key={book.id} className="relative">
              <div className="grid lg:grid-cols-5 gap-12 items-center">
                {/* Book Cover - Left side for odd index, right side for even */}
                <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative group">
                    <div className={`aspect-[3/4] bg-gradient-to-br ${book.coverColor} rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden transform group-hover:scale-105 transition-all duration-500`}>
                      {/* Book cover design */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      <div className="text-center z-10 p-6">
                        <div className="text-white text-6xl mb-4">📖</div>
                        <h3 className="text-white font-bold text-xl mb-2">{book.title}</h3>
                        <p className="text-white/80 text-sm">{book.subtitle}</p>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-12 h-12 border border-white/20 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                      </div>
                      <div className="absolute bottom-4 left-4 w-8 h-8 border border-white/20 rounded-lg rotate-45"></div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute -top-4 -right-4 z-20">
                      <span className={`inline-block bg-gradient-to-r ${book.statusColor} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                        {book.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Book Details */}
                <div className={`lg:col-span-3 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                        {book.title}
                      </h2>
                      <p className="text-xl text-secondary font-medium">{book.subtitle}</p>
                    </div>

                    {/* Genres */}
                    <div className="flex flex-wrap gap-2">
                      {book.genres.map((genre) => (
                        <span key={genre} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                          {genre}
                        </span>
                      ))}
                    </div>

                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {book.summary}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {book.fullSummary}
                      </p>
                    </div>

                    {/* Quote */}
                    <blockquote className="border-l-4 border-secondary pl-6 py-4 bg-gray-50 rounded-r-lg">
                      <p className="text-gray-800 italic text-lg leading-relaxed">
                        "{book.quote}"
                      </p>
                    </blockquote>

                    {/* Book Details Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                            <span className="text-secondary">📅</span>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900 block">Release Date</span>
                            <span className="text-gray-600">{book.release}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                            <span className="text-secondary">🛒</span>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900 block">Availability</span>
                            <span className="text-gray-600">Pre-order Soon</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        disabled 
                        className="bg-gray-200 text-gray-500 px-6 py-3 rounded-full cursor-not-allowed font-semibold transition-all duration-200 shadow-sm flex-1 sm:flex-none"
                      >
                        Pre-order Coming Soon
                      </button>
                      <button className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 flex-1 sm:flex-none">
                        Add to Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Divider */}
              {index < books.length - 1 && (
                <div className="mt-24 flex justify-center">
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-32 bg-gradient-to-br from-secondary-dark via-gray-900 to-slate-900 text-white p-12 lg:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          </div>
          <div className="relative text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Never Miss a <span className="text-secondary">Release</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Be the first to know about new book releases, exclusive excerpts, and behind-the-scenes content from the writing process.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent backdrop-blur-sm"
                />
                <button className="w-full bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Subscribe for Updates
                </button>
                <p className="text-xs text-gray-400">
                  No spam, unsubscribe at any time. Updates only when there's real news to share.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;