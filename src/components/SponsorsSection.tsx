import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Handshake, Eye, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

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
                badge="Our Sponsors"
                title="Current Partners"
                description="We're grateful to our sponsors who make this mission possible."
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
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {sponsors.map((sponsor, index) => (
                        <motion.a
                            key={sponsor.name}
                            href={sponsor.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-24 rounded-xl glass-card-hover flex items-center justify-center p-4 hover:scale-105 transition-transform"
                        >
                            <img
                                src={`/sponsors/${sponsor.logo}`}
                                alt={sponsor.name}
                                className="max-h-full max-w-full object-contain"
                            />
                        </motion.a>
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
                    Interested in supporting aerospace research? Learn more
                    about our sponsorship opportunities.
                </p>
                <Button variant="heroOutline" size="lg" asChild>
                    <Link to="/sponsors">
                        <Handshake className="w-5 h-5" />
                        View Sponsorship Options
                    </Link>
                </Button>
            </motion.div>
        </SectionWrapper>
    );
}
