import { Link } from "react-router-dom";

const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/technical", label: "Technical" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
];

export function Footer() {
    return (
        <footer className="py-12 border-t border-border/50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col gap-8">
                    {/* Top row */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2">
                            <img
                                src="/Logo BLESS.png"
                                alt="BLESS Logo"
                                className="w-10 h-10 flex items-center justify-center"
                            />
                            <span className="font-display font-bold text-xl">
                                BLESS
                            </span>
                        </Link>

                        {/* Navigation */}
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Bottom row */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border/30">
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

                        <div className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} BLESS Team. All rights
                            reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
