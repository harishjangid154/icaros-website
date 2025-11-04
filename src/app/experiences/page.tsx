import Link from 'next/link';

const games = [
  {
    title: 'Sky Explorer',
    description: 'Fly through stunning landscapes and discover hidden treasures',
    category: 'Adventure',
  },
  {
    title: 'Deep Sea Challenge',
    description: 'Navigate underwater environments while training your core',
    category: 'Exploration',
  },
  {
    title: 'Mountain Rush',
    description: 'Race down mountain trails in this high-speed adventure',
    category: 'Racing',
  },
  {
    title: 'Space Mission',
    description: 'Complete missions in zero gravity environments',
    category: 'Sci-Fi',
  },
  {
    title: 'Forest Flight',
    description: 'Glide through ancient forests and test your balance',
    category: 'Nature',
  },
  {
    title: 'Desert Dash',
    description: 'Navigate challenging desert terrain at high speeds',
    category: 'Adventure',
  },
];

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Games & Experiences</h1>
            <p className="text-2xl opacity-90">
              Immersive VR games designed to make training engaging and effective
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Gamified Workouts</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our VR experiences combine entertainment with effective training, keeping users motivated and engaged
                throughout their rehabilitation or fitness journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {games.map((game) => (
                <div key={game.title} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {game.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{game.title}</h3>
                  <p className="text-gray-600">{game.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-xl text-gray-600 mb-8">
                Want to experience ICAROS games firsthand?
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
