import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import {
    Globe2,
    Balloon,
    Rocket,
    GraduationCap,
    ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const programmeDetails = [
    {
        icon: Globe2,
        title: "European Initiative",
        description:
            "Realised under a bilateral agreement between DLR (Germany) and SNSA (Sweden), collaborating with ESA to launch from the Esrange Space Center.",
    },
    {
        icon: GraduationCap,
        title: "Hands-on Experience",
        description:
            "Teams participate in a complete aerospace mission, from initial concept design and rigorous testing to launch operations and final data analysis.",
    },
    {
        icon: Balloon,
        title: "BEXUS (Balloons)",
        description:
            "Stratospheric balloons ascending up to 35 km, providing several hours of continuous data collection.",
    },
    {
        icon: Rocket,
        title: "REXUS (Rockets)",
        description:
            "Sounding rockets reaching altitudes up to 80 km, offering around five minutes of microgravity for specialized payloads.",
    },
];
export function RexusBexusSection() {
    return (
        <SectionWrapper id="rexus-bexus">
            <SectionHeader
                badge="The Programme"
                title="Rexus/Bexus: Rocket and Balloon Experiments for University Students"
                description="The REXUS/BEXUS programme offers university students across Europe the unique opportunity to design, build, and fly scientific experiments in near-space conditions."
            />

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10">
                {programmeDetails.map((detail, index) => (
                    <motion.div
                        key={detail.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-card-hover p-6 lg:p-8"
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                            <detail.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-display text-xl font-semibold mb-3">
                            {detail.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {detail.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center mt-8"
            >
                <a
                    href="https://rexusbexus.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium"
                >
                    Learn more on the official website
                    <ExternalLink className="w-4 h-4" />
                </a>
            </motion.div>
        </SectionWrapper>
    );
}
