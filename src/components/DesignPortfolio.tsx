import { designWorks } from '../data/content';

export const DesignPortfolio = () => {
  return (
    <section id="design" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Design Portfolio
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Creative design work including branding, UI/UX, and visual communication
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {designWorks.map((work) => (
              <div
                key={work.id}
                className="group relative bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-contain rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm font-medium mb-2">
                        {work.category}
                      </span>
                      <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                      <p className="text-gray-200">{work.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:hidden">
                  <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-gray-600 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium mb-2">
                    {work.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
