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
    {
        name: "Jose Antonio Ossorio",
        role: "Technical Reviewer",
        initials: "JO",
    },
];

export function TeamSection() {
    return (
        <SectionWrapper id="team">
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
                        <div className="w-40 h-40 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                            <img
                                src={`/team/${member.initials}.png`}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
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
