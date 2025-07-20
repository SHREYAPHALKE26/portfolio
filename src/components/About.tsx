import React from 'react';
import { Code, Smartphone, Brain, BarChart3 } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Data Science & Machine Learning',
      description: 'Skilled in Python, data analysis, machine learning algorithms, and predictive modeling.',
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Web Development',
      description: 'Experience in building responsive and interactive web applications using Flask, HTML, CSS, JavaScript, and React.',
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'App Development',
      description: 'Hands-on with Android app development, creating efficient and user-friendly mobile applications.',
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'Passion for Technology',
      description: 'Always eager to explore new technologies and build solutions that create real-world impact.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            A passionate technologist skilled in Data Science, ML, Web, and App Development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm Shreya Phalke, a B.Tech IT student at VIT Pune with deep interest in Data Science, Machine Learning, Web, and App Development. I enjoy turning data into insights and crafting digital experiences.
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              My expertise ranges across Python, data science tools, React, Flask, and mobile app development. I love exploring new technologies and building solutions that impact users positively.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-teal-600 hover:to-blue-600 transform hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-2xl relative overflow-hidden"
              >
                View Projects
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold border-2 border-teal-500 hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 dark:hover:bg-gradient-to-r dark:hover:from-teal-900/20 dark:hover:to-blue-900/20 transform hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-2xl relative overflow-hidden"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-teal-200 dark:hover:border-teal-700 relative overflow-hidden"
              >
                <div className="text-teal-500 dark:text-teal-400 mb-6">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
