const BooksPage = () => {
  const books = [
    {
      id: 1,
      title: "Crownfall",
      summary: "Nearly a decade under the empire's grip has left Burunt a troubled land, its unrest simmering beneath a fragile surface. Kyndel Heim knows the truth behind the Viceroy's rise to power. After years of torture and experimentation, his only goal is vengeance. But to master his powers he needs a mentor, one that won't kill him first. Major Jelert Egarro traveled to Burunt to build a better world. But in the wrong hands, his skills becomes a tool of destruction, and those hands are everywhere. Jelert must decide whether to stay true to his ideals or let others dictate his path. Lady Amara Khar rose fast when her once-powerful family fell. Sharp and ruthless, she's kept her house alive through illicit trade, but clawing back power in Burunt means making enemies and unsavory friends. In the fight for power, justice, and survival, everyone must decide: who they will become?",
      release: "Feb 28, 2026",
      status: "Coming Soon"
    },
    {
      id: 2,
      title: "Chrono-Stained",
      summary: "Fullmetal Alchemist meets the Licanius Trilogy. In the fight for power, justice, and survival, everyone must decide: who they will become?",
      release: "Unknown",
      status: "Work in Progress"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Books & Works in Progress
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore upcoming fantasy novels and discover the worlds being crafted by Michael Vadney.
        </p>
      </div>

      <div className="space-y-12">
        {books.map((book) => (
          <div key={book.id} className="bg-gray-50 rounded-lg p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="aspect-[3/4] bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📚</div>
                    <p className="text-gray-600 font-medium">{book.title}</p>
                    <p className="text-sm text-gray-500">Cover Coming Soon</p>
                  </div>
                </div>
                <div className="text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    book.status === 'Coming Soon' 
                      ? 'bg-secondary text-white' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {book.status}
                  </span>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{book.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {book.summary}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900 w-24">Release:</span>
                    <span className="text-gray-600">{book.release}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900 w-24">Link:</span>
                    <span className="text-gray-500 italic">Placeholder - Coming Soon</span>
                  </div>
                </div>

                <button 
                  disabled 
                  className="bg-gray-300 text-gray-500 px-6 py-2 rounded-lg cursor-not-allowed"
                >
                  Pre-order Coming Soon
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-secondary-dark text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-lg mb-4">
          Want to be notified when new books are released or when pre-orders become available?
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-secondary hover:bg-white hover:text-secondary-dark transition-colors px-6 py-3 rounded-lg font-medium"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default BooksPage;