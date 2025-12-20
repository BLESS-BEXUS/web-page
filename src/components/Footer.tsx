import { Rocket } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display font-bold text-xl">BLESS</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span>Part of REXUS/BEXUS Cycle 17</span>
            <span className="hidden md:inline">•</span>
            <a
              href="https://rexusbexus.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              rexusbexus.net
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BLESS Team. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
