import React, { useState } from 'react';
import { Download, Eye, X, FileText } from 'lucide-react';

const InteractiveResume: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);

  const resumeData = {
    personalInfo: {
      name: 'Shreya Phalke',
      title: 'B.Tech IT Student',
      email: 'shreya.phalke24@vit.edu',
      location: 'Pune, Maharashtra, India',
    },
    summary:
      'Passionate B.Tech Information Technology student at VIT Pune with expertise in Python, Flask, Machine Learning, and Web Development. Experienced in building efficient applications and leading technical teams.',
    skills: {
      programming: ['Python', 'Java', 'C', 'C++'],
      web: ['Flask', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      database: ['SQL', 'SQLite'],
      soft: ['Leadership', 'Teamwork', 'Communication', 'Problem Solving'],
    },
    education: [
      {
        degree: 'B.Tech in Information Technology',
        institution: 'VIT Pune',
        duration: '2024-2027',
        gpa: '8.71/10',
      },
      {
        degree: 'Diploma in Information Technology',
        institution: 'Government Residence Women Polytechnic, Tasgaon',
        duration: '2021-2024',
        percentage: '90.88%',
      },
    ],
    experience: [
      {
        title: 'Python Intern',
        company: 'Amplifier Electronics Pvt Ltd',
        duration: 'Summer 2024',
        location: 'Karad, India',
      },
      {
        title: 'Frontend Intern',
        company: 'Herbs Magic',
        duration: '2024',
        location: 'Remote',
      },
    ],
  };

  return (
    <>
      <div className="flex gap-4">
        <button
          onClick={() => setShowPreview(true)}
          className="flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold border-2 border-teal-500 hover:bg-teal-50 dark:hover:bg-teal-900/20 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Eye className="h-5 w-5" />
          Preview Resume
        </button>

        <a
          href="/shreya_phalke_VIT.pdf"
          download
          className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <Download className="h-5 w-5" />
          Download PDF
        </a>
      </div>

      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <FileText className="h-6 w-6" />
                Resume Preview
              </h3>
              <button
                onClick={() => setShowPreview(false)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-8 space-y-8 text-gray-900 dark:text-white">
              {/* Personal Info */}
              <div>
                <h2 className="text-2xl font-bold">{resumeData.personalInfo.name}</h2>
                <p>{resumeData.personalInfo.title}</p>
                <p>{resumeData.personalInfo.email}</p>
                <p>{resumeData.personalInfo.location}</p>
              </div>

              {/* Summary */}
              <div>
                <h3 className="text-xl font-semibold">Summary</h3>
                <p>{resumeData.summary}</p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-semibold">Skills</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Programming:</strong> {resumeData.skills.programming.join(', ')}</li>
                  <li><strong>Web:</strong> {resumeData.skills.web.join(', ')}</li>
                  <li><strong>Database:</strong> {resumeData.skills.database.join(', ')}</li>
                  <li><strong>Soft Skills:</strong> {resumeData.skills.soft.join(', ')}</li>
                </ul>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xl font-semibold">Education</h3>
                <ul className="space-y-2">
                  {resumeData.education.map((edu, idx) => (
                    <li key={idx}>
                      <strong>{edu.degree}</strong> at {edu.institution} ({edu.duration})<br />
                      {edu.gpa ? `GPA: ${edu.gpa}` : `Percentage: ${edu.percentage}`}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-xl font-semibold">Experience</h3>
                <ul className="space-y-2">
                  {resumeData.experience.map((exp, idx) => (
                    <li key={idx}>
                      <strong>{exp.title}</strong> at {exp.company} ({exp.duration})<br />
                      Location: {exp.location}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InteractiveResume;
