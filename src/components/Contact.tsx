import { Mail, MessageSquare, Send } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-5xl font-bold mb-6">Let's Create Together</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's bring your creative vision to life with stunning 3D visuals and VFX
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder-gray-500"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder-gray-500 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Send Message
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-600/20 rounded-lg">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-400 text-sm">contact@priyanshu.zip</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-600/20 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Social</h4>
                  <p className="text-gray-400 text-sm">@priyanshu.zip</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-white/10 text-center">
        <p className="text-gray-400 text-sm">
          © 2024 Priyanshu. Crafted with passion in Blender 3D.
        </p>
      </footer>
    </section>
  );
}

export default Contact;
