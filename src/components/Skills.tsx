import React from 'react';
import { Code, Database, Smartphone, BarChart3, Brain, Users, Lightbulb, Target, TrendingUp } from 'lucide-react';
import SkillsRadar from './SkillsRadar';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Data Science & Machine Learning',
      icon: <BarChart3 className="h-6 w-6" />,
      skills: [
        { name: 'Python', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'Pandas/Numpy', level: 85, color: 'from-indigo-500 to-purple-600' },
        { name: 'Scikit-Learn', level: 80, color: 'from-green-500 to-green-600' },
        { name: 'Matplotlib/Seaborn', level: 75, color: 'from-pink-500 to-pink-600' },
      ],
    },
    {
      title: 'Web Development',
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: 'React', level: 85, color: 'from-cyan-500 to-blue-500' },
        { name: 'Flask', level: 80, color: 'from-green-500 to-teal-600' },
        { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-yellow-600' },
      ],
    },
    {
      title: 'App Development & Databases',
      icon: <Smartphone className="h-6 w-6" />,
      skills: [
        { name: 'Android (Java/Kotlin)', level: 75, color: 'from-purple-500 to-indigo-500' },
        { name: 'Firebase', level: 80, color: 'from-yellow-400 to-orange-500' },
        { name: 'SQL / SQLite', level: 80, color: 'from-purple-500 to-purple-600' },
        { name: 'Git/GitHub', level: 85, color: 'from-gray-600 to-gray-800' },
      ],
    },
  ];

  const radarSkills = [
    { name: 'Python', level: 90 },
    { name: 'React', level: 85 },
    { name: 'ML Algorithms', level: 80 },
    { name: 'Flask', level: 80 },
    { name: 'Android', level: 75 },
    { name: 'SQL', level: 80 },
    { name: 'Firebase', level: 80 },
    { name: 'Problem Solving', level: 95 },
  ];

  const softSkills = [
    {
      title: 'Problem Solving',
      icon: <Brain className="h-6 w-6" />,
      description: 'Analytical skills to break down complex problems and build optimal solutions.',
    },
    {
      title: 'Team Collaboration',
      icon: <Users className="h-6 w-6" />,
      description: 'Efficient in working within cross-functional teams and collaborative projects.',
    },
    {
      title: 'Leadership',
      icon: <Target className="h-6 w-6" />,
      description: 'Leading tech teams during internships and academic projects with strategic direction.',
    },
    {
      title: 'Communication',
      icon: <Lightbulb className="h-6 w-6" />,
      description: 'Strong presentation and communication abilities to convey technical concepts.',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-cyan-50 via-white to-teal-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-cyan-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-16 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-teal-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 left-16 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-indigo-500/10 rounded-full blur-2xl animate-float-delayed" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fadeInUp">
            Skills & Expertise
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto animate-fadeInUp delay-200">
            Technical proficiencies and professional capabilities
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-3xl transform hover:scale-110 hover:-rotate-1 transition-all duration-700 animate-fadeInUp border border-gray-100 dark:border-gray-700 hover:border-teal-200 dark:hover:border-teal-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-blue-50/50 dark:from-teal-900/20 dark:to-blue-900/20 transform scale-0 group-hover:scale-100 transition-transform duration-700 rounded-2xl" />
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="text-teal-500 dark:text-teal-400 group-hover:scale-125 transition-transform duration-500 p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-500">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-6 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item group/skill">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-700 dark:text-gray-300 font-semibold group-hover/skill:text-teal-600 dark:group-hover/skill:text-teal-400 transition-colors duration-300 text-lg">
                        {skill.name}
                        <TrendingUp className="inline h-4 w-4 ml-2 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                      </span>
                      <span className="text-lg text-gray-500 dark:text-gray-400 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner">
                      <div
                        className={`bg-gradient-to-r ${skill.color} h-4 rounded-full transition-all duration-1500 ease-out animate-skill-bar relative overflow-hidden shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-shimmer" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center animate-fadeInUp">
              Skills Radar
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 animate-fadeInUp delay-300">
              <SkillsRadar skills={radarSkills} darkMode={false} />
            </div>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center animate-fadeInUp">
              Professional Skills
            </h3>
            <div className="grid gap-8">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-700 animate-fadeInUp border border-gray-100 dark:border-gray-700 hover:border-teal-200 dark:hover:border-teal-700 relative overflow-hidden"
                  style={{ animationDelay: `${(index + 3) * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-blue-50/50 dark:from-teal-900/20 dark:to-blue-900/20 transform scale-0 group-hover:scale-100 transition-transform duration-700 rounded-2xl" />
                  <div className="text-teal-500 dark:text-teal-400 mb-6 group-hover:scale-125 group-hover:animate-bounce transition-transform duration-500 p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl w-fit relative z-10">
                    {skill.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-500 relative z-10">
                    {skill.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg relative z-10">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
