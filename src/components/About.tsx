import { Code, Palette } from 'lucide-react';
import aboutImg from '../asset/about.jpg';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl mx-auto">
                <img
                  src={aboutImg}
                  alt="Hekmatullah Naqibzada"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 dark:bg-blue-500/20 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600/10 dark:bg-blue-500/20 rounded-full -z-10"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Results-driven Full Stack MIS Developer with <span className="font-semibold text-blue-600 dark:text-blue-400">6+ years of experience</span> building enterprise-grade web applications and Management Information Systems.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Skilled in combining creative design with engineering precision to deliver solutions that are not only functional but also visually compelling and user-friendly.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-start gap-4 p-6 bg-blue-50 dark:bg-gray-700 rounded-xl">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Engineering</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Scalable systems</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-blue-50 dark:bg-gray-700 rounded-xl">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Design</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">User-focused UX</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Afghanistan (Available for remote work)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
