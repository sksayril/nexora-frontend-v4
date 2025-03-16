import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const technologies = [
  { image: '/mongo.png', name: 'Mongodb' },
  { image: '/Reactlog.jpg', name: 'React' },
  { image: '/nextjs.png', name: 'Next Js' },
  { image: '/nodejs.png', name: 'Node Js' },
  { image: '/Tailwind_CSS_Logo.svg.png', name: 'Tailwind CSS' },
  { image: '/geminiai.png', name: 'Gemini Ai' },
  { image: '/indexdb.png', name: 'Index DB' },
  { image: '/quadrantdb.png', name: 'QuaDrant DB' },
  { image: '/huggingface-color.png', name: 'HuggingFace Models' },
  { image: '/Figma-Logo-PNG-Isolated-HD.png', name: 'Figma' },
  { image: '/cnava.png', name: 'Canva' },
  { image: '/1681038242chatgpt-logo-png.png', name: 'Chatgpt' },
  { image: '/claude-ai-icon-65aa.png', name: 'Claude Ai' },
  
];

export default function TechCarousel() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Technologies We Master
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="tech-carousel"
        >
          {technologies.map((tech) => (
            <SwiperSlide key={tech.name}>
              <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src={tech.image} alt={tech.name} className="h-12 w-12 object-contain" />
                <p className="mt-4 text-gray-900 dark:text-white font-medium">{tech.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
