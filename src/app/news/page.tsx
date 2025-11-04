const newsArticles = [
  {
    title: 'ICAROS Expands Global Reach with New Partnerships',
    date: '2024-03-15',
    excerpt: 'Leading therapy centers across Europe adopt ICAROS technology for rehabilitation programs.',
    category: 'Company News',
  },
  {
    title: 'New Study Shows Improved Patient Outcomes with VR Therapy',
    date: '2024-03-10',
    excerpt: 'Research demonstrates significant improvements in patient engagement and recovery times.',
    category: 'Research',
  },
  {
    title: 'ICAROS Cloud 360 Wins Innovation Award',
    date: '2024-03-05',
    excerpt: 'Our latest product recognized for excellence in fitness technology innovation.',
    category: 'Awards',
  },
  {
    title: 'Expanding Our Game Library',
    date: '2024-02-28',
    excerpt: 'Three new immersive experiences now available for all ICAROS systems.',
    category: 'Product Updates',
  },
  {
    title: 'ICAROS at International Therapy Conference',
    date: '2024-02-20',
    excerpt: 'Join us at the upcoming conference to see live demonstrations and meet our team.',
    category: 'Events',
  },
  {
    title: 'Customer Success Story: Rehabilitation Center Berlin',
    date: '2024-02-15',
    excerpt: 'How one facility transformed their therapy programs with ICAROS technology.',
    category: 'Case Studies',
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">News & Updates</h1>
            <p className="text-2xl opacity-90">
              Stay informed about the latest ICAROS developments and industry insights
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsArticles.map((article) => (
                <article key={article.title} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                    <time className="text-sm text-gray-500">
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{article.title}</h2>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                    Read More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
