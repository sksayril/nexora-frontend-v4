import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Award, Building } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
  { icon: Award, value: '50+', label: 'Awards Won' },
  { icon: Building, value: '10+', label: 'Global Offices' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <motion.p
                className="mt-4 text-4xl font-bold text-white"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {stat.value}
              </motion.p>
              <p className="mt-2 text-lg text-blue-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}