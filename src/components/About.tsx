import { Cpu, MapPin } from 'lucide-react';

function About() {
  const stats = [
    {
      icon: Cpu,
      label: 'Primary Tool',
      value: 'Blender 3D',
      highlight: true,
    },
    {
      icon: MapPin,
      label: 'Based In',
      value: 'India',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
              About Me
            </p>
            <h2 className="text-5xl font-bold leading-tight">
              Dreaming in Pixels
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Hi, I'm Priyanshu — a CG/3D artist from India creating cinematic visuals and digital work using Blender 3D. I specialize in crafting stunning 3D animations, VFX, and visual storytelling that brings imagination to life.
              </p>
              <p>
                Every project is a journey from concept to reality, pixel by pixel. Whether it's creating immersive 3D environments, dynamic character animations, or breathtaking visual effects, I'm passionate about pushing the boundaries of what's possible in the digital realm.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
              <span className="text-sm text-purple-300">Available for projects</span>
            </div>
          </div>

          <div className="grid gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                    stat.highlight
                      ? 'bg-gradient-to-br from-purple-600/10 to-cyan-600/10 border-purple-500/30'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <div
                      className={`p-4 rounded-xl ${
                        stat.highlight
                          ? 'bg-gradient-to-br from-purple-600/20 to-cyan-600/20'
                          : 'bg-white/5'
                      }`}
                    >
                      <Icon className={`w-8 h-8 ${stat.highlight ? 'text-cyan-400' : 'text-purple-400'}`} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                      <p className={`text-3xl font-bold ${stat.highlight ? 'text-cyan-400' : 'text-white'}`}>
                        {stat.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
