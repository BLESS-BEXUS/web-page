import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const teamMembers = [
    {
        name: "Mario Martínez",
        role: "Team Lead",
        initials: "MM",
    },
    {
        name: "Carmen Moreno",
        role: "Technical Lead",
        initials: "CM",
    },
    {
        name: "Óscar Sánchez",
        role: "Software & Data Specialist",
        initials: "OS",
    },
    {
        name: "David Enrique",
        role: "Mechatronic Specialist",
        initials: "DA",
    },
    {
        name: "Rodrigo Justo",
        role: "RF & Testing Specialist ",
        initials: "RJ",
    },
    {
        name: "Mario Valverde",
        role: "Mechanical Specialist",
        initials: "MV",
    },
    {
        name: "Jacobo Martín",
        role: "Systems Engineering Specialist",
        initials: "JM",
    },
];

export function TeamSection() {
    return (
        <SectionWrapper id="team" alternate>
            <SectionHeader
                badge="Our Team"
                title="Meet the Minds Behind BLESS"
                description="A passionate team of students and researchers united by curiosity and a drive to explore the boundaries of wireless technology."
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="glass-card-hover p-5 text-center group"
                    >
                        {/* Avatar */}
                        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                            <span className="font-display text-2xl font-bold text-primary">
                                {member.initials}
                            </span>
                        </div>

                        {/* Info */}
                        <h3 className="font-display font-semibold text-lg mb-1">
                            {member.name}
                        </h3>
                        <p className="text-primary text-sm font-medium mb-1">
                            {member.role}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
