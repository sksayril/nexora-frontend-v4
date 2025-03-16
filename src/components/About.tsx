import React from 'react';
import { Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            About Nexora AI
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Leading the future of artificial intelligence
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-blue-600">
              <Users className="h-12 w-12" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">Expert Team</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              World-class AI experts and developers dedicated to innovation
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-blue-600">
              <Target className="h-12 w-12" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">Our Mission</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Empowering businesses through cutting-edge AI solutions
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-blue-600">
              <Award className="h-12 w-12" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">Recognition</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Award-winning solutions and industry recognition
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}