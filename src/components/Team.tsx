import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, } from 'lucide-react';
import sayrilimage from '../../public/sayril.jpg';
import vaibahimage from '../../public/vaibavh.jpeg';
import khushiimage from '../../public/khushi.jpg';
import aliimage from '../../public/ali2.png';
const teamMembers = [
  {
    name: 'SK Sayril Amed',
    role: 'AI Research , FullStack Developer with Devops',
    image: sayrilimage,
    linkedin: 'https://www.linkedin.com/in/sk-sayril-amed-63283a239',
    github: 'https://github.com/sksayril',
    description: 'Expert in machine learning and neural networks Large Language models with AI agents, Also working as Full Stack Developer handle Servers Also',
  },
  
  {
    name: 'Vaibah Singh',
    role: 'Front End Developer',
    image: vaibahimage,
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    description: 'Make interactive ui with based on ui ux with proper optimized coding React and Nextjs',
  },
  {
    name: 'Ali Chauhan',
    role: 'Backend Developer',
    image: aliimage,
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    description: 'Specializes in Making Backend Apis and connected mongodb nad Make Api Services.',
  },
  {
    name: 'Khushi Shah',
    role: 'Apllication Tester',
    image: khushiimage,
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    description: 'Testing application to have check on bugs and errors and make sure the application is working fine.',
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Brilliant minds shaping the future of AI
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm">{member.description}</p>
                  <div className="flex gap-3 mt-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}