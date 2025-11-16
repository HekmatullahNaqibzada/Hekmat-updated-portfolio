import { GraduationCap } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Education
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex items-start gap-6">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Bachelor's Degree in Computer Science
                </h3>
                <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  Allamah Institute
                </div>
                <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                  Completed
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex items-start gap-6">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Bachelor's Degree
                </h3>
                <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  University of the People
                </div>
                <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
                  Ongoing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
