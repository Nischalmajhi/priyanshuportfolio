import demoVideo from '../assets/videos/demo.mp4';

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

        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative aspect-video overflow-hidden bg-black rounded-2xl border border-white/10">
            <video
              src={demoVideo}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-fit scale-150 -rotate-90"
            />
          </div>
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
