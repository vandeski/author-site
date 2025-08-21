import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to Michael Vadney's Author Site
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Fantasy Author and Podcaster exploring the journey from hobbyist writer to professional author.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link 
            to="/podcast" 
            className="bg-secondary hover:bg-secondary-dark text-white p-6 rounded-lg transition-colors shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-2">Author Adjacent Podcast</h3>
            <p className="text-sm">Join the journey from hobbyist to professional author</p>
          </Link>
          
          <Link 
            to="/books" 
            className="bg-secondary hover:bg-secondary-dark text-white p-6 rounded-lg transition-colors shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-2">Books & Works</h3>
            <p className="text-sm">Explore upcoming fantasy novels and current projects</p>
          </Link>
          
          <Link 
            to="/about" 
            className="bg-secondary hover:bg-secondary-dark text-white p-6 rounded-lg transition-colors shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-2">About Michael</h3>
            <p className="text-sm">Learn more about the author and podcaster</p>
          </Link>
          
          <Link 
            to="/contact" 
            className="bg-secondary hover:bg-secondary-dark text-white p-6 rounded-lg transition-colors shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
            <p className="text-sm">Contact for business inquiries or podcast topics</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;