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
    Wifi,
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

            {/* Main layout: altitude scale + diagram */}
            <div className="max-w-4xl mx-auto flex gap-6">
                {/* ── ALTITUDE SCALE (left) ── */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="hidden md:flex flex-col items-center pt-8 pb-8 shrink-0"
                >
                    <span className="text-xs font-bold font-display text-primary mb-2">~30 km</span>
                    <div className="flex-1 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-accent/60 relative">
                        {/* Animated pulse dot */}
                        <motion.div
                            className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]"
                            animate={{ top: ["0%", "100%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                    <span className="text-xs font-bold font-display text-accent mt-2">0 km</span>
                </motion.div>

                {/* ── DIAGRAM COLUMN ── */}
                <div className="flex-1 space-y-0">
                    {/* ── PAYLOAD BLOCK ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />

                        <div className="relative glass-card overflow-hidden">
                            <div className="h-1.5 bg-gradient-to-r from-primary via-primary/60 to-accent" />

                            <div className="p-6 lg:p-8">
                                {/* Label */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2.5">
                                        <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                                        <span className="font-display text-sm font-bold text-primary uppercase tracking-wider">
                                            Stratosphere — Payload
                                        </span>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium">
                                        ~30 km altitude
                                    </span>
                                </div>

                                {/* Core modules */}
                                <div className="grid grid-cols-3 gap-3 mb-5">
                                    {[
                                        { icon: Cpu, label: "MCU", detail: "ESP32-S3" },
                                        { icon: Wifi, label: "HaLow TX", detail: "868 MHz" },
                                        { icon: Database, label: "SD Logger", detail: "FAT32" },
                                    ].map((mod, i) => (
                                        <motion.div
                                            key={mod.label}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 + i * 0.08 }}
                                            className="relative group flex flex-col items-center p-5 rounded-xl bg-secondary/40 border border-border/50 hover:border-primary/30 transition-all duration-300"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                                                <mod.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <span className="text-sm font-bold">{mod.label}</span>
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
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/5 border border-accent/20 text-xs text-accent font-medium"
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
                        className="flex flex-col items-center py-1"
                    >
                        {/* Dashed animated line top */}
                        <div className="w-px h-8 border-l-2 border-dashed border-primary/30" />

                        {/* Signal pulses */}
                        <div className="relative my-1">
                            <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full" />
                            <motion.div
                                className="relative flex items-center gap-3 px-6 py-3 rounded-full glass-card border-primary/30 border"
                                animate={{ boxShadow: ["0 0 15px hsl(var(--primary) / 0.1)", "0 0 25px hsl(var(--primary) / 0.25)", "0 0 15px hsl(var(--primary) / 0.1)"] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Radio className="w-5 h-5 text-primary animate-pulse" />
                                <div className="text-center">
                                    <span className="text-sm font-bold text-primary block font-display">RF Downlink</span>
                                    <span className="text-[11px] text-muted-foreground">868 MHz — Wi-Fi HaLow</span>
                                </div>
                                <ArrowDown className="w-5 h-5 text-accent" />
                            </motion.div>
                        </div>

                        {/* Dashed animated line bottom */}
                        <div className="w-px h-8 border-l-2 border-dashed border-accent/30" />
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
                            <div className="h-1.5 bg-gradient-to-r from-accent via-accent/60 to-primary" />

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

                                {/* Ground pipeline — horizontal flow */}
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
                                                className="flex-1 flex flex-col items-center p-5 rounded-xl bg-secondary/40 border border-border/50 hover:border-accent/30 transition-all duration-300 group"
                                            >
                                                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-2.5 group-hover:bg-accent/20 transition-colors">
                                                    <mod.icon className="w-5 h-5 text-accent" />
                                                </div>
                                                <span className="text-sm font-bold text-center">{mod.label}</span>
                                                <span className="text-xs text-muted-foreground text-center">{mod.detail}</span>
                                            </motion.div>
                                            {i < arr.length - 1 && (
                                                <div className="hidden md:flex items-center gap-0.5">
                                                    <div className="w-3 h-px bg-accent/30" />
                                                    <motion.div
                                                        className="w-2 h-2 rounded-full bg-accent/50"
                                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                                                    />
                                                    <div className="w-3 h-px bg-accent/30" />
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
            </div>
        </SectionWrapper>
    );
}
