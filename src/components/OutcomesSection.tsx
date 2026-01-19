import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import { motion } from "framer-motion";
import { LineChart, CheckSquare, Lightbulb } from "lucide-react";

const outcomes = [
  {
    icon: LineChart,
    title: "Quantitative Model",
    description: "Develop a data-driven model (utilizing polynomial and random forest regression) correlating stratospheric environmental parameters (temperature down to -80°C, pressure, and radiation) with RF link performance metrics (RSSI, SNR, PDR).",
    highlight: "Environment → KPI mapping",
  },
  {
    icon: CheckSquare,
    title: "Hypothesis Validation",
    description: "Test and validate our hypotheses about Wi-Fi HaLow (IEEE 802.11ah) behavior under stratospheric conditions, specifically confirming theoretical Free Space Path Loss (FSPL) models and assessing hardware resilience in the European 863–868 MHz band.",
    highlight: "Scientific verification",
  },
  {
    icon: Lightbulb,
    title: "Design Recommendations",
    description: "Produce practical engineering guidelines for deploying sub-1GHz protocols in High-Altitude Platform Stations (HAPS) and future spacecraft, validating their potential to reduce cabling weight and energy footprints in aerospace design.",
    highlight: "Actionable insights",
  },
];

export function OutcomesSection() {
  return (
    <SectionWrapper id="outcomes">
      <SectionHeader
        badge="Scientific Goals"
        title="Expected Outcomes"
        description="Our mission will deliver tangible results that advance the field of near-space wireless communication."
      />

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {outcomes.map((outcome, index) => (
          <motion.div
            key={outcome.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card-hover p-6 lg:p-8 relative overflow-hidden group"
          >
            {/* Glow effect on hover */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                <outcome.icon className="w-7 h-7 text-primary" />
              </div>

              <span className="inline-block px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium mb-3">
                {outcome.highlight}
              </span>

              <h3 className="font-display text-xl font-semibold mb-3">
                {outcome.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {outcome.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
