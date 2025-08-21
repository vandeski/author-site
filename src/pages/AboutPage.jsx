const AboutPage = () => {
  const socialLinks = [
    {
      platform: "X (Twitter)",
      url: "https://x.com/Michael_Vadney",
      icon: "🐦"
    },
    {
      platform: "Bluesky",
      url: "https://bsky.app/profile/michaelvadney.bsky.social",
      icon: "🦋"
    },
    {
      platform: "Threads",
      url: "https://www.threads.com/@michael_vadney",
      icon: "🧵"
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/michael_vadney/",
      icon: "📷"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About Michael Vadney
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center mb-6">
            <div className="text-center">
              <div className="text-8xl mb-4">👤</div>
              <p className="text-gray-600 font-medium">Michael Vadney</p>
              <p className="text-sm text-gray-500">Portrait Coming Soon</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-secondary-dark mb-4">Biography</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Michael Vadney is a Fantasy Author and Podcaster living in Fort Worth, Texas.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-secondary-dark mb-4">Writing Journey</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Currently working on multiple fantasy projects, Michael explores themes of power, justice, 
              and survival in complex fictional worlds. His upcoming novel "Crownfall" promises to deliver 
              an intricate tale of political intrigue and magical elements.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through the "Author Adjacent" podcast, Michael shares the honest journey from hobbyist 
              writer to professional author, discussing the challenges, insights, and discoveries 
              along the way.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-secondary-dark mb-4">Connect on Social Media</h2>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-gray-50 hover:bg-secondary hover:text-white rounded-lg transition-colors"
                >
                  <span className="text-2xl mr-3">{social.icon}</span>
                  <span className="font-medium">{social.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-secondary-dark mb-4 text-center">
          Current Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Writing</h3>
            <p className="text-gray-600">
              Working on "Crownfall" and developing "Chrono-Stained" - fantasy novels 
              exploring complex characters and intricate world-building.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Podcasting</h3>
            <p className="text-gray-600">
              Hosting "Author Adjacent" - sharing the writer's journey with fellow 
              aspiring authors and discussing the craft of novel writing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;