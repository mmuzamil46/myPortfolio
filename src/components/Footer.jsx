import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Muhammed Muzamil. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/mmuzamil46" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="mailto:ptype33@gmail.com" className="text-slate-400 hover:text-red-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-slate-400 text-sm flex items-center gap-1">
          Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Muhammed
        </div>
      </div>
    </footer>
  );
};

export default Footer;
