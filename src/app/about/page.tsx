import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About ICAROS</h1>
            <p className="text-2xl opacity-90">
              Pioneering the future of VR-based rehabilitation and fitness training
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              ICAROS is dedicated to transforming rehabilitation, therapy, and fitness through innovative virtual reality
              technology. We believe that movement should be engaging, motivating, and effective – whether you're
              recovering from an injury, preventing falls, or pursuing peak athletic performance.
            </p>

            <h2 className="text-4xl font-bold mb-8">Why ICAROS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  Cutting-edge VR technology combined with evidence-based training methodologies
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Motivation</h3>
                <p className="text-gray-600">
                  Gamified experiences that keep patients and athletes engaged throughout their journey
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Results</h3>
                <p className="text-gray-600">
                  Proven outcomes in rehabilitation, fall prevention, and athletic performance
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Trust</h3>
                <p className="text-gray-600">
                  Chosen by leading therapy, fitness, and wellness facilities worldwide
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
