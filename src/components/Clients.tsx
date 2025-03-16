import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  {
    name: 'W - Tech',
    logo: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30162614/1433.png',
    description: 'Revolutionized customer service with AI chatbots',
    improvement: '40% reduction in response time',
  },
  {
    name: 'InnovateTech',
    logo: 'https://merojob.com/media/uploads/job_logo/0b1099cc-0a4d-46f0-8264-49de6db0e513.jpg',
    description: 'Implemented predictive maintenance system',
    improvement: '60% decrease in downtime',
  },
  {
    name: 'FutureFinance',
    logo: 'https://i.pinimg.com/736x/23/97/06/23970649da6dc251e39c410af5bd54ba.jpg',
    description: 'AI-powered fraud detection system',
    improvement: '85% fraud prevention rate',
  },
  {
    name: 'HealthTech Solutions',
    logo: 'https://img.freepik.com/premium-vector/health-tech-logo-design-white-background_990473-7255.jpg?w=360',
    description: 'Medical imaging diagnosis assistance',
    improvement: '95% accuracy in predictions',
  },
  {
    name: 'SmartRetail',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0lnWJARjiJy5mXGMX33165BDD5UsEJcMNjQ&s',
    description: 'Inventory optimization system',
    improvement: '30% reduction in stockouts',
  },
  {
    name: 'DataDrive',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAdgwDKXGr3r5-8hoXylK06zbgq_PGQ-Mh8A&s',
    description: 'Big data analytics platform',
    improvement: '50% faster insights delivery',
  },
];

export default function Clients() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Transforming businesses through innovative AI solutions
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-16 h-16 rounded-full"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {client.name}
                </h3>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                {client.description}
              </p>
              <div className="mt-4 inline-block bg-blue-100 dark:bg-blue-900 rounded-full px-4 py-1">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  {client.improvement}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}