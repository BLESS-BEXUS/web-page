import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import { motion } from "framer-motion";
import { Cpu, Database, Radio, Antenna, ArrowRight, ArrowDown } from "lucide-react";

const payloadComponents = [
  { icon: Cpu, label: "MCU", sublabel: "Control Unit" },
  { icon: Database, label: "SD Card", sublabel: "Data Logging" },
  { icon: Radio, label: "RF Detector", sublabel: "Signal Chain" },
  { icon: Antenna, label: "Radios", sublabel: "BLE + HaLow" },
];

const groundComponents = [
  { icon: Antenna, label: "Antenna", sublabel: "868 MHz Yagi" },
  { icon: Radio, label: "SDR", sublabel: "Receiver" },
  { icon: Cpu, label: "Computer", sublabel: "Data Processing" },
];

export function ArchitectureSection() {
  return (
    <SectionWrapper id="architecture" alternate>
      {/* Section intro */}
      <div className="mb-10">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">System Architecture</h2>
        <p className="text-muted-foreground max-w-2xl">A modular payload design paired with a ground-based software-defined radio receiver for comprehensive RF analysis.</p>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Architecture Diagram */}
        <div className="glass-card p-8 lg:p-12">
          {/* Payload Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="text-center mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Payload (~30 km altitude)
              </span>
            </div>
            
            <div className="glass-card bg-secondary/20 p-6 rounded-2xl border-primary/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {payloadComponents.map((comp, index) => (
                  <motion.div
                    key={comp.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center p-4 rounded-xl bg-card/50 border border-border/50"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <comp.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-medium text-sm">{comp.label}</span>
                    <span className="text-xs text-muted-foreground">{comp.sublabel}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Sensors Row */}
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {["Temperature", "Pressure", "Radiation", "Power Monitor"].map((sensor) => (
                  <span key={sensor} className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs">
                    {sensor}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RF Link Arrow */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center my-6"
          >
            <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-accent/50" />
            <div className="flex items-center gap-2 py-2 px-4 rounded-full bg-card border border-border">
              <Radio className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">RF Downlink</span>
              <ArrowDown className="w-4 h-4 text-accent" />
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-primary/50" />
          </motion.div>

          {/* Ground Station Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Ground Station
              </span>
            </div>
            
            <div className="glass-card bg-secondary/20 p-6 rounded-2xl border-accent/20">
              <div className="flex flex-wrap justify-center gap-4">
                {groundComponents.map((comp, index) => (
                  <motion.div
                    key={comp.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <comp.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <span className="font-medium text-sm block">{comp.label}</span>
                      <span className="text-xs text-muted-foreground">{comp.sublabel}</span>
                    </div>
                    {index < groundComponents.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground ml-2 hidden md:block" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Ground reception is expected up to ~10 km altitude. Above this range, the payload operates autonomously, logging all data to onboard storage for post-flight retrieval.
        </p>
      </div>
    </SectionWrapper>
  );
}
