import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import { Target, Thermometer, Radio, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const objectives = [
  {
    icon: Target,
    title: "Primary Objective",
    description: "Characterize how stratospheric environmental factors impact the stability, reliability, and signal properties of BLE and Wi-Fi HaLow links.",
  },
  {
    icon: Thermometer,
    title: "Environmental Correlation",
    description: "Measure and correlate temperature (down to -60°C), pressure (near-vacuum), and radiation levels with RF link performance.",
  },
  {
    icon: Radio,
    title: "RF Analysis",
    description: "Evaluate signal metrics including RSSI, SNR, and Packet Delivery Rate across the full altitude profile.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Develop quantitative models linking environmental conditions to key performance indicators for near-space IoT applications.",
  },
];

export function MissionSection() {
  return (
    <SectionWrapper id="mission">
      <SectionHeader
        badge="Our Mission"
        title="Pushing RF Boundaries to the Edge of Space"
        description="BLESS aims to answer a critical question: How do modern low-power wireless technologies perform when exposed to the harsh conditions of the stratosphere?"
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
