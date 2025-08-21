const BooksPage = () => {
  const books = [
    {
      id: 1,
      title: "Crownfall",
      summary: "Nearly a decade under the empire's grip has left Burunt a troubled land, its unrest simmering beneath a fragile surface. Kyndel Heim knows the truth behind the Viceroy's rise to power. After years of torture and experimentation, his only goal is vengeance. But to master his powers he needs a mentor, one that won't kill him first. Major Jelert Egarro traveled to Burunt to build a better world. But in the wrong hands, his skills becomes a tool of destruction, and those hands are everywhere. Jelert must decide whether to stay true to his ideals or let others dictate his path. Lady Amara Khar rose fast when her once-powerful family fell. Sharp and ruthless, she's kept her house alive through illicit trade, but clawing back power in Burunt means making enemies and unsavory friends. In the fight for power, justice, and survival, everyone must decide: who they will become?",
      release: "Feb 28, 2026",
      status: "Coming Soon",
      statusColor: "bg-gradient-to-r from-secondary to-secondary-dark text-white"
    },
    {
      id: 2,
      title: "Chrono-Stained",
      summary: "Fullmetal Alchemist meets the Licanius Trilogy. In the fight for power, justice, and survival, everyone must decide: who they will become?",
      release: "Unknown",
      status: "Work in Progress",
      statusColor: "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Books &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">
              Works in Progress
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore upcoming fantasy novels and discover the worlds being crafted by Michael Vadney.
          </p>
        </div>

        {/* Books Grid */}
        <div className="space-y-16">
          {books.map((book, index) => (
            <div key={book.id} className={`bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 ${index % 2 === 1 ? 'lg:ml-12' : 'lg:mr-12'}`}>
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-1">
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                    <div className="text-center">
                      <div className="text-8xl mb-6 opacity-50">📚</div>
                      <p className="text-gray-700 font-semibold text-lg">{book.title}</p>
                      <p className="text-sm text-gray-500 mt-2">Cover Coming Soon</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className={`inline-block px-6 py-3 rounded-full text-sm font-bold shadow-lg ${book.statusColor}`}>
                      {book.status}
                    </span>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">{book.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {book.summary}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="font-bold text-secondary-dark block mb-1">Release Date</span>
                      <span className="text-gray-700">{book.release}</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="font-bold text-secondary-dark block mb-1">Availability</span>
                      <span className="text-gray-500 italic">Pre-order Coming Soon</span>
                    </div>
                  </div>

                  <button 
                    disabled 
                    className="bg-gray-200 text-gray-500 px-8 py-4 rounded-xl cursor-not-allowed font-semibold transition-all duration-200 shadow-md"
                  >
                    Pre-order Coming Soon
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-secondary-dark to-secondary text-white p-12 rounded-3xl shadow-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Want to be notified when new books are released or when pre-orders become available?
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-secondary-dark hover:bg-gray-100 transition-colors px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;