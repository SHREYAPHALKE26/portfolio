import React from 'react';
import { Calendar, Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  date: string;
  description: string;
  techStack: string[];
  github: string;
  demo: string;
  status: 'completed' | 'in-progress' | 'planned';
}

interface ProjectTimelineProps {
  projects: Project[];
}

const ProjectTimeline: React.FC<ProjectTimelineProps> = ({ projects }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-yellow-500';
      case 'planned': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'planned': return 'Planned';
      default: return 'Unknown';
    }
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-blue-500"></div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="relative flex items-start gap-6 group">
            {/* Timeline dot */}
            <div className={`relative z-10 w-4 h-4 rounded-full ${getStatusColor(project.status)} ring-4 ring-white dark:ring-gray-900 group-hover:scale-125 transition-transform duration-300`}>
              <div className={`absolute inset-0 rounded-full ${getStatusColor(project.status)} animate-ping opacity-75`}></div>
            </div>

            {/* Project card */}
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{project.date}</span>
                  </div>
                </div>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(project.status)}`}>
                  {getStatusText(project.status)}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  <Github className="h-4 w-4" />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-200"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm">Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline;