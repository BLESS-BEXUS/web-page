import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-balloon.jpg";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="Stratospheric balloon floating at 30km altitude with Earth's curvature visible"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
            </div>

            {/* Stars overlay */}
            <div className="absolute inset-0 stars-bg opacity-30" />

            {/* Content */}
            <div className="relative container mx-auto px-4 lg:px-8 pt-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-8">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            REXUS/BEXUS Cycle 17
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
                    >
                        <span className="gradient-text">BLESS:</span>{" "}
                        <span className="text-foreground">BEXUS HaLow</span>
                        <br />
                        <span className="text-foreground/90">
                            Evaluation in Stratospheric Systems
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
                    >
                        We evaluate how stratospheric conditions —temperature,
                        pressure, and radiation— affect RF performance and
                        operational behavior of{" "}
                        <span className="text-foreground font-medium">
                            Wi-Fi HaLow (802.11ah)
                        </span>
                        .
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button variant="hero" size="lg" asChild>
                            <Link to="/about" className="group">
                                Read the Mission
                                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button variant="heroOutline" size="lg" asChild>
                            <Link to="/team">
                                <Users className="w-4 h-4" />
                                Meet the Team
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
                >
                    <div className="w-1 h-2 rounded-full bg-primary" />
                </motion.div>
            </motion.div>
        </section>
    );
}
