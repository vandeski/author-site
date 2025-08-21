const AboutPage = () => {
  const socialLinks = [
    {
      platform: "X (Twitter)",
      url: "https://x.com/Michael_Vadney",
      icon: "🐦",
      color: "hover:bg-blue-500"
    },
    {
      platform: "Bluesky",
      url: "https://bsky.app/profile/michaelvadney.bsky.social",
      icon: "🦋",
      color: "hover:bg-sky-500"
    },
    {
      platform: "Threads",
      url: "https://www.threads.com/@michael_vadney",
      icon: "🧵",
      color: "hover:bg-gray-800"
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/michael_vadney/",
      icon: "📷",
      color: "hover:bg-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">
              Michael Vadney
            </span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Profile Image */}
          <div className="lg:order-1">
            <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl flex items-center justify-center mb-8 shadow-xl">
              <div className="text-center">
                <div className="text-9xl mb-6 opacity-60">👤</div>
                <p className="text-gray-700 font-bold text-xl">Michael Vadney</p>
                <p className="text-gray-500 mt-2">Portrait Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:order-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-dark mb-6">Biography</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Michael Vadney is a Fantasy Author and Podcaster living in Fort Worth, Texas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-dark mb-6">Writing Journey</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Currently working on multiple fantasy projects, Michael explores themes of power, justice, 
                  and survival in complex fictional worlds. His upcoming novel "Crownfall" promises to deliver 
                  an intricate tale of political intrigue and magical elements.
                </p>
                <p>
                  Through the "Author Adjacent" podcast, Michael shares the honest journey from hobbyist 
                  writer to professional author, discussing the challenges, insights, and discoveries 
                  along the way.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-dark mb-6">Connect on Social Media</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-4 bg-gray-50 hover:text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 ${social.color} group`}
                  >
                    <span className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                    <span className="font-semibold">{social.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Current Projects */}
        <div className="bg-gradient-to-r from-secondary-dark to-secondary text-white p-12 rounded-3xl shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Current Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="font-bold text-2xl mb-4">Writing</h3>
              <p className="text-gray-100 leading-relaxed">
                Working on "Crownfall" and developing "Chrono-Stained" - fantasy novels 
                exploring complex characters and intricate world-building.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl mb-4">🎙️</div>
              <h3 className="font-bold text-2xl mb-4">Podcasting</h3>
              <p className="text-gray-100 leading-relaxed">
                Hosting "Author Adjacent" - sharing the writer's journey with fellow 
                aspiring authors and discussing the craft of novel writing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;