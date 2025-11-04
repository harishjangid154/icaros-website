import Link from 'next/link';
import { notFound } from 'next/navigation';

const products = {
  'icaros-health': {
    title: 'ICAROS Health',
    subtitle: 'Rehabilitation beyond boundaries',
    description:
      'ICAROS Health is designed specifically for rehabilitation and therapy. It combines engaging VR experiences with precise movement tracking to help patients recover faster and with more motivation.',
    features: [
      'Healthy Back Training',
      'Cognitive Motor Control',
      'Customizable Therapy Programs',
      'Progress Tracking & Analytics',
      'Patient Engagement Tools',
    ],
    bgColor: 'from-blue-500 to-blue-700',
  },
  'icaros-guardian': {
    title: 'ICAROS Guardian',
    subtitle: 'Stability training made easy',
    description:
      'ICAROS Guardian focuses on postural control and balance training, perfect for fall prevention and stability improvement in elderly care and rehabilitation settings.',
    features: [
      'Postural Control Training',
      'Anticipatory Postural Adjustment',
      'Fall Prevention Programs',
      'Safe Training Environment',
      'Real-time Feedback',
    ],
    bgColor: 'from-purple-500 to-purple-700',
  },
  'icaros-circle': {
    title: 'ICAROS Circle',
    subtitle: 'The holistic exercise experience',
    description:
      'ICAROS Circle offers a comprehensive full-body workout experience that combines core training, postural control, and cardiovascular exercise in an engaging VR environment.',
    features: [
      'Core Functionality Training',
      'Postural Control',
      'Full Body Exercise',
      'Gamified Workouts',
      'Group Training Options',
    ],
    bgColor: 'from-green-500 to-green-700',
  },
  'icaros-lightning': {
    title: 'ICAROS Lightning',
    subtitle: 'Step into a new dimension of fitness',
    description:
      'ICAROS Lightning brings professional-grade VR fitness training to homes and studios. Perfect for personal training and boutique fitness facilities.',
    features: [
      'Home and Studio Fitness',
      'Balance & Core Training',
      'Compact Design',
      'Easy Setup',
      'Personal Training Programs',
    ],
    bgColor: 'from-yellow-500 to-orange-600',
  },
  'icaros-cloud': {
    title: 'ICAROS Cloud',
    subtitle: 'Find your balance, enhance your endurance, increase your strength',
    description:
      'ICAROS Cloud provides a complete cloud-based training platform with gamified workouts, progress tracking, and a library of exercises for all fitness levels.',
    features: [
      'Full Body Workout',
      'Balance & Strength Training',
      'Sensorimotor Training',
      'Cloud-based Progress Tracking',
      'Extensive Exercise Library',
    ],
    bgColor: 'from-cyan-500 to-blue-600',
  },
  'icaros-cloud-360': {
    title: 'ICAROS Cloud 360',
    subtitle: 'HIIT Training meets VR',
    description:
      'ICAROS Cloud 360 delivers high-intensity interval training in a fully immersive VR environment, perfect for advanced athletes and fitness enthusiasts.',
    features: [
      'HIIT Training Programs',
      'Balance & Reactivity',
      '360-degree Movement',
      'Advanced Analytics',
      'Competitive Leaderboards',
    ],
    bgColor: 'from-indigo-500 to-purple-600',
  },
};

type ProductSlug = keyof typeof products;

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as ProductSlug];

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`relative py-32 bg-gradient-to-br ${product.bgColor} text-white`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{product.title}</h1>
            <p className="text-2xl mb-8 opacity-90">{product.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg text-center"
              >
                Request Demo
              </Link>
              <a
                href="https://shop.icaros.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-colors font-semibold text-lg text-center"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Overview</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">{product.description}</p>

            <h3 className="text-3xl font-bold mb-6">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about {product.title} and schedule a demo
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-semibold text-lg"
          >
            Request Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
