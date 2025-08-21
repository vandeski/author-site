const PodcastPage = () => {
  const episodes = [
    {
      id: 23,
      title: "The Reality of Being an Indie Author",
      description: "Exploring the challenges and rewards of independent publishing in today's market.",
      duration: "45 minutes",
      date: "Latest Episode"
    },
    {
      id: 22,
      title: "Writing Authentic Dialogue",
      description: "Techniques for creating natural, character-driven conversations in fiction.",
      duration: "38 minutes",
      date: "Recent"
    },
    {
      id: 21,
      title: "Building Your Author Platform",
      description: "Strategic approaches to developing your author brand and online presence.",
      duration: "52 minutes",
      date: "Recent"
    }
  ];

  const topics = [
    {
      icon: "📝",
      title: "Writing Craft",
      description: "Deep dives into the technical and creative aspects of novel writing, from character development to world-building.",
      episodes: "12+ episodes"
    },
    {
      icon: "🚀",
      title: "Author Journey",
      description: "Honest conversations about the path from hobbyist to professional author, including struggles and breakthroughs.",
      episodes: "8+ episodes"
    },
    {
      icon: "🎯",
      title: "Publishing Insights",
      description: "Exploring the business side of writing, from traditional publishing to indie author strategies.",
      episodes: "6+ episodes"
    },
    {
      icon: "🎤",
      title: "Guest Interviews",
      description: "Conversations with established authors, editors, and industry professionals sharing their expertise.",
      episodes: "5+ episodes"
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
          <div className="inline-block bg-secondary/20 backdrop-blur-sm p-6 rounded-full mb-8">
            <span className="text-8xl">🎙️</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-teal-300 to-cyan-300">
              Author Adjacent
            </span>
            <br />
            Podcast
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            The honest journey from hobbyist writer to professional author
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            If you're reading this, you may not be ready to call yourself an author. Even the host, Michael Vadney, isn't there yet—but until then, we can be Author Adjacent.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Podcast Platform Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* YouTube Section */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 flex items-center">
              <span className="mr-4 text-red-600">📺</span>
              Watch on YouTube
            </h2>
            
            <div className="relative group mb-8">
              <div className="aspect-video bg-gradient-to-br from-red-100 via-red-50 to-gray-100 rounded-2xl shadow-xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-500">
                <div className="text-center z-10">
                  <div className="text-red-600 text-8xl mb-4">📺</div>
                  <p className="text-gray-900 font-bold text-xl mb-2">Author Adjacent</p>
                  <p className="text-red-600 font-semibold text-lg">@AuthorAdjacent</p>
                  <p className="text-gray-600 text-sm mt-2">Video content coming soon</p>
                </div>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-white text-2xl ml-1">▶</span>
                  </div>
                </div>
              </div>
            </div>
            
            <a 
              href="https://www.youtube.com/@AuthorAdjacent" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg transform hover:scale-105"
            >
              <span className="mr-3 text-xl">▶️</span>
              Subscribe on YouTube
            </a>
          </div>

          {/* Latest Episodes */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Latest <span className="text-secondary">Episodes</span>
            </h2>
            
            {episodes.map((episode) => (
              <div key={episode.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold">#{episode.id}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {episode.date}
                      </span>
                      <span className="text-gray-500 text-sm">{episode.duration}</span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{episode.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{episode.description}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="text-center pt-4">
              <a 
                href="https://www.youtube.com/@AuthorAdjacent" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary-dark font-semibold inline-flex items-center group"
              >
                View All Episodes 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Podcast Topics */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What We <span className="text-secondary">Discuss</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{topic.description}</p>
                <span className="text-secondary text-xs font-semibold bg-secondary/10 px-2 py-1 rounded-full">
                  {topic.episodes}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media & Connect */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Connect with Author Adjacent
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the community of aspiring authors and follow along with the writing journey.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <a 
              href="https://x.com/AuthorAdjacent" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gray-50 hover:bg-blue-500 hover:text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 p-6 text-center"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🐦</div>
              <div className="font-semibold text-lg mb-1">Follow on X</div>
              <div className="text-sm opacity-75">@AuthorAdjacent</div>
            </a>
            
            <a 
              href="https://www.youtube.com/@AuthorAdjacent" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gray-50 hover:bg-red-600 hover:text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 p-6 text-center"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">📺</div>
              <div className="font-semibold text-lg mb-1">Subscribe on YouTube</div>
              <div className="text-sm opacity-75">@AuthorAdjacent</div>
            </a>
            
            <a 
              href="/contact" 
              className="group bg-gray-50 hover:bg-secondary hover:text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 p-6 text-center"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">📧</div>
              <div className="font-semibold text-lg mb-1">Suggest Topics</div>
              <div className="text-sm opacity-75">Contact Us</div>
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-secondary-dark via-gray-900 to-slate-900 text-white p-12 lg:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          </div>
          <div className="relative text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Join the <span className="text-secondary">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Whether you're a fellow hobbyist writer or just curious about the publishing world, you're welcome to follow along as we navigate this journey together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.youtube.com/@AuthorAdjacent" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                🎙️ Listen Now
              </a>
              <a 
                href="/contact" 
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                💡 Suggest Topics
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastPage;