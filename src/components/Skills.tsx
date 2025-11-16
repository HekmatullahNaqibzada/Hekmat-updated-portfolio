export const Skills = () => {
  const developmentSkills = [
    'PHP', 'Laravel', 'CodeIgniter', 'Java', 'React', 'MySQL', 'REST APIs',
    'Git', 'JavaScript', 'HTML/CSS', 'TypeScript', 'TailwindCSS', 'Bootstrap',
    'Ajax', 'Docker', 'CI/CD', 'Hosting', 'Deployment', 'Server Management',
    'Backup & Restore', 'Troubleshooting', 'Database Design', 'Normalization'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Development Skills</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {developmentSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
