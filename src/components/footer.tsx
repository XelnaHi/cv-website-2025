import { Mail, Github, Linkedin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary-purple px-6 py-10 border-t border-muted-foreground/10">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-foreground font-mono text-sm">

        <div className="text-center text-white/80 sm:text-left">
          <p className="mb-1 font-semibold ">Teodor Fredriksson Portfolio</p>
        <div className="border-b-2 mb-1 border-secondary-cream/50"></div>  
          <p>Built with React, TypeScript and Tailwind CSS</p>
        </div>

        <div className="flex flex-col text-white/80 items-center sm:items-end gap-2">
          <div className="flex gap-6 items-center">
            <Link
              href="mailto:teofredev@gmail.com"
              className="hover:text-accent-yellow  transition-colors flex items-center gap-1"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </Link>
            <Link
              href="https://github.com/teodorfredriksson95"
              target="_blank"
              className="hover:text-accent-yellow  transition-colors flex items-center gap-1"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/teodor-fredriksson-919606b9/"
              target="_blank"
              className="hover:text-accent-yellow  transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </Link>
            
          </div>

        </div>

      </div>
    </footer>
  );
}
