import { Layout } from "@/components/Layout";
import { SponsorsSection } from "@/components/SponsorsSection";
import { SectionWrapper, SectionHeader } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    Handshake,
    Rocket,
    Globe,
    FileText,
    MessageSquare,
    Mail,
} from "lucide-react";

const sponsorshipTiers = [
    {
        name: "Gold",
        benefits: [
            "Large logo on payload & website",
            "Social media feature post",
            "Named in press releases",
            "Final report acknowledgment",
            "Team presentation opportunity",
        ],
        highlight: true,
    },
    {
        name: "Silver",
        benefits: [
            "Medium logo on website",
            "Social media mention",
            "Final report acknowledgment",
            "Newsletter recognition",
        ],
        highlight: false,
    },
    {
        name: "Bronze",
        benefits: [
            "Logo on website sponsors section",
            "Final report acknowledgment",
            "Newsletter recognition",
        ],
        highlight: false,
    },
];

const whySponsor = [
    {
        icon: Rocket,
        title: "Aerospace Innovation",
        description:
            "Associate your brand with cutting-edge space technology research under the ESA Education umbrella.",
    },
    {
        icon: Globe,
        title: "International Visibility",
        description:
            "Gain exposure across European space agencies, universities, and the global aerospace community.",
    },
    {
        icon: FileText,
        title: "Scientific Recognition",
        description:
            "Be acknowledged in peer-reviewed publications and official BEXUS documentation.",
    },
    {
        icon: MessageSquare,
        title: "STEM Outreach",
        description:
            "Support educational initiatives that inspire the next generation of engineers and scientists.",
    },
];

const Sponsors = () => {
    return (
        <Layout>
            <div className="pt-20">
                {/* Hero section for sponsors page */}
                <SectionWrapper id="sponsors-hero">
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6"
                        >
                            <Handshake className="w-4 h-4" />
                            Partnership Opportunities
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="font-display text-4xl md:text-5xl font-bold mb-6"
                        >
                            Support{" "}
                            <span className="gradient-text">
                                Aerospace Research
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-muted-foreground leading-relaxed"
                        >
                            Partner with BLESS and contribute to advancing
                            wireless communication technologies for near-space
                            applications. Your support enables groundbreaking
                            research under the ESA BEXUS program.
                        </motion.p>
                    </div>
                </SectionWrapper>

                {/* Why Sponsor */}
                <SectionWrapper id="why-sponsor" alternate>
                    <SectionHeader
                        badge="Benefits"
                        title="Why Sponsor BLESS?"
                        description="Partnering with our team offers unique benefits for organizations interested in aerospace, technology, and education."
                    />
                    <div className="grid md:grid-cols-2 gap-6">
                        {whySponsor.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card-hover p-6 flex gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-display text-lg font-semibold mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>

                {/* Sponsorship Tiers */}
                <SectionWrapper id="tiers">
                    <SectionHeader
                        badge="Tiers"
                        title="Sponsorship Levels"
                        description="Choose the level of partnership that best fits your organization's goals and budget."
                    />
                    <div className="grid md:grid-cols-3 gap-6">
                        {sponsorshipTiers.map((tier, index) => (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`glass-card p-6 relative ${
                                    tier.highlight
                                        ? "border-primary/50 shadow-glow"
                                        : ""
                                }`}
                            >
                                {tier.highlight && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                                        Most Popular
                                    </span>
                                )}
                                <h3 className="font-display text-2xl font-bold text-center mb-6">
                                    {tier.name}
                                </h3>
                                <ul className="space-y-3">
                                    {tier.benefits.map((benefit) => (
                                        <li
                                            key={benefit}
                                            className="flex items-start gap-2 text-sm"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">
                                                {benefit}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>

                {/* Current Sponsors */}
                <SponsorsSection />

                {/* Contact CTA */}
                <SectionWrapper id="sponsor-contact">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-12 text-center max-w-2xl mx-auto"
                    >
                        <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
                        <h3 className="font-display text-2xl font-bold mb-4">
                            Interested in Partnering?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            We'd love to discuss how we can work together.
                            Contact us to learn more about sponsorship
                            opportunities and custom partnership packages.
                        </p>
                        <Button variant="hero" size="lg" asChild>
                            <Link to="/contact">
                                <Mail className="w-4 h-4" />
                                Get in Touch
                            </Link>
                        </Button>
                    </motion.div>
                </SectionWrapper>
            </div>
        </Layout>
    );
};

export default Sponsors;
