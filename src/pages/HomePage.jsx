import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">
                Michael Vadney's
              </span>{' '}
              Author Site
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Fantasy Author and Podcaster exploring the journey from hobbyist writer to professional author.
            </p>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Link 
              to="/podcast" 
              className="group bg-white hover:bg-secondary hover:text-white p-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 border border-gray-100"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎙️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white">Author Adjacent Podcast</h3>
              <p className="text-gray-600 group-hover:text-gray-100 text-sm leading-relaxed">Join the journey from hobbyist to professional author</p>
            </Link>
            
            <Link 
              to="/books" 
              className="group bg-white hover:bg-secondary hover:text-white p-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 border border-gray-100"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📚</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white">Books & Works</h3>
              <p className="text-gray-600 group-hover:text-gray-100 text-sm leading-relaxed">Explore upcoming fantasy novels and current projects</p>
            </Link>
            
            <Link 
              to="/about" 
              className="group bg-white hover:bg-secondary hover:text-white p-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 border border-gray-100"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">✍️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white">About Michael</h3>
              <p className="text-gray-600 group-hover:text-gray-100 text-sm leading-relaxed">Learn more about the author and podcaster</p>
            </Link>
            
            <Link 
              to="/contact" 
              className="group bg-white hover:bg-secondary hover:text-white p-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 border border-gray-100"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📧</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white">Get in Touch</h3>
              <p className="text-gray-600 group-hover:text-gray-100 text-sm leading-relaxed">Contact for business inquiries or podcast topics</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="py-16 bg-secondary-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-6">
            "In the fight for power, justice, and survival, everyone must decide: who they will become?"
          </blockquote>
          <cite className="text-secondary text-lg">— From Crownfall</cite>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join the Author Adjacent Community
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Follow along as Michael shares insights, updates, and the honest journey from hobbyist writer to professional author.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/podcast" 
              className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Listen to the Podcast
            </Link>
            <Link 
              to="/books" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Explore the Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;