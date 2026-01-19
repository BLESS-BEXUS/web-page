import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import { Wifi, Bluetooth, Activity, Zap, Thermometer, Gauge, Radiation, HardDrive } from "lucide-react";
import { motion } from "framer-motion";
import techPattern from "@/assets/tech-pattern.jpg";

const subsystems = [
  {
    id: "halow",
    title: "Wi-Fi HaLow Transmitter",
    frequency: "868 MHz",
    description: "Long-range, low-power Wi-Fi variant designed for IoT. We evaluate its performance in sub-zero temperatures and near-vacuum conditions.",
    icon: Wifi,
    color: "primary",
  },
  {
    id: "ble",
    title: "BLE Intra-Payload Link",
    frequency: "2.402 GHz",
    description: "Bluetooth Low Energy for internal payload communication. Testing stability and reliability under thermal cycling and radiation exposure.",
    icon: Bluetooth,
    color: "accent",
  },
];

const metrics = [
  { icon: Activity, label: "RSSI / SNR / PDR", description: "Signal strength and quality metrics" },
  { icon: Zap, label: "TX Power & Energy", description: "Transmission power and consumption" },
  { icon: Thermometer, label: "Internal Temps", description: "Component thermal monitoring" },
  { icon: Gauge, label: "Pressure Data", description: "Ambient pressure readings" },
  { icon: Radiation, label: "Radiation Levels", description: "Particle and ray exposure" },
  { icon: HardDrive, label: "Full Telemetry", description: "Complete data logging suite" },
];

export function WhatWeFlySection() {
  return (
    <SectionWrapper id="what-we-fly">
      {/* Section intro */}
      <div className="mb-10">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">Payload Subsystems</h2>
        <p className="text-muted-foreground max-w-2xl">Two complementary wireless systems designed to gather comprehensive RF performance data throughout the mission.</p>
      </div>

      {/* Subsystems */}
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
        {subsystems.map((system, index) => (
          <motion.div
            key={system.id}
            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card-hover overflow-hidden"
          >
            <div className="relative h-32 overflow-hidden">
              <img
                src={techPattern}
                alt=""
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card" />
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl bg-${system.color}/10 border border-${system.color}/30 flex items-center justify-center`}>
                  <system.icon className={`w-6 h-6 text-${system.color}`} />
                </div>
                <div>
                  <span className="text-xs font-medium text-primary">{system.frequency}</span>
                  <h3 className="font-display text-xl font-semibold">{system.title}</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground leading-relaxed">
                {system.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Metrics Grid */}
      <div className="glass-card p-6 lg:p-8">
        <h3 className="font-display text-xl font-semibold mb-6 text-center">
          Logged Metrics & Telemetry
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="text-center p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
            >
              <metric.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium mb-1">{metric.label}</div>
              <div className="text-xs text-muted-foreground">{metric.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
