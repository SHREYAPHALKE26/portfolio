import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'VIT Pune',
      duration: '2024 - 2027',
      grade: 'CGPA: 8.81/10',
      status: 'Pursuing',
      description: 'Specializing in software development, machine learning, and web technologies with focus on practical applications.',
    },
    {
      degree: 'Diploma in Information Technology',
      institution: 'Government Residence Women Polytechnic, Tasgaon',
      duration: '2021 - 2024',
      grade: '90.88%',
      status: 'Completed',
      description: 'Comprehensive study of IT fundamentals, programming languages, and database management systems.',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Chandrakant Vasantrao Dada Patil Mahavidyalay',
      duration: '2020 - 2021',
      grade: '91.60%',
      status: 'Completed',
      description: 'Strong foundation in core subjects with emphasis on mathematics and science.',
    },
  ];

  const certifications = [
    'Python Programming Certification',
    'Machine Learning Fundamentals',
    'Web Development with Flask',
    'Database Management with SQL',
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic journey and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-teal-500" />
              Academic Timeline
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-teal-600 dark:text-teal-400 font-semibold mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {edu.description}
                      </p>
                    </div>
                    <div className="md:text-right mt-4 md:mt-0">
                      <div className="inline-flex items-center gap-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        <span>{edu.status}</span>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {edu.duration}
                      </div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white mt-1">
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-teal-500" />
              Certifications
            </h3>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {cert}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;