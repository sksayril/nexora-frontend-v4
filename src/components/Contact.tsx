import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
          >
            Get in Touch
          </motion.h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Let's discuss how we can help transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1645564756836!5m2!1sen!2sus"
                className="w-full h-full rounded-xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-10 w-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">Visit Us</p>
                  <p className="text-gray-600 dark:text-gray-400">THen BhagwanMahavir University</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-10 w-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">Email Us</p>
                  <p className="text-gray-600 dark:text-gray-400">contact@nexora.ai</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-10 w-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">Call Us</p>
                  <p className="text-gray-600 dark:text-gray-400">+91 9265417748</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}