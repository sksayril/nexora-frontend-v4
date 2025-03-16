import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white">Nexora AI</h3>
            <p className="mt-4 text-gray-400">
              Transforming businesses through innovative artificial intelligence solutions.
            </p>
            <div className="mt-6 space-y-2">
              <a href="#" className="flex items-center text-gray-400 hover:text-white">
                <Mail className="h-5 w-5 mr-2" />
                contact@nexora.ai
              </a>
              <a href="#" className="flex items-center text-gray-400 hover:text-white">
                <Phone className="h-5 w-5 mr-2" />
                +91 9265417748
              </a>
              <a href="#" className="flex items-center text-gray-400 hover:text-white">
                <MapPin className="h-5 w-5 mr-2" />
                Bhagwan mahavir college of computer application, Surat
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white">Projects</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nexora AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}