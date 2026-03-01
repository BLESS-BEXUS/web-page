import { SectionWrapper } from "./SectionWrapper";
import { motion } from "framer-motion";
import {
    Cpu,
    Database,
    Radio,
    Antenna,
    ArrowDown,
    Thermometer,
    Gauge,
    Radiation,
    Zap,
} from "lucide-react";

const payloadModules = [
    { icon: Cpu, label: "MCU", detail: "ESP32-S3" },
    { icon: Radio, label: "HaLow Radio", detail: "868 MHz TX" },
    { icon: Database, label: "SD Logger", detail: "Data storage" },
];

const sensors = [
    { icon: Thermometer, label: "Temperature" },
    { icon: Gauge, label: "Pressure" },
    { icon: Radiation, label: "Radiation" },
    { icon: Zap, label: "Power" },
];

const groundModules = [
    { icon: Antenna, label: "Yagi Antenna", detail: "868 MHz" },
    { icon: Radio, label: "SDR Receiver", detail: "RTL-SDR" },
    { icon: Cpu, label: "Processing", detail: "GNU Radio" },
];

export function ArchitectureSection() {
    return (
        <SectionWrapper id="architecture" alternate>
            <div className="mb-10">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
                    System Architecture
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                    A modular payload paired with a ground-based SDR receiver
                    for comprehensive RF analysis.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                {/* Horizontal layout on desktop, vertical on mobile */}
                <div className="grid lg:grid-cols-[1fr,auto,1fr] gap-6 items-center">
                    {/* Payload */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-6"
                    >
                        <div className="flex items-center gap-2 mb-5">
                            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                                Payload · ~30 km
                            </span>
                        </div>

                        {/* Core modules */}
                        <div className="space-y-3 mb-5">
                            {payloadModules.map((mod, i) => (
                                <motion.div
                                    key={mod.label}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-border/50"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <mod.icon className="w-4.5 h-4.5 text-primary" />
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium block leading-tight">
                                            {mod.label}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                            {mod.detail}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Sensors strip */}
                        <div className="flex flex-wrap gap-2">
                            {sensors.map((s) => (
                                <span
                                    key={s.label}
                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/30 text-xs text-accent"
                                >
                                    <s.icon className="w-3 h-3" />
                                    {s.label}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* RF Link connector */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex lg:flex-col items-center gap-2 py-2 lg:py-0"
                    >
                        <div className="hidden lg:block w-px h-8 bg-gradient-to-b from-primary/40 to-transparent" />
                        <div className="flex lg:flex-col items-center gap-1.5 px-3 py-2 rounded-full bg-card border border-border">
                            <Radio className="w-4 h-4 text-primary" />
                            <span className="text-xs font-medium whitespace-nowrap">
                                RF Link
                            </span>
                            <ArrowDown className="w-3.5 h-3.5 text-accent lg:rotate-0 -rotate-90" />
                        </div>
                        <div className="hidden lg:block w-px h-8 bg-gradient-to-b from-transparent to-accent/40" />
                    </motion.div>

                    {/* Ground Station */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="glass-card p-6"
                    >
                        <div className="flex items-center gap-2 mb-5">
                            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                                Ground Station
                            </span>
                        </div>

                        <div className="space-y-3">
                            {groundModules.map((mod, i) => (
                                <motion.div
                                    key={mod.label}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-border/50"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                                        <mod.icon className="w-4.5 h-4.5 text-accent" />
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium block leading-tight">
                                            {mod.label}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                            {mod.detail}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Note */}
                <p className="text-center text-sm text-muted-foreground mt-6">
                    Ground reception expected up to ~10 km. Above this, the
                    payload logs data autonomously for post-flight retrieval.
                </p>
            </div>
        </SectionWrapper>
    );
}
