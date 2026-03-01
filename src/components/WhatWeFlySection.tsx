import { SectionWrapper } from "./SectionWrapper";
import {
    Wifi,
    Activity,
    Zap,
    Thermometer,
    Gauge,
    Radiation,
    HardDrive,
} from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
    {
        icon: Activity,
        label: "RSSI / SNR / PDR",
        description: "Signal strength and quality metrics",
    },
    {
        icon: Zap,
        label: "TX Power & Energy",
        description: "Transmission power and consumption",
    },
    {
        icon: Thermometer,
        label: "Internal Temps",
        description: "Component thermal monitoring",
    },
    {
        icon: Gauge,
        label: "Pressure Data",
        description: "Ambient pressure readings",
    },
    {
        icon: Radiation,
        label: "Radiation Levels",
        description: "Particle and ray exposure",
    },
    {
        icon: HardDrive,
        label: "Full Telemetry",
        description: "Complete data logging suite",
    },
];

export function WhatWeFlySection() {
    return (
        <SectionWrapper id="what-we-fly">
            <div className="mb-10">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
                    Payload Subsystems
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                    A wireless experiment designed to gather comprehensive RF
                    performance data throughout the mission.
                </p>
            </div>

            <div className="max-w-5xl mx-auto">
                {/* Main payload card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-6 lg:p-8 mb-8"
                >
                    <div className="flex items-start gap-5 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                            <Wifi className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <h3 className="font-display text-xl font-semibold">
                                    Wi-Fi HaLow Transmitter
                                </h3>
                                <span className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium">
                                    868 MHz
                                </span>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                                Long-range, low-power Wi-Fi variant designed for
                                IoT. We evaluate its performance in sub-zero
                                temperatures and near-vacuum conditions during
                                stratospheric flight.
                            </p>
                        </div>
                    </div>

                    {/* Key specs */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-secondary/30 border border-border/50">
                        <div className="text-center">
                            <span className="text-2xl font-bold text-primary">868</span>
                            <span className="text-sm text-primary ml-1">MHz</span>
                            <p className="text-xs text-muted-foreground mt-1">Frequency Band</p>
                        </div>
                        <div className="text-center border-x border-border/50">
                            <span className="text-2xl font-bold text-primary">−60</span>
                            <span className="text-sm text-primary ml-1">°C</span>
                            <p className="text-xs text-muted-foreground mt-1">Min. Temperature</p>
                        </div>
                        <div className="text-center">
                            <span className="text-2xl font-bold text-primary">30</span>
                            <span className="text-sm text-primary ml-1">km</span>
                            <p className="text-xs text-muted-foreground mt-1">Target Altitude</p>
                        </div>
                    </div>
                </motion.div>

                {/* Metrics grid */}
                <div>
                    <h3 className="font-display text-lg font-semibold mb-4">
                        Logged Metrics & Telemetry
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.05,
                                }}
                                className="text-center p-4 rounded-xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-colors"
                            >
                                <metric.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                                <div className="text-sm font-medium mb-1">
                                    {metric.label}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    {metric.description}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
