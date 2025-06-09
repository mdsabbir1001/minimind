import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Strategic Design',
      description: 'We create designs that align with your business goals and target audience.'
    },
    {
      icon: Users,
      title: 'Agency Partnership',
      description: 'Supporting marketing and development agencies with top-tier creative solutions.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Generating fresh ideas that help businesses expand and grow their market presence.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Delivering high-quality designs that exceed expectations and drive results.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Minimind</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a creative graphic design team passionate about helping businesses 
            establish strong visual identities and achieve their growth objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Empowering Businesses Through Creative Excellence
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              At Minimind, we believe that great design is more than just aesthetics—it's about 
              creating meaningful connections between brands and their audiences. Our team combines 
              creative vision with strategic thinking to deliver designs that not only look stunning 
              but also drive business results.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're a startup looking to establish your brand identity, a marketing agency 
              seeking creative support, or an established business ready to expand, we have the 
              expertise and passion to bring your vision to life.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;