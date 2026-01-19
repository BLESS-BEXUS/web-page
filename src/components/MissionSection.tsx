import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import { Target, Thermometer, Radio, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const objectives = [
    {
        icon: Target,
        title: "Primary Objective",
        description:
            "Characterize how stratospheric environmental factors impact the stability, reliability, and propagation properties of the Wi-Fi HaLow (IEEE 802.11ah) protocol in a vertical link.",
    },
    {
        icon: Thermometer,
        title: "Environmental Correlation",
        description:
            "Measure and correlate extreme temperature gradients (down to -80°C), atmospheric pressure (dropping to 5 mbar), and ionizing radiation levels with RF link performance.",
    },
    {
        icon: Radio,
        title: "RF Analysis",
        description:
            "Evaluate signal metrics including RSSI, SNR, and Packet Delivery Ratio (PDR), alongside physical layer power measurements using a logarithmic RF detector across the full altitude profile.",
    },
    {
        icon: BarChart3,
        title: "Data-Driven Insights",
        description:
            "Develop quantitative models (polynomial and random forest regression) linking environmental conditions to key performance indicators to validate sub-1GHz protocols for future High-Altitude Platform Stations (HAPS).",
    },
];

export function MissionSection() {
    return (
        <SectionWrapper id="mission">
            <SectionHeader
                badge="Our Mission"
                title="Pioneering Vertical Connectivity in the Stratosphere"
                description="BLESS aims to answer a critical question: Can the emerging Wi-Fi HaLow (IEEE 802.11ah) standard provide a reliable, low-power telemetry link capable of withstanding the extreme thermal and pressure gradients found at the edge of space?"
            />

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {objectives.map((objective, index) => (
                    <motion.div
                        key={objective.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-card-hover p-6 lg:p-8"
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                            <objective.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-display text-xl font-semibold mb-3">
                            {objective.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {objective.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
