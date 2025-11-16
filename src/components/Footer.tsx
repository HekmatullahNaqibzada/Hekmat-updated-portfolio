import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Hekmatullah Naqibzada
              </h3>
              <p className="text-gray-400">
                Full Stack Developer & Creative Designer building innovative solutions
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/HekmatullahNaqibzada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hekmatullah-naqibzada/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:hekmat.naqibzada@gmail.com"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Hekmatullah Naqibzada. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Built with <Heart className="w-4 h-4 text-red-500" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
