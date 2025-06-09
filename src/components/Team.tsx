import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import membersimg from '../assets/Unknown_Member.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sabbir Hossain',
      role: 'Team Lead & Brand Designer',
      bio: 'With over 3 years of experience in brand design, Sabbir leads our creative vision and ensures every project exceeds expectations.',
      image: membersimg,
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sabbirhossain.sabbir.sbr.bd'
      }
    },
    {
      name: 'Ruhul Amin',
      role: 'Project Manager',
      bio: 'Ahmed acts as the bridge between our clients and the creative team. He ensures every project is delivered on time and within budget, managing the entire process smoothly from start to finish.',
      image: membersimg,
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'ruhulaminsharkerdesign@gmail.com'
      }
    },
    {
      name: 'Hide Member',
      role: 'Brand Strategist',
      bio: 'Marcus combines strategic thinking with creative execution to develop brand identities that resonate with target audiences.',
      image: membersimg,
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'minimindgpx.team@gmail.com'
      }
    },
    {
      name: 'Hide Member',
      role: 'Graphic Designer',
      bio: 'Emily brings fresh perspectives to print and digital design, creating visually stunning materials that communicate effectively.',
      image: membersimg,
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'inimindgpx.team@gmail.com'
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team of designers and strategists work together to bring 
            your creative visions to life with expertise and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors duration-200"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-600 hover:text-white transition-colors duration-200"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;