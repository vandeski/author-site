const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary/10 p-4 rounded-full mb-6">
            <span className="text-6xl">📧</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">
              Get in Touch
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch for business inquiries, podcast topics, or general questions.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Business Inquiries */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-block bg-secondary/10 p-4 rounded-full mb-4">
                <span className="text-4xl">💼</span>
              </div>
              <h2 className="text-3xl font-bold text-secondary-dark mb-4">Business Inquiries</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-center bg-gray-50 p-6 rounded-2xl">
                <div className="bg-secondary/10 p-3 rounded-xl mr-4">
                  <span className="text-3xl">📧</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Email</p>
                  <a 
                    href="mailto:mjvadney@gmail.com" 
                    className="text-secondary hover:text-secondary-dark transition-colors text-lg font-semibold"
                  >
                    mjvadney@gmail.com
                  </a>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Perfect for:</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="text-secondary mr-3">•</span>
                    Publishing opportunities
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-3">•</span>
                    Writing collaborations
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-3">•</span>
                    Media interviews
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-3">•</span>
                    Speaking engagements
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-3">•</span>
                    General business matters
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Podcast Topics */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-block bg-secondary/10 p-4 rounded-full mb-4">
                <span className="text-4xl">🎙️</span>
              </div>
              <h2 className="text-3xl font-bold text-secondary-dark mb-4">Podcast Topics</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-center bg-gray-50 p-6 rounded-2xl">
                <div className="bg-secondary/10 p-3 rounded-xl mr-4">
                  <span className="text-3xl">🎙️</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Author Adjacent Podcast</p>
                  <a 
                    href="mailto:authorAdjacent@gmail.com" 
                    className="text-secondary hover:text-secondary-dark transition-colors text-lg font-semibold"
                  >
                    authorAdjacent@gmail.com
                  </a>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Great for:</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="text-secondary mr-3">•</span>
                    Topic suggestions
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-3">•</span>
                    Guest appearance requests
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-3">•</span>
                    Writing craft discussions
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-3">•</span>
                    Author journey stories
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-3">•</span>
                    Podcast feedback
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Follow the Journey */}
        <div className="bg-gradient-to-r from-secondary-dark to-secondary text-white p-12 rounded-3xl shadow-2xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Follow the Journey</h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Stay connected and follow Michael's writing and podcasting journey across social media.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://x.com/Michael_Vadney" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white text-secondary-dark hover:bg-gray-100 transition-all duration-200 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">🐦</span>
              X (Twitter)
            </a>
            <a 
              href="https://x.com/AuthorAdjacent" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-secondary hover:bg-secondary/80 text-white transition-all duration-200 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">🎙️</span>
              Podcast
            </a>
            <a 
              href="https://bsky.app/profile/michaelvadney.bsky.social" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white text-secondary-dark hover:bg-gray-100 transition-all duration-200 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">🦋</span>
              Bluesky
            </a>
          </div>
        </div>

        {/* Response Time */}
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="inline-block bg-green-100 p-3 rounded-full mb-4">
            <span className="text-2xl">⏰</span>
          </div>
          <p className="text-gray-600 text-lg">
            Response times are typically within <span className="font-semibold text-secondary-dark">24-48 hours</span>. Thank you for your patience!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;