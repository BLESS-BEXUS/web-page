import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/technical", label: "Technical" },
    { href: "/team", label: "Team" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/contact", label: "Contact" },
];

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const isActive = (href: string) => {
        if (href === "/") return location.pathname === "/";
        return location.pathname.startsWith(href);
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled || location.pathname !== "/"
                    ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/20"
                    : "bg-transparent"
            )}
        >
            <nav className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-12 h-12 flex items-center rounded-full justify-center group-hover:bg-primary/20 transition-colors">
                            <img
                                src="/Logo BLESS.png"
                                alt="BLESS Logo"
                                className="w-10 h-10 flex items-center justify-center"
                            />
                        </div>
                        <span className="font-display font-bold text-xl tracking-tight">
                            BLESS
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={cn(
                                    "px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                                    isActive(link.href)
                                        ? "text-primary bg-primary/10"
                                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </Button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
                    >
                        <div className="container mx-auto px-4 py-4">
                            <div className="flex flex-col gap-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        to={link.href}
                                        className={cn(
                                            "px-4 py-3 text-left rounded-lg transition-colors",
                                            isActive(link.href)
                                                ? "text-primary bg-primary/10"
                                                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
