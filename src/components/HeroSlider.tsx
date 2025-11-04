'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import headerImage1 from '@/assets/hero/header1.png';
import headerImage2 from '@/assets/hero/header2.png';
import headerImage3 from '@/assets/hero/header3.png';
import headerImage4 from '@/assets/hero/header4.png';
import icaraceImage from '@/assets/hero/icarace.png';

const slides = [
  {
    id: 1,
    title: 'ICAROS HEALTH',
    subtitle: 'Rehabilitation beyond boundaries',
    description: 'Transform therapy with engaging VR experiences',
    cta: 'Learn More',
    ctaLink: '/products/icaros-health',
    image: headerImage1,
  },
  {
    id: 2,
    title: 'ICAROS Guardian',
    subtitle: 'Stability training made easy',
    description: 'Advanced fall prevention and balance training',
    cta: 'Discover More',
    ctaLink: '/products/icaros-guardian',
    image: headerImage2,
  },
  {
    id: 3,
    title: 'ICAROSCIRCLE',
    subtitle: 'The holistic exercise experience',
    description: 'Full-body workout meets immersive VR',
    cta: 'Explore Now',
    ctaLink: '/products/icaros-circle',
    image: headerImage3,
  },
  {
    id: 4,
    title: 'ICAROS Lightning',
    subtitle: 'Step into a new dimension of fitness',
    description: 'Professional VR training for home and studio',
    cta: 'Order Now',
    ctaLink: 'https://shop.icaros.com',
    image: headerImage4,
  },
  {
    id: 6,
    title: 'Online VR Multiplayer',
    subtitle: 'Join ICARACE community',
    description: 'Become part of the fastest VR community on the planet',
    cta: 'Join Now',
    ctaLink: 'https://live.icarace.com/',
    image: icaraceImage,
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative h-[600px] overflow-hidden bg-gray-900">
      {/* Background Image with transition */}
      <div className="absolute inset-0">
        {slides.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 transition-all duration-500">
            {slide.title}
          </h1>
          <p className="text-2xl md:text-3xl mb-4 opacity-90 transition-all duration-500">
            {slide.subtitle}
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-80 transition-all duration-500">
            {slide.description}
          </p>
          <Link
            href={slide.ctaLink}
            target={slide.ctaLink.startsWith('http') ? '_blank' : undefined}
            rel={slide.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-semibold text-lg"
          >
            {slide.cta}
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? 'bg-white w-8 h-3'
                : 'bg-white/50 hover:bg-white/75 w-3 h-3'
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
