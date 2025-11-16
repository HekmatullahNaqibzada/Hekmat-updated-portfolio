import { experiences } from '../data/content';
import { MapPin, Calendar } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="md:w-1/2">
                    <div className={`inline-block ${index % 2 === 0 ? 'md:float-right md:text-right' : ''} bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.role}
                      </h3>
                      <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : ''} items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-1`}>
                        {exp.company}
                      </div>
                      <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : ''} items-center gap-4 text-gray-600 dark:text-gray-400 text-sm mb-4`}>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-300">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className={`flex ${index % 2 === 0 ? 'md:justify-end' : ''} items-start gap-2`}>
                            <span className={`${index % 2 === 0 ? 'md:order-1' : ''}`}>{highlight}</span>
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                          </li>
                        ))}
                      </ul>
                      <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : ''} flex-wrap gap-2`}>
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-50 dark:bg-gray-600 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10 mt-8"></div>

                  <div className="md:w-1/2">
                    {/* Empty space for alternating layout */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
