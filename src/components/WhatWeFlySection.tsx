import { SectionWrapper } from "./SectionWrapper";
import {
    Wifi,
    Activity,
    Zap,
    Thermometer,
    Gauge,
    Radiation,
    HardDrive,
    Signal,
    Shield,
    Clock,
    Radio,
} from "lucide-react";
import { motion } from "framer-motion";

const specs = [
    { label: "Frequency", value: "868 MHz", detail: "Sub-GHz ISM band" },
    { label: "Standard", value: "802.11ah", detail: "Wi-Fi HaLow" },
    { label: "Range", value: "Long-range", detail: "Up to 1 km+" },
    { label: "Power", value: "Low", detail: "IoT-optimized" },
];

const capabilities = [
    { icon: Shield, label: "Radiation-hardened testing" },
    { icon: Thermometer, label: "Extreme temp. resilience (−60 °C)" },
    { icon: Clock, label: "Continuous TX during ascent" },
    { icon: Zap, label: "Low power consumption" },
];

const metrics = [
    { icon: Activity, label: "RSSI / SNR", description: "Signal strength & noise ratio" },
    { icon: Signal, label: "PDR", description: "Packet delivery rate" },
    { icon: Zap, label: "TX Power", description: "Transmission energy" },
    { icon: Thermometer, label: "Temperature", description: "Internal & external" },
    { icon: Gauge, label: "Pressure", description: "Ambient barometric" },
    { icon: Radiation, label: "Radiation", description: "Particle exposure" },
];

export function WhatWeFlySection() {
    return (
        <SectionWrapper id="what-we-fly">
            <div className="mb-10">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
                    Payload Subsystem
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                    Wi-Fi HaLow tested under extreme stratospheric conditions to
                    evaluate sub-GHz RF performance at altitude.
                </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
                {/* Hero card — Wi-Fi HaLow */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group relative glass-card-hover overflow-hidden"
                >
                    {/* Top gradient bar */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-primary via-primary/70 to-accent" />

                    {/* Glow */}
                    <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-accent/5 blur-3xl" />

                    <div className="relative p-6 lg:p-10">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                            <div className="flex items-center gap-5">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 p-[1.5px]">
                                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                                        <Wifi className="w-8 h-8 text-primary" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-display text-2xl font-bold">
                                        Wi-Fi HaLow
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Long-Range IoT Protocol — IEEE 802.11ah
                                    </p>
                                </div>
                            </div>
                            <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-lg font-bold font-display">
                                868 MHz
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                            Sub-GHz Wi-Fi variant optimized for IoT. We test its resilience under
                            extreme stratospheric conditions — near-vacuum pressure, intense
                            radiation, and temperatures as low as −60 °C. The goal is to evaluate
                            how this protocol performs where no conventional wireless link has been
                            tested before.
                        </p>

                        {/* Specs grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                            {specs.map((spec, i) => (
                                <motion.div
                                    key={spec.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.08 }}
                                    className="p-4 rounded-xl bg-secondary/40 border border-border/50 text-center"
                                >
                                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{spec.label}</span>
                                    <div className="text-lg font-bold font-display text-primary mt-1">{spec.value}</div>
                                    <span className="text-xs text-muted-foreground">{spec.detail}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Capabilities */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {capabilities.map((cap, i) => (
                                <motion.div
                                    key={cap.label}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.08 }}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/5 border border-primary/10"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                        <cap.icon className="w-4.5 h-4.5 text-primary" />
                                    </div>
                                    <span className="text-sm font-medium">{cap.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Key conditions banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="glass-card overflow-hidden"
                >
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/30">
                        {[
                            { value: "30", unit: "km", label: "Max Altitude" },
                            { value: "−60", unit: "°C", label: "Min Temp" },
                            { value: "~1", unit: "hPa", label: "Min Pressure" },
                            { value: "1", unit: "radio", label: "Active TX" },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + i * 0.08 }}
                                className="p-5 text-center"
                            >
                                <div className="flex items-baseline justify-center gap-1 mb-1">
                                    <span className="text-2xl md:text-3xl font-bold font-display gradient-text">
                                        {stat.value}
                                    </span>
                                    <span className="text-sm text-muted-foreground font-medium">
                                        {stat.unit}
                                    </span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Telemetry metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                        <HardDrive className="w-5 h-5 text-primary" />
                        Logged Telemetry
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                                className="group/metric glass-card p-4 text-center hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3 group-hover/metric:bg-primary/20 transition-colors">
                                    <metric.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div className="text-sm font-medium mb-0.5">{metric.label}</div>
                                <div className="text-xs text-muted-foreground">{metric.description}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
