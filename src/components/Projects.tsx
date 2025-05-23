import React from 'react';
import { ArrowRight } from 'lucide-react';
// import image2data from '../../public/image2data.jpg';
// import thecpccal from '../../public/7thcpccalculator.png';
import quizgenai from '../../public/quizgeneratorai.jpg';
import b2bbusinessleads from '../../public/b2bbusinessleads.png';
  // import WebsiteBuilderAi from '../../public/websitebulderai.png';
import Travelplannerlogo from '../../public/thetravelaioo0.png';
import resumebuilderai from '../../public/previewresumebuilder.jpg';
import notesmarket from '../../public/notesmarket.png';
import Recipiai from '../../public/cutinaryai1.png';
const projects = [
  {
    title: 'AI Chef',
    description: 'add the ingredients and get the recipe based on the ingredients.',
    image: Recipiai,
    url: 'https://aichef.nexora-ai.co.in/'
  },
  {
    title: 'Travel Ai',
    description: 'Set your location and buget and travel date ai help to make the plan you trip.',
    image: Travelplannerlogo,
    url: 'https://travelai.nexora-ai.co.in/'
  },
  {
    title: 'Resume Builder AI',
    description: 'AI-driven maintenance to have make the ATS ranking based RESUME.',
    image: resumebuilderai,
    url: 'https://resumebuilder.nexora-ai.co.in/'
  },
  {
    title: 'Quiz Generator Ai',
    description: 'AI-driven quiz generator to have make the quiz based on the user input.',
    image: quizgenai,
    url: 'https://quizgenerator.nexora-ai.co.in/'
  },
  // {
  //   title: '7th CpC Calculator',
  //   description: 'Cpc calculator based on the salary amount and much more.',
  //   image: thecpccal,
  //   url: 'https://7thcpccalculator.cripcocode.org'
  // },
  {
    title: 'B2B Business Leads Generator',
    description: 'AI-driven maintenance prediction system.',
    image: b2bbusinessleads,
    url: 'https://b2bbusineesleads.shop/'
  },
  {
    title: 'Notes Mrket',
    description: 'Best notes forever for students.',
    image: notesmarket,
    url: 'https://notesmarket.in/'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Innovative solutions we've delivered
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-gray-300">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                >
                  Visit Us <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
