import React from 'react';
import { Palette, Layout, PenTool, Camera, Globe, Megaphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Brand Identity Design',
      description: 'Complete brand identity packages including logos, color schemes, and brand guidelines.',
      features: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography']
    },
    {
      icon: Layout,
      title: 'Web & UI Design',
      description: 'Modern, responsive web designs and user interfaces that engage and convert.',
      features: ['Website Design', 'UI/UX Design', 'Mobile Apps', 'Wireframes']
    },
    {
      icon: PenTool,
      title: 'Graphic Design',
      description: 'Creative graphic design solutions for all your marketing and business needs.',
      features: ['Brochures', 'Flyers', 'Posters', 'Business Cards']
    },
    {
      icon: Camera,
      title: 'Marketing Materials',
      description: 'Eye-catching marketing materials that help your business stand out from the competition.',
      features: ['Social Media Graphics', 'Banners', 'Advertisements', 'Presentations']
    },
    {
      icon: Globe,
      title: 'Digital Assets',
      description: 'Digital design assets optimized for online platforms and digital marketing.',
      features: ['Email Templates', 'Web Banners', 'Icons', 'Illustrations']
    },
    {
      icon: Megaphone,
      title: 'Agency Support',
      description: 'White-label design services for marketing and development agencies.',
      features: ['Project Collaboration', 'Quick Turnaround', 'Scalable Solutions', 'Quality Assurance']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From brand identity to digital marketing materials, we offer comprehensive 
            design services to help your business succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;