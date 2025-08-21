const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Contact
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get in touch for business inquiries, podcast topics, or general questions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-secondary-dark mb-6">Business Inquiries</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl mr-4">📧</span>
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <a 
                  href="mailto:mjvadney@gmail.com" 
                  className="text-secondary hover:text-secondary-dark transition-colors"
                >
                  mjvadney@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-medium text-gray-900 mb-2">Perfect for:</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Publishing opportunities</li>
                <li>• Writing collaborations</li>
                <li>• Media interviews</li>
                <li>• Speaking engagements</li>
                <li>• General business matters</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-secondary-dark mb-6">Podcast Topics</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl mr-4">🎙️</span>
              <div>
                <p className="font-medium text-gray-900">Author Adjacent Podcast</p>
                <a 
                  href="mailto:authorAdjacent@gmail.com" 
                  className="text-secondary hover:text-secondary-dark transition-colors"
                >
                  authorAdjacent@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-medium text-gray-900 mb-2">Great for:</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Topic suggestions</li>
                <li>• Guest appearance requests</li>
                <li>• Writing craft discussions</li>
                <li>• Author journey stories</li>
                <li>• Podcast feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-secondary-dark text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Follow the Journey</h2>
        <p className="text-lg mb-6">
          Stay connected and follow Michael's writing and podcasting journey across social media.
        </p>
        <div className="flex justify-center space-x-6">
          <a 
            href="https://x.com/Michael_Vadney" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-secondary hover:bg-white hover:text-secondary-dark transition-colors px-4 py-2 rounded-lg"
          >
            <span className="mr-2">🐦</span>
            X (Twitter)
          </a>
          <a 
            href="https://x.com/AuthorAdjacent" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-secondary hover:bg-white hover:text-secondary-dark transition-colors px-4 py-2 rounded-lg"
          >
            <span className="mr-2">🎙️</span>
            Podcast
          </a>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Response times are typically within 24-48 hours. Thank you for your patience!
        </p>
      </div>
    </div>
  );
};

export default ContactPage;