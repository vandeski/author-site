import EmailSignup from "../components/EmailSignup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPodcast, faPenNib, faRocket, faBullseye, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const PodcastPage = () => {
  const episodes = [
    {
      id: 23,
      title: "The Reality of Being an Indie Author",
      description: "Exploring the challenges and rewards of independent publishing in today's market.",
      duration: "45 minutes",
      date: "Latest Episode",
    },
    {
      id: 22,
      title: "Writing Authentic Dialogue",
      description: "Techniques for creating natural, character-driven conversations in fiction.",
      duration: "38 minutes",
      date: "Recent",
    },
    {
      id: 21,
      title: "Building Your Author Platform",
      description: "Strategic approaches to developing your author brand and online presence.",
      duration: "52 minutes",
      date: "Recent",
    },
  ];

  const topics = [
    {
      icon: <FontAwesomeIcon icon={faPenNib} />,
      title: "Writing Craft",
      description: "Deep dives into the technical and creative aspects of novel writing, from character development to world-building.",
      episodes: "12+ episodes",
    },
    {
      icon: <FontAwesomeIcon icon={faRocket} />,
      title: "Author Journey",
      description: "Honest conversations about the path from hobbyist to professional author, including struggles and breakthroughs.",
      episodes: "8+ episodes",
    },
    {
      icon: <FontAwesomeIcon icon={faBullseye} />,
      title: "Publishing Insights",
      description: "Exploring the business side of writing, from traditional publishing to indie author strategies.",
      episodes: "6+ episodes",
    },
    {
      icon: <FontAwesomeIcon icon={faMicrophone} />,
      title: "Guest Interviews",
      description: "Conversations with established authors, editors, and industry professionals sharing their expertise.",
      episodes: "5+ episodes",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="mt-24 relative py-20 bg-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="m-auto bg-secondary/20  p-6 rounded-full mb-8 w-40 h-40 flex justify-center items-center">
            <FontAwesomeIcon icon={faPodcast} className="text-secondary text-8xl" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-secondary">Author Adjacent</span>
            <br />
            Podcast
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            The honest journey from hobbyist writer to professional author
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            If you're reading this, you may not be ready to call yourself an author. Even the host, Michael Vadney, isn't there yet—but
            until then, we can be Author Adjacent.
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
              <FontAwesomeIcon icon={faYoutube} className="mr-4 text-red-600" />
              Watch on YouTube
            </h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl mb-8">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/xSyCZg0JFxY"
                title="Author Adjacent Podcast"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"></iframe>
            </div>
            <a
              href="https://www.youtube.com/@AuthorAdjacent"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-gray-900 px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg transform hover:scale-105">
              <span className="mr-3 text-xl">▶️</span>
              Subscribe on YouTube
            </a>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Latest <span className="text-secondary">Episodes</span>
            </h2>

            {episodes.map((episode) => (
              <div
                key={episode.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold">#{episode.id}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-secondary text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">{episode.date}</span>
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
                className="text-secondary hover:text-secondary-dark font-semibold inline-flex items-center group">
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
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{topic.description}</p>
                <span className="text-secondary text-xs font-semibold bg-secondary/10 px-2 py-1 rounded-full">{topic.episodes}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media & Connect */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Connect with Author Adjacent</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the community of aspiring authors and follow along with the writing journey.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <a
              href="https://x.com/AuthorAdjacent"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 hover:bg-blue-500 hover:text-gray-900 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 p-6 text-center">
              <FontAwesomeIcon icon={faXTwitter} className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="font-semibold text-lg mb-1">Follow on X</div>
              <div className="text-sm opacity-75">@AuthorAdjacent</div>
            </a>

            <a
              href="https://www.youtube.com/@AuthorAdjacent"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 hover:bg-red-600 hover:text-gray-900 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 p-6 text-center">
              <FontAwesomeIcon icon={faYoutube} className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="font-semibold text-lg mb-1">Subscribe on YouTube</div>
              <div className="text-sm opacity-75">@AuthorAdjacent</div>
            </a>

            <a
              href="/contact"
              className="group bg-gray-50 hover:bg-secondary hover:text-gray-900 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 p-6 text-center">
              <FontAwesomeIcon icon={faMicrophone} className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="font-semibold text-lg mb-1">Suggest Topics</div>
              <div className="text-sm opacity-75">Contact Us</div>
            </a>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white  text-gray-900 p-12 lg:p-16 relative overflow-hidden">
        <div className="relative text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Join the <span className="text-secondary">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Whether you're a fellow hobbyist writer or just curious about the publishing world, you're welcome to follow along as we
            navigate this journey together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EmailSignup label="Subscribe for Updates" buttonText="Subscribe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastPage;
