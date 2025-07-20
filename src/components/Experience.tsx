import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Python Intern',
      company: 'Amplifier Electronics Pvt Ltd',
      duration: 'Summer 2024',
      location: 'Karad, India',
      description: 'Worked on Python-based projects focusing on automation and data processing. Gained hands-on experience with Python libraries and contributed to real-world applications.',
      achievements: [
        'Developed automation scripts using Python for data processing',
        'Collaborated with senior developers on project optimization',
        'Gained experience with Python libraries and frameworks',
      ],
    },
    {
      title: 'Frontend Intern',
      company: 'Herbs Magic',
      duration: '2024',
      location: 'Remote',
      description: 'Focused on frontend development using HTML, CSS, JavaScript, and Bootstrap. Created responsive web interfaces and improved user experience across multiple projects.',
      achievements: [
        'Developed responsive web interfaces using modern CSS techniques',
        'Implemented interactive features with JavaScript',
        'Collaborated with design team to enhance user experience',
      ],
    },
    {
      title: 'App Development Coordinator',
      company: 'GedIT Coding Club, VIT Pune',
      duration: '2024 - Present',
      location: 'VIT Pune',
      description: 'Leading app development initiatives and coordinating coding events. Mentoring students in mobile and web application development while organizing technical workshops.',
      achievements: [
        'Organized coding workshops and app development sessions',
        'Mentored junior students in programming and development',
        'Coordinated technical events and coding competitions',
      ],
    },
    {
      title: 'Technical Coordinator',
      company: 'YUJ Club, VIT Pune',
      duration: '2024 - Present',
      location: 'VIT Pune',
      description: 'Managing technical activities and events for the club. Responsible for organizing workshops, seminars, and technical competitions while fostering a collaborative learning environment.',
      achievements: [
        'Successfully organized multiple technical workshops',
        'Coordinated inter-college technical competitions',
        'Built strong networks within the technical community',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and key contributions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-teal-600 dark:text-teal-400 font-semibold mb-2">
                    {exp.company}
                  </p>
                </div>
                <div className="md:text-right space-y-1">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
                  Key Achievements
                </h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                    >
                      <span className="text-teal-500 dark:text-teal-400 mt-1">•</span>
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;