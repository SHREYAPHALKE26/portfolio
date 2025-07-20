import React from 'react';
import { Download, Mail, Github, Linkedin, ArrowDown, Sparkles, Code2, Star, Zap } from 'lucide-react';
import TypingEffect from './TypingEffect';
import InteractiveResume from './InteractiveResume';
import ShreyaImg from '/Shreya.jpg';


const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 relative overflow-hidden"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-full animate-float blur-xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full animate-float-delayed blur-lg" />
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full animate-float blur-lg" />
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-r from-indigo-400/20 to-purple-500/20 rounded-full animate-float-delayed blur-xl" />
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-teal-500/30 rotate-45 animate-spin-slow" />
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-blue-500/30 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-500/30 animate-bounce" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8 animate-fadeInUp">
          {/* Profile Image Placeholder */}
          <div className="relative mx-auto">
            <div className="w-56 h-56 mx-auto rounded-full bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-700 animate-pulse-slow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full" />
            <img 
              src={ShreyaImg} 
              alt="Shreya Phalke" 
              className="w-full h-full object-cover rounded-full relative z-10"/>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/30 to-purple-600/30 animate-ping" />
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-teal-400/20 via-blue-500/20 to-purple-600/20 animate-spin-slow" />
          </div>

            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
              <span className="text-3xl">👋</span>
            </div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-xl animate-spin-slow">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <div className="absolute top-4 -right-8 w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Star className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-2 -left-8 w-10 h-10 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-300">
              <Zap className="h-5 w-5 text-white" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-6 animate-fadeInUp delay-200">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 animate-gradient">
                Shreya Phalke
              </span>
            </h1>
            <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-700 dark:text-gray-300">
              <TypingEffect
                texts={[
                  'Web Developer',
                  'AI And ML Enthusiast',
                  'App Developer',
                  'IT Student at VIT Pune'
                ]}
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600"
              />
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto animate-fadeInUp delay-300 leading-relaxed">
              B.Tech IT Student at VIT Pune specializing in{' '}
              <span className="text-teal-600 dark:text-teal-400 font-semibold relative">
                Data Science, Machine Learning, Web and App Development
                <Code2 className="inline h-5 w-5 ml-1 animate-bounce" />
              </span>{' '}
              building efficient and user-friendly applications.
            </p>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto animate-fadeInUp delay-400 leading-relaxed">
              Passionate about creating innovative solutions with a focus on machine learning and web technologies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp delay-500">
            <InteractiveResume />
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-500 border-2 border-teal-500 hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 dark:hover:bg-gradient-to-r dark:hover:from-teal-900/20 dark:hover:to-blue-900/20 flex items-center gap-3 animate-pulse-button delay-100 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <Mail className="h-5 w-5 group-hover:animate-pulse" />
              <span className="relative z-10">Contact Me</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 animate-fadeInUp delay-600">
            <a
              href="https://www.linkedin.com/in/shreyaphalke/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white dark:bg-gray-800 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-125 transition-all duration-500 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
              <Linkedin className="h-7 w-7 relative z-10" />
            </a>
            <a
              href="https://github.com/SHREYAPHALKE26"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white dark:bg-gray-800 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-125 transition-all duration-500 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-600/20 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
              <Github className="h-7 w-7 relative z-10" />
            </a>
            <a
              href="mailto:shreya.phalke24@vit.edu"
              className="group p-4 bg-white dark:bg-gray-800 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-125 transition-all duration-500 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-teal-600/20 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
              <Mail className="h-7 w-7 relative z-10" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animate-fadeInUp delay-700 hidden md:block">
            <button
              onClick={scrollToAbout}
              className="p-3 text-gray-400 dark:text-gray-600 hover:text-teal-500 dark:hover:text-teal-400 transition-all duration-500 hover:scale-125 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm"
            >
              <ArrowDown className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;