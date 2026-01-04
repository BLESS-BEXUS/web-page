import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Handshake, Eye, Users, Award } from "lucide-react";
import { link } from "fs";

const benefits = [
    {
        icon: Eye,
        label: "Visibility",
        description: "Logo on all mission materials and presentations",
    },
    {
        icon: Users,
        label: "Outreach",
        description: "Association with STEM education initiatives",
    },
    {
        icon: Award,
        label: "Recognition",
        description: "Featured in final report and publications",
    },
    {
        icon: Handshake,
        label: "Partnership",
        description: "Direct collaboration with the team",
    },
];

const sponsors = [
    {
        name: "Universidad Francisco de Vitoria",
        logo: "ufv.png",
        link: "https://www.ufv.es",
    },
    {
        name: "Enasui",
        logo: "enasui.png",
        link: "https://www.enasui.com",
    },
    {
        name: "CEIEC",
        logo: "ceiec.png",
        link: "https://www.ceiec.es",
    },
];

export function SponsorsSection() {
    return (
        <SectionWrapper id="sponsors" alternate>
            <SectionHeader
                badge="Partnership"
                title="Become a Sponsor"
                description="Support cutting-edge aerospace research and gain visibility in the international space community."
            />

            {/* Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={benefit.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center p-4"
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-3">
                            <benefit.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-medium mb-1">{benefit.label}</h4>
                        <p className="text-xs text-muted-foreground">
                            {benefit.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Sponsor Logos Grid */}
            <div className="glass-card p-8 mb-8">
                <h3 className="font-display text-xl font-semibold text-center mb-6">
                    Our Sponsors
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={sponsor.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="sponsor-placeholder h-24 rounded-xl glass-card-hover"
                        >
                            <a
                                href={sponsor.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            >
                                <img
                                    src={`/sponsors/${sponsor.logo}`}
                                    alt={sponsor.name}
                                    className="w-full h-full object-contain p-4"
                                />{" "}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Join us in pushing the boundaries of wireless technology.
                    Sponsors receive prominent placement on mission materials,
                    social media recognition, and acknowledgment in our final
                    scientific publication.
                </p>
                <Button
                    variant="hero"
                    size="lg"
                    onClick={() => {
                        const element = document.querySelector("#contact");
                        if (element)
                            element.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    <Handshake className="w-5 h-5" />
                    Become a Sponsor
                </Button>
            </motion.div>
        </SectionWrapper>
    );
}
