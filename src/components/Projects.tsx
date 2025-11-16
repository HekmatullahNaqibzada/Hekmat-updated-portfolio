import { useState } from 'react';
import { projects } from '../data/content';
import { ExternalLink } from 'lucide-react';

export const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'systems' | 'websites'>('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'systems') return project.title.toLowerCase().includes('mis') || project.title.toLowerCase().includes('system') || project.title.toLowerCase().includes('stock') || project.title.toLowerCase().includes('enterprise');
    if (filter === 'websites') return !(project.title.toLowerCase().includes('mis') || project.title.toLowerCase().includes('system') || project.title.toLowerCase().includes('stock') || project.title.toLowerCase().includes('enterprise'));
    return true;
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of web applications and systems I've built for clients worldwide
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('systems')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  filter === 'systems'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                Systems
              </button>
              <button
                onClick={() => setFilter('websites')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  filter === 'websites'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                Websites
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain rounded-2xl group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-blue-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all duration-300 font-medium"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
