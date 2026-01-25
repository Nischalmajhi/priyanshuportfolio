import { Box, Film, Sparkles, ArrowRight } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Box,
      title: '3D Animation & CGI',
      description:
        'Creating stunning 3D animations and CGI visuals using Blender 3D. From character animation to product visualization.',
      color: 'purple',
    },
    {
      icon: Film,
      title: 'VFX Creation',
      description:
        'Professional visual effects compositing, particle simulations, and cinematic effects for digital content.',
      color: 'cyan',
    },
    {
      icon: Sparkles,
      title: 'Visual Storytelling',
      description:
        'Crafting compelling visual narratives through cinematic renders and creative 3D design work.',
      color: 'blue',
    },
  ];

  return (
    <section id="services" className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            What I Do
          </p>
          <h2 className="text-5xl font-bold mb-6">My Services</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Specialized services to bring your creative vision to life with professional quality
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/10"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

                <button className="flex items-center gap-2 text-purple-400 group-hover:text-cyan-400 transition-colors font-medium">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
