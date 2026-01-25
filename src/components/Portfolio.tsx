import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

type Category = 'All' | '3D' | 'VFX' | 'CGI';

interface Project {
  id: number;
  title: string;
  description: string;
  category: Category;
  image: string;
}

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const categories: Category[] = ['All', '3D', 'VFX', 'CGI'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Neon City Chronicles',
      description: 'Cinematic 3D cityscape created in Blender with dynamic lighting and atmospheric effects',
      category: '3D',
      image: 'https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'Abstract Dimensions',
      description: '3D geometric visualization in Blender exploring form, space, and light dynamics',
      category: '3D',
      image: 'https://images.pexels.com/photos/1619654/pexels-photo-1619654.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'Studio Production Setup',
      description: 'Behind-the-scenes: 3D workflow and rendering pipeline in Blender',
      category: 'CGI',
      image: 'https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'Particle Storm VFX',
      description: 'Advanced particle simulation and visual effects compositing for cinematic sequences',
      category: 'VFX',
      image: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      title: 'Product Visualization',
      description: 'Photorealistic product rendering with advanced material shading and lighting',
      category: 'CGI',
      image: 'https://images.pexels.com/photos/159886/pexels-photo-159886.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      title: 'Motion Graphics Reel',
      description: 'Dynamic motion design combining 3D elements with stunning visual effects',
      category: 'VFX',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            My Work
          </p>
          <h2 className="text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A collection of my latest VFX, 3D animation, and video editing projects
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                  {project.category}
                </span>
              </div>

              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
