import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import Image from 'next/image';
import icarosHealthImage from '@/assets/products/icaros-health.jpg';
import icarosGuardianImage from '@/assets/products/icaros-guardian.jpg';
import icarosCircleImage from '@/assets/products/icaros-circle.jpg';
import icarosLightningImage from '@/assets/products/icaros-lightning.jpg';
import icarosCloudImage from '@/assets/products/icaros-cloud.png';
import icaraceImage from '@/assets/products/icarace.png';
import chosenByImage from '@/assets/products/chosen-by-best.jpg';

const products = [
  {
    title: 'ICAROS HEALTH',
    subtitle: 'Rehabilitation beyond boundaries',
    href: '/products/icaros-health',
    bgColor: 'bg-gradient-to-br from-blue-500 to-blue-700',
    image: icarosHealthImage,
  },
  {
    title: 'ICAROS Guardian',
    subtitle: 'Stability training made easy',
    href: '/products/icaros-guardian',
    bgColor: 'bg-gradient-to-br from-purple-500 to-purple-700',
    image: icarosGuardianImage,
  },
  {
    title: 'ICAROSCIRCLE',
    subtitle: 'The holistic exercise experience',
    href: '/products/icaros-circle',
    bgColor: 'bg-gradient-to-br from-green-500 to-green-700',
    image: icarosCircleImage,
  },
  {
    title: 'ICAROS Lightning',
    subtitle: 'Step into a new dimension of fitness',
    href: '/products/icaros-lightning',
    bgColor: 'bg-gradient-to-br from-yellow-500 to-orange-600',
    image: icarosLightningImage,
  },
  {
    title: 'ICAROS Cloud',
    subtitle: 'Find your balance, enhance your endurance, increase your strength',
    href: '/products/icaros-cloud',
    bgColor: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    image: icarosCloudImage,
  },
  {
    title: 'Online VR Multiplayer',
    subtitle: 'Become a part of ICARACE, the fastest VR community of the planet',
    href: 'https://live.icarace.com/',
    bgColor: 'bg-gradient-to-br from-red-500 to-pink-600',
    image: icaraceImage,
    external: true,
  },
];

const productCategories = [
  {
    name: 'ICAROS Circle',
    features: ['Core Functionality', 'Postural Control', 'Full Body Exercise'],
    href: '/products/icaros-circle',
  },
  {
    name: 'ICAROS Health',
    features: ['Healthy Back', 'Cognitive Motor Control'],
    href: '/products/icaros-health',
  },
  {
    name: 'ICAROS Guardian',
    features: ['Postural Control', 'Anticipatory Postural Adjustment'],
    href: '/products/icaros-guardian',
  },
  {
    name: 'ICAROS Cloud',
    features: ['Full Body Workout', 'Balance & Strength', 'Sensorimotor Training'],
    href: '/products/icaros-cloud',
  },
  {
    name: 'ICAROS Lightning',
    features: ['Home and Studio Fitness', 'Balance & Core Training'],
    href: '/products/icaros-lightning',
  },
  {
    name: 'ICAROS Cloud 360',
    features: ['HIIT Training', 'Balance & Reactivity'],
    href: '/products/icaros-cloud-360',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <HeroSlider />

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                target={product.external ? '_blank' : undefined}
                rel={product.external ? 'noopener noreferrer' : undefined}
                className="group relative rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 min-h-[400px] flex flex-col justify-end shadow-xl"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 ${product.bgColor} opacity-80 group-hover:opacity-70 transition-opacity`} />
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-8 text-white">
                  <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
                  <p className="text-lg opacity-90 mb-4">{product.subtitle}</p>
                  <div className="flex items-center text-sm font-semibold">
                    {product.external ? 'Read more' : 'Learn More'}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* From Patient to Athlete Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From Patient to Athlete for inspiring Therapy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the fusion of movement, motivation, and joy: ICAROS transforms therapy and training into
              something truly unique. Discover the perfect solution for yourself, your patients, or your members!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{category.name}</h3>
                <ul className="space-y-2">
                  {category.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Chosen by the Best Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Chosen by the Best</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Leading therapy, fitness, and wellness facilities worldwide trust ICAROS – for motivation, progress, and
              exceptional experiences
            </p>
            <div className="relative w-full mx-auto h-[400px]">
              <Image
                src={chosenByImage}
                alt="ICAROS Health References - Chosen by the Best"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Training?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how ICAROS can revolutionize rehabilitation, therapy, and fitness in your facility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Request Demo
            </Link>
            <a
              href="https://shop.icaros.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
