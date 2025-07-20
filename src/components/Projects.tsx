import React from 'react';
import { Github, ExternalLink, Star, Eye, GitFork } from 'lucide-react';
import ProjectTimeline from './ProjectTimeline';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Customer Churn Prediction',
      description: 'ML-based web application that predicts customer churn using historical data analysis. Built with Flask backend and interactive frontend for real-time predictions.',
      techStack: ['Python', 'Flask', 'Machine Learning', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/SHREYAPHALKE26/customer-churn-prediction',
      demo: 'https://github.com/SHREYAPHALKE26/customer-churn-prediction',
      stars: 15,
      forks: 4,
      views: 89,
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Fraud Detection System',
      description: 'Real-time machine learning model integrated with a chatbot interface for detecting financial frauds. Features automated alerts and comprehensive reporting.',
      techStack: ['Python', 'Machine Learning', 'Flask', 'Chatbot', 'SQL'],
      github: 'https://github.com/SHREYAPHALKE26/fraud-detection',
      demo: 'https://github.com/SHREYAPHALKE26/fraud-detection',
      stars: 22,
      forks: 7,
      views: 134,
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Rock Paper Scissors Game',
      description: 'Interactive web-based game with score tracking, reset functionality, and engaging user interface. Built with vanilla JavaScript and modern CSS animations.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Local Storage'],
      github: 'https://github.com/SHREYAPHALKE26/rock-paper-scissors',
      demo: 'https://github.com/SHREYAPHALKE26/rock-paper-scissors',
      stars: 12,
      forks: 3,
      views: 67,
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Contact Book Application',
      description: 'CRUD-based contact management system with user authentication, search functionality, and secure data storage. Features clean UI and efficient database operations.',
      techStack: ['Python', 'Flask', 'SQLite', 'HTML/CSS', 'Bootstrap'],
      github: 'https://github.com/SHREYAPHALKE26/contact-book',
      demo: 'https://github.com/SHREYAPHALKE26/contact-book',
      stars: 18,
      forks: 5,
      views: 95,
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const timelineProjects = [
    {
      title: 'Customer Churn Prediction',
      date: 'October 2024',
      description: 'ML-based web application that predicts customer churn using historical data analysis.',
      techStack: ['Python', 'Flask', 'Machine Learning', 'HTML/CSS'],
      github: 'https://github.com/SHREYAPHALKE26/customer-churn-prediction',
      demo: 'https://github.com/SHREYAPHALKE26/customer-churn-prediction',
      status: 'completed' as const,
    },
    {
      title: 'Fraud Detection System',
      date: 'September 2024',
      description: 'Real-time machine learning model integrated with chatbot for detecting financial frauds.',
      techStack: ['Python', 'Machine Learning', 'Flask', 'Chatbot'],
      github: 'https://github.com/SHREYAPHALKE26/fraud-detection',
      demo: 'https://github.com/SHREYAPHALKE26/fraud-detection',
      status: 'completed' as const,
    },
    {
      title: 'Contact Book Application',
      date: 'August 2024',
      description: 'CRUD-based contact management system with user authentication and search functionality.',
      techStack: ['Python', 'Flask', 'SQLite', 'Bootstrap'],
      github: 'https://github.com/SHREYAPHALKE26/contact-book',
      demo: 'https://github.com/SHREYAPHALKE26/contact-book',
      status: 'completed' as const,
    },
    {
      title: 'Rock Paper Scissors Game',
      date: 'July 2024',
      description: 'Interactive web-based game with score tracking and modern CSS animations.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/SHREYAPHALKE26/rock-paper-scissors',
      demo: 'https://github.com/SHREYAPHALKE26/rock-paper-scissors',
      status: 'completed' as const,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-purple-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-r from-indigo-400/10 to-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-56 h-56 bg-gradient-to-r from-teal-400/10 to-cyan-500/10 rounded-full blur-2xl animate-float-delayed" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fadeInUp">
            Featured Projects
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto animate-fadeInUp delay-200">
            A showcase of my technical skills and problem-solving abilities
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-10 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-3xl transform hover:scale-105 hover:-rotate-1 transition-all duration-700 overflow-hidden animate-fadeInUp border border-gray-100 dark:border-gray-800 hover:border-teal-200 dark:hover:border-teal-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-500" />
                
                {/* Project Stats Overlay */}
                <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg">
                    <Star className="h-3 w-3" />
                    {project.stars}
                  </div>
                  <div className="bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg">
                    <GitFork className="h-3 w-3" />
                    {project.forks}
                  </div>
                  <div className="bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg">
                    <Eye className="h-3 w-3" />
                    {project.views}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm font-semibold hover:from-teal-200 hover:to-blue-200 dark:hover:from-teal-800/50 dark:hover:to-blue-800/50 transition-all duration-300 transform hover:scale-110 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-125 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    <Github className="h-5 w-5 group-hover:animate-spin" />
                    <span className="font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-all duration-300 hover:scale-125 bg-teal-100 dark:bg-teal-900/30 px-4 py-2 rounded-lg hover:bg-teal-200 dark:hover:bg-teal-800/50"
                  >
                    <ExternalLink className="h-5 w-5 group-hover:animate-bounce" />
                    <span className="font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center animate-fadeInUp">
            Project Timeline
          </h3>
          <div className="max-w-5xl mx-auto animate-fadeInUp delay-300">
            <ProjectTimeline projects={timelineProjects} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;