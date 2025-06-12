import React, { useState } from 'react';
import { ExternalLink, Eye, X } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<any>(null);

  const categories = ['All', 'Branding', 'Web Design', 'Print Design', 'Marketing', 'Food & Beverage'];

  const projects = [
    {
      id: 1,
      title: 'Logo & Brand Identity',
      category: 'Branding',
      image: 'https://i.ibb.co/3mcRLqgm/Blank.png',
      images: [
        'https://i.ibb.co/3mcRLqgm/Blank.png',
      ],
      description: 'Complete brand identity for a tech startup including logo, color palette, and brand guidelines.',
      link: 'https://facebook.com/minimind.team'
    },
    {
      id: 2,
      title: 'UI Or Web Design',
      category: 'Web Design',
      image: 'https://i.ibb.co/3mcRLqgm/Blank.png',
      images: [
        'https://i.ibb.co/3mcRLqgm/Blank.png',
      ],
      description: 'Modern, eco-friendly website design for a sustainable products company.',
      link: 'https://facebook.com/minimind.team'
    },
    {
      id: 3,
      title: 'Coffee House Menu',
      category: 'Print Design',
      image: 'https://i.ibb.co/3mcRLqgm/Blank.png',
      images: [
        'https://i.ibb.co/3mcRLqgm/Blank.png',
      ],
      description: 'Elegant menu design for a local coffee house with rustic charm.',
      link: 'https://facebook.com/minimind.team'
    },
    {
      id: 4,
      title: 'Social Media Ads Campaign',
      category: 'Marketing',
      image: 'https://i.ibb.co/MyB6NJPK/image.png',
      images: [
        'https://i.ibb.co/cB8QXKg/Social-media-Marketing-Banner.png',
        'https://i.ibb.co/p6CNN13D/Untitled-2.png',
        'https://i.ibb.co/YFDk3nvd/EMI.png',
        'https://i.ibb.co/Mk7FXNg5/5.png',
        'https://i.ibb.co/mrRGHZQS/4.png',
        'https://i.ibb.co/39n1cPS8/2.png',
        'https://i.ibb.co/v45Tm8fF/6.png',
        'https://i.ibb.co/hnbsk2g/sa.png',
      ],
      description: 'Dynamic marketing campaign for a fitness mobile application.',
      link: 'https://facebook.com/minimind.team'
    },
    {
      id: 5,
      title: 'Brand Identity for Bakery',
      category: 'Branding',
      image: 'https://i.ibb.co/3mcRLqgm/Blank.png',
      images: [
        'https://i.ibb.co/3mcRLqgm/Blank.png',
      ],
      description: 'Warm and inviting brand identity for a local artisan bakery.',
      link: 'https://facebook.com/minimind.team'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'Web Design',
      image: 'https://i.ibb.co/3mcRLqgm/Blank.png',
      images: [
        'https://i.ibb.co/3mcRLqgm/Blank.png',
      ],
      description: 'Clean and modern portfolio website for a creative professional.',
      link: 'https://facebook.com/minimind.team'
    }
    ,
    {
      id: 7,
      title: 'Social Media Ads Campaign',
      category: 'Food & Beverage',
      image: 'https://i.ibb.co/cSHxzjKw/image.png',
      images: [
        'https://i.ibb.co/B2hFWznG/Food-manu-2-1.jpg',
        'https://i.ibb.co/5gzcrGdv/Burger.png',
        'https://i.ibb.co/N26Ffn1k/Burger-112.jpg',
        'https://i.ibb.co/Hf38C2t1/Main.jpg',
        'https://i.ibb.co/0yyFqHk4/Manipulatoin2.jpg',
        'https://i.ibb.co/4LHQPQt/Food-manu-1.jpg',
      ],
      description: 'Clean and modern portfolio website for a creative professional.',
      link: 'https://facebook.com/minimind.team/'
    }
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleEyeClick = (project: any) => {
    setModalProject(project);
    setModalOpen(true);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      {/* Modal */}
      {modalOpen && modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div
            className="
              bg-white rounded-xl shadow-lg
              w-full max-w-4xl mx-2
              p-4 sm:p-6
              relative
              max-h-[90vh] flex flex-col
            "
          >
            <button
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-500 hover:text-red-500 z-10"
              onClick={() => setModalOpen(false)}
            >
              <X size={28} />
            </button>
            <h2 className="text-2xl font-bold mb-2 text-center">{modalProject.title}</h2>
            <div className="text-center text-blue-600 font-semibold mb-2">{modalProject.category}</div>
            <p className="text-gray-600 text-center mb-4">{modalProject.description}</p>
            {/* Gallery */}
            <div className="overflow-y-auto flex-1 max-h-[60vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-2">
                {(modalProject.images || [modalProject.image]).map((img: string, idx: number) => (
                  <img
                    key={idx}
                    src={img}
                    alt={modalProject.title + ' ' + (idx + 1)}
                    className="w-full aspect-square object-cover rounded-lg border mx-auto"
                    onContextMenu={e => e.preventDefault()}
                    draggable={false}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

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
                    <button
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"
                      onClick={() => handleEyeClick(project)}
                    >
                      <Eye size={20} />
                    </button>
                    <button
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"
                      onClick={() => window.open(project.link, '_blank')}
                    >
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
            View All Projects on Behance
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
