import { Play } from 'lucide-react';

function DemoReel() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Demo Reel
          </p>
          <h2 className="text-5xl font-bold mb-6">See My Work in Action</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Watch my latest demo reel showcasing Blender 3D projects, VFX work, and cinematic CGI creations
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
          <div className="relative aspect-video bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-white/10">
            <img
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Demo Reel Thumbnail"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27]/80 via-transparent to-transparent"></div>

            <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-sm font-medium">
              2:30
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-2xl animate-pulse"></div>
                <button className="relative w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-purple-500/50">
                  <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                </button>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-2xl transition-all duration-300 pointer-events-none"></div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Click to watch the full demo reel showcasing my latest 3D and VFX projects
          </p>
        </div>
      </div>
    </section>
  );
}

export default DemoReel;
