import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-6 h-6 text-blue-600" />
              <span className="text-blue-600 font-semibold">Creative Design Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Elevate Your Brand with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}Minimind
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We specialize in creating stunning graphic designs for new businesses, supporting marketing agencies, 
              and generating innovative ideas that drive business expansion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button
                onClick={scrollToPortfolio}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                View Our Work
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                  <div className="h-4 bg-blue-200 rounded-full w-1/2"></div>
                  <div className="h-4 bg-purple-200 rounded-full w-5/6"></div>
                  <div className="h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"></div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;