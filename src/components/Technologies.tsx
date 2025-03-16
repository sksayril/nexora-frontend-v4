import React from 'react';
import { Code2, Database, Cloud, Cpu, Brain, ShieldCheck, Layers, MonitorSmartphone, Rocket, Zap, Wrench, Globe, Lock } from 'lucide-react';

const technologies = [
  {
    name: 'Generative AI',
    description: 'Integrated Gen AI models for intelligent solutions',
    icon: Brain,
  },
  {
    name: 'Machine Learning',
    description: 'Advanced algorithms and neural networks',
    icon: Cpu,
  },
  {
    name: 'Cloud Computing',
    description: 'Scalable and resilient cloud-native solutions',
    icon: Cloud,
  },
  
  {
    name: 'API Integration',
    description: 'Seamless system integration and communication',
    icon: Code2,
  },
  {
    name: 'Cybersecurity',
    description: 'Robust security protocols and data protection',
    icon: ShieldCheck,
  },
 
  {
    name: 'Mobile Development',
    description: 'Innovative mobile-first solutions',
    icon: MonitorSmartphone,
  },
  
  {
    name: 'Automation',
    description: 'Streamlined workflows with smart automation',
    icon: Zap,
  },
  {
    name: 'DevOps',
    description: 'Integrated development and operations processes',
    icon: Wrench,
  },
];

export default function Technologies() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Technologies We Use
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Cutting-edge technologies powering our solutions
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="relative group bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative bg-white dark:bg-gray-900 p-6 rounded-xl">
                <tech.icon className="h-8 w-8 text-blue-600" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {tech.name}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}