import { achievements } from '../data/content';
import { Target, TrendingUp, Users, Zap, Briefcase, Building, Folder } from 'lucide-react';

const iconMap = {
  target: Target,
  'trending-up': TrendingUp,
  users: Users,
  zap: Zap,
  briefcase: Briefcase,
  building: Building,
  project: Folder
};

export const Achievements = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Impact & Achievements
            </h2>
            <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement) => {
              const Icon = iconMap[achievement.icon as keyof typeof iconMap];
              return (
                <div
                  key={achievement.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {achievement.metric}
                  </div>
                  <div className="text-blue-100">
                    {achievement.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
