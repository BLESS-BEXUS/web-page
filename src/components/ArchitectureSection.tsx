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
    Waves,
    Monitor,
} from "lucide-react";

export function ArchitectureSection() {
    return (
        <SectionWrapper id="architecture" alternate>
            <div className="mb-10">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
                    System Architecture
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                    End-to-end data pipeline from stratospheric payload to
                    ground-based analysis.
                </p>
            </div>

            <div className="max-w-3xl mx-auto">
                {/* ── PAYLOAD BLOCK ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Glow behind card */}
                    <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />

                    <div className="relative glass-card overflow-hidden">
                        {/* Top bar */}
                        <div className="h-1 bg-gradient-to-r from-primary via-primary/60 to-accent" />

                        <div className="p-6 lg:p-8">
                            {/* Label */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2.5">
                                    <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                                    <span className="font-display text-sm font-bold text-primary uppercase tracking-wider">
                                        Payload
                                    </span>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium">
                                    ~30 km altitude
                                </span>
                            </div>

                            {/* Core modules row */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                                {[
                                    { icon: Cpu, label: "MCU", detail: "ESP32-S3", color: "primary" },
                                    { icon: Radio, label: "HaLow TX", detail: "868 MHz", color: "primary" },
                                    { icon: Waves, label: "BLE 5.4", detail: "2.4 GHz", color: "accent" },
                                    { icon: Database, label: "SD Logger", detail: "FAT32", color: "primary" },
                                ].map((mod, i) => (
                                    <motion.div
                                        key={mod.label}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 + i * 0.08 }}
                                        className="relative group flex flex-col items-center p-4 rounded-xl bg-secondary/40 border border-border/50 hover:border-primary/30 transition-all duration-300"
                                    >
                                        <div className={`w-11 h-11 rounded-xl bg-${mod.color}/10 border border-${mod.color}/20 flex items-center justify-center mb-2.5`}>
                                            <mod.icon className={`w-5 h-5 text-${mod.color}`} />
                                        </div>
                                        <span className="text-sm font-semibold">{mod.label}</span>
                                        <span className="text-xs text-muted-foreground">{mod.detail}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Sensors strip */}
                            <div className="flex flex-wrap justify-center gap-2">
                                {[
                                    { icon: Thermometer, label: "Temp" },
                                    { icon: Gauge, label: "Pressure" },
                                    { icon: Radiation, label: "Radiation" },
                                    { icon: Zap, label: "Power Mon." },
                                ].map((s) => (
                                    <span
                                        key={s.label}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/8 border border-accent/20 text-xs text-accent font-medium"
                                    >
                                        <s.icon className="w-3.5 h-3.5" />
                                        {s.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ── RF LINK ── */}
                <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="flex flex-col items-center py-2"
                >
                    <div className="w-px h-10 bg-gradient-to-b from-primary/50 to-primary/20" />
                    <div className="relative my-1">
                        <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full" />
                        <div className="relative flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border-primary/20">
                            <Radio className="w-4 h-4 text-primary animate-pulse" />
                            <div className="text-center">
                                <span className="text-xs font-bold text-primary block">RF Downlink</span>
                                <span className="text-[10px] text-muted-foreground">868 MHz + 2.4 GHz</span>
                            </div>
                            <ArrowDown className="w-4 h-4 text-accent" />
                        </div>
                    </div>
                    <div className="w-px h-10 bg-gradient-to-b from-accent/20 to-accent/50" />
                </motion.div>

                {/* ── GROUND STATION BLOCK ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl" />

                    <div className="relative glass-card overflow-hidden">
                        <div className="h-1 bg-gradient-to-r from-accent via-accent/60 to-primary" />

                        <div className="p-6 lg:p-8">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2.5">
                                    <span className="w-3 h-3 rounded-full bg-accent" />
                                    <span className="font-display text-sm font-bold text-accent uppercase tracking-wider">
                                        Ground Station
                                    </span>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-medium">
                                    Sea level
                                </span>
                            </div>

                            {/* Ground pipeline - horizontal flow */}
                            <div className="flex flex-col md:flex-row items-stretch gap-3">
                                {[
                                    { icon: Antenna, label: "Yagi Antenna", detail: "868 MHz directional" },
                                    { icon: Radio, label: "SDR Receiver", detail: "RTL-SDR v3" },
                                    { icon: Monitor, label: "GNU Radio", detail: "Signal processing" },
                                    { icon: Database, label: "Analysis", detail: "Post-flight data" },
                                ].map((mod, i, arr) => (
                                    <div key={mod.label} className="flex items-center gap-3 flex-1">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + i * 0.1 }}
                                            className="flex-1 flex flex-col items-center p-4 rounded-xl bg-secondary/40 border border-border/50 hover:border-accent/30 transition-all duration-300"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-2">
                                                <mod.icon className="w-5 h-5 text-accent" />
                                            </div>
                                            <span className="text-sm font-semibold text-center">{mod.label}</span>
                                            <span className="text-xs text-muted-foreground text-center">{mod.detail}</span>
                                        </motion.div>
                                        {i < arr.length - 1 && (
                                            <div className="hidden md:flex items-center">
                                                <div className="w-4 h-px bg-accent/30" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Reception note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center text-sm text-muted-foreground mt-8 max-w-lg mx-auto"
                >
                    <span className="text-foreground font-medium">Ground reception limit: ~10 km.</span>{" "}
                    Above this altitude, the payload operates autonomously and logs all data to onboard storage.
                </motion.p>
            </div>
        </SectionWrapper>
    );
}
