import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import { motion } from "framer-motion";
import { CheckCircle2, Rocket, TrendingUp, Cloud, ArrowDown } from "lucide-react";

const phases = [
  {
    icon: CheckCircle2,
    title: "Pre-Flight Checks",
    altitude: "Ground",
    description: "System verification, sensor calibration, and final communication tests with ground station.",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/30",
  },
  {
    icon: Rocket,
    title: "Launch & Ascent",
    altitude: "0 → 30 km",
    description: "Active RF monitoring during rapid altitude gain. Temperature drops to -60°C, pressure approaches near-vacuum.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    icon: Cloud,
    title: "Float Phase",
    altitude: "~30 km",
    description: "Extended observation period at peak altitude. Stable conditions for comprehensive RF characterization.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
  },
  {
    icon: ArrowDown,
    title: "Descent & Recovery",
    altitude: "30 → 0 km",
    description: "Controlled descent with parachute. Data logging continues until ground recovery and data extraction.",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/30",
  },
];

export function FlightProfileSection() {
  return (
    <SectionWrapper id="flight-profile" alternate>
      <SectionHeader
        badge="Mission Timeline"
        title="Flight Profile"
        description="From pre-flight preparations to post-recovery data analysis, every phase is designed for maximum scientific return."
      />

      <div className="max-w-4xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line transform md:-translate-x-1/2" />

          {/* Phases */}
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-center mb-8 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                <div className={`w-16 h-16 rounded-2xl ${phase.bgColor} border ${phase.borderColor} flex items-center justify-center animate-pulse-glow`}>
                  <phase.icon className={`w-7 h-7 ${phase.color}`} />
                </div>
              </div>

              {/* Content Card */}
              <div className={`ml-28 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <div className="glass-card-hover p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${phase.bgColor} ${phase.color}`}>
                      {phase.altitude}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}
        </div>

        {/* Reception Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 glass-card p-6 text-center"
        >
          <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
          <p className="text-muted-foreground">
            <span className="text-foreground font-medium">Ground reception limit: ~10 km.</span>{" "}
            Beyond this altitude, the payload continues autonomous data logging until recovery.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
