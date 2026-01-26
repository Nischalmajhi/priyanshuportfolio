import { Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">CG/3D Artist • VFX Creator • Blender 3D</span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Dreaming
            </span>
            <br />
            <span className="text-white">in Pixels</span>
            <span className="inline-block ml-3 text-5xl">✨</span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
            Hi, I'm Priyanshu — a CG/3D artist from India. Creating cinematic visuals and digital work using Blender 3D. 🎬 3D/VFX in Progress ⚙️
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 group"
            >
              Let's Create
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
            >
              View Work
            </button>
          </div>
        </div>

        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-96 h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 flex items-center justify-center overflow-hidden">
              <div className="grid grid-cols-6 gap-2 p-8">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600/40 to-cyan-600/40 border border-cyan-500/30"
                    style={{
                      animationDelay: `${i * 0.05}s`,
                      animation: 'float 3s ease-in-out infinite',
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero;
