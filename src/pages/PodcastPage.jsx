const PodcastPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary/10 p-4 rounded-full mb-6">
            <span className="text-6xl">🎙️</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">
              Author Adjacent
            </span>{' '}
            Podcast
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            If you're reading this, you may not be ready to call yourself an author. Even the host, 
            Michael Vadney, isn't there yet, but until then we can be, Author Adjacent. This is a 
            podcast about the journey from hobbyist writer to professional author with a focus on novel writing.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* YouTube Section */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-secondary-dark flex items-center">
              <span className="mr-3">📺</span>
              Watch on YouTube
            </h2>
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 flex items-center justify-center shadow-inner">
              <div className="text-center">
                <div className="text-6xl mb-4 opacity-60">📺</div>
                <p className="text-gray-700 font-semibold text-lg">YouTube Channel Embed</p>
                <p className="text-secondary font-medium">@AuthorAdjacent</p>
              </div>
            </div>
            <a 
              href="https://www.youtube.com/@AuthorAdjacent" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl font-semibold"
            >
              <span className="mr-2">▶️</span>
              Visit YouTube Channel
            </a>
          </div>

          {/* Connect Section */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-secondary-dark flex items-center">
              <span className="mr-3">🌐</span>
              Connect with Us
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Follow on Social Media</h3>
                <a 
                  href="https://x.com/AuthorAdjacent" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-secondary hover:text-secondary-dark hover:bg-blue-50 transition-all duration-200 p-3 rounded-lg"
                >
                  <span className="mr-3 text-2xl">🐦</span>
                  <span className="font-semibold">@AuthorAdjacent on X (Twitter)</span>
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Latest Episodes</h3>
                <p className="text-gray-600 leading-relaxed">
                  New episodes discussing the writing process, publishing insights, and author interviews.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Have a Topic Suggestion?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Reach out via our{' '}
                  <a href="/contact" className="text-secondary hover:text-secondary-dark font-semibold hover:underline">
                    contact page
                  </a>{' '}
                  with your ideas!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="bg-gradient-to-r from-secondary-dark to-secondary text-white p-12 rounded-3xl shadow-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Author Adjacent Journey
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Whether you're a fellow hobbyist writer or just curious about the publishing world, 
            you're welcome to follow along as we navigate this journey together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.youtube.com/@AuthorAdjacent" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-secondary-dark hover:bg-gray-100 transition-colors px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">📺</span>
              Subscribe on YouTube
            </a>
            <a 
              href="https://x.com/AuthorAdjacent" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-secondary hover:bg-secondary/80 text-white transition-colors px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">🐦</span>
              Follow on X
            </a>
          </div>
        </div>

        {/* Podcast Topics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Writing Craft</h3>
            <p className="text-gray-600">
              Discussions about the technical and creative aspects of novel writing.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Author Journey</h3>
            <p className="text-gray-600">
              Honest conversations about the path from hobbyist to professional author.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Publishing Insights</h3>
            <p className="text-gray-600">
              Exploring the business side of writing and the publishing industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastPage;