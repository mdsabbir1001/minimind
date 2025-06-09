import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Branding', 'Web Design', 'Print Design', 'Marketing'];

  const projects = [
    {
      id: 1,
      title: 'TechFlow Branding',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete brand identity for a tech startup including logo, color palette, and brand guidelines.'
    },
    {
      id: 2,
      title: 'GreenLeaf Website',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Modern, eco-friendly website design for a sustainable products company.'
    },
    {
      id: 3,
      title: 'Coffee House Menu',
      category: 'Print Design',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Elegant menu design for a local coffee house with rustic charm.'
    },
    {
      id: 4,
      title: 'Fitness App Campaign',
      category: 'Marketing',
      image: 'https://images.pexels.com/photos/863971/pexels-photo-863971.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Dynamic marketing campaign for a fitness mobile application.'
    },
    {
      id: 5,
      title: 'Artisan Bakery Brand',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Warm and inviting brand identity for a local artisan bakery.'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Clean and modern portfolio website for a creative professional.'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent work and see how we've helped businesses 
            create compelling visual identities and marketing materials.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200">
                      <Eye size={20} />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-600 font-semibold">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;