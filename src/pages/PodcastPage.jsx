const PodcastPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Author Adjacent Podcast
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          If you're reading this, you may not be ready to call yourself an author. Even the host, 
          Michael Vadney, isn't there yet, but until then we can be, Author Adjacent. This is a 
          podcast about the journey from hobbyist writer to professional author with a focus on novel writing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-secondary-dark">Watch on YouTube</h2>
          <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📺</div>
              <p className="text-gray-600">YouTube Channel Embed</p>
              <p className="text-sm text-gray-500">@AuthorAdjacent</p>
            </div>
          </div>
          <a 
            href="https://www.youtube.com/@AuthorAdjacent" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-secondary hover:bg-secondary-dark text-white px-6 py-2 rounded-lg transition-colors"
          >
            Visit YouTube Channel
          </a>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-secondary-dark">Connect with Us</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Follow on Social Media</h3>
              <a 
                href="https://x.com/AuthorAdjacent" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-secondary hover:text-secondary-dark transition-colors"
              >
                <span className="mr-2">🐦</span>
                @AuthorAdjacent on X (Twitter)
              </a>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Latest Episodes</h3>
              <p className="text-gray-600 text-sm mb-2">
                New episodes discussing the writing process, publishing insights, and author interviews.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">Have a Topic Suggestion?</h3>
              <p className="text-gray-600 text-sm">
                Reach out via our <a href="/contact" className="text-secondary hover:underline">contact page</a> with your ideas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastPage;