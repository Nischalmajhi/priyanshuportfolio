import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

type Category = 'All' | '3D' | 'VFX' | 'CGI';

interface Project {
  id: number;
  title: string;
  description: string;
  category: Category;
  reelUrl: string;
}


function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const categories: Category[] = ['All', '3D', 'VFX', 'CGI'];

const projects: Project[] = [
  {
    id: 1,
    title: 'Neon City Chronicles',
    description: 'Cinematic 3D cityscape created in Blender',
    category: '3D',
    reelUrl: 'https://www.instagram.com/reel/DIG17_mM4VP/',
  },
  {
    id: 2,
    title: 'Abstract Dimensions',
    description: '3D geometric visualization',
    category: '3D',
    reelUrl: 'https://www.instagram.com/reel/DBwrtp_IoHZ/',
  },
  {
    id: 3,
    title: 'Studio Production Setup',
    description: 'Behind-the-scenes 3D workflow',
    category: 'CGI',
    reelUrl: 'https://www.instagram.com/reel/C_Kp9OcRN2R/',
  },
  {
    id: 4,
    title: 'Product Visualization',
    description: 'Photorealistic CGI render',
    category: 'CGI',
    reelUrl: 'https://www.instagram.com/reel/C6biND_SAaK/',
  },

  // VFX
  {
    id: 5,
    title: 'Particle Storm VFX',
    description: 'Advanced particle simulation',
    category: 'VFX',
    reelUrl: 'https://www.instagram.com/reel/DQ8ZQOViL_T/',
  },
  {
    id: 6,
    title: 'Motion Graphics Reel',
    description: 'Dynamic motion design',
    category: 'VFX',
    reelUrl: 'https://www.instagram.com/reel/DOJdNKBiSGK/',
  },
  {
    id: 7,
    title: 'Motion Graphics Reel',
    description: 'Dynamic motion design',
    category: 'VFX',
    reelUrl: 'https://www.instagram.com/reel/DN91Ss_iAZ7/',
  },
  {
    id: 8,
    title: 'Motion Graphics Reel',
    description: 'Dynamic motion design',
    category: 'VFX',
    reelUrl: 'https://www.instagram.com/reel/DOtnRnNgOxz/',
  },
];

const openReel = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};


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
  className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10
             hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
>
  {/* Category badge */}
  <div className="absolute top-4 left-4 z-20">
    <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
      {project.category}
    </span>
  </div>

  {/* Reel Preview */}
  <div className="relative h-64 bg-black overflow-hidden">
    <iframe
      src={`${project.reelUrl}embed`}
      loading="lazy"
      className="
        absolute inset-0 w-full h-full
        scale-[1.8]
        transition-all duration-500
        pointer-events-none
        centered-iframe
      "
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    />

    {/* Fallback / overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent z-10" />

    {/* Play indicator */}
    {/* <div className="absolute inset-0 flex items-center justify-center z-20
                    opacity-0 group-hover:opacity-100 transition">
      <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm">
        ▶ Play
      </div>
    </div> */}
  </div>

  {/* Content */}
  <div className="p-6 space-y-3 relative z-20">
    <div className="flex items-start justify-between gap-4">
      <h3
        onClick={() => openReel(project.reelUrl)}
        className="text-xl font-bold text-white hover:text-cyan-400 transition-colors cursor-pointer"
      >
        {project.title}
      </h3>

      <ExternalLink
        onClick={() => openReel(project.reelUrl)}
        className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
      />
    </div>

    <p
      onClick={() => openReel(project.reelUrl)}
      className="text-gray-400 text-sm leading-relaxed cursor-pointer hover:text-gray-200 transition-colors"
    >
      {project.description}
    </p>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
