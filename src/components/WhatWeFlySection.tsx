import { SectionWrapper } from "./SectionWrapper";
import {
    Wifi,
    Bluetooth,
    Activity,
    Zap,
    Thermometer,
    Gauge,
    Radiation,
    HardDrive,
    Signal,
    Radio,
} from "lucide-react";
import { motion } from "framer-motion";

const subsystems = [
    {
        id: "halow",
        title: "Wi-Fi HaLow",
        subtitle: "Long-Range IoT Protocol",
        frequency: "868 MHz",
        description:
            "Sub-GHz Wi-Fi variant optimized for IoT. We test its resilience under extreme stratospheric conditions — near-vacuum pressure, intense radiation, and temperatures as low as −60 °C.",
        icon: Wifi,
        gradient: "from-primary to-primary/60",
        glowColor: "primary",
        features: ["Low power consumption", "Long-range capability", "IoT-optimized protocol"],
    },
    {
        id: "ble",
        title: "Bluetooth LE 5.4",
        subtitle: "Short-Range Reference",
        frequency: "2.4 GHz",
        description:
            "Acts as a comparative baseline against Wi-Fi HaLow. By testing both protocols side-by-side, we can isolate frequency-dependent effects on signal propagation at altitude.",
        icon: Bluetooth,
        gradient: "from-accent to-accent/60",
        glowColor: "accent",
        features: ["2.4 GHz ISM band", "Baseline comparison", "Well-characterized protocol"],
    },
];

const metrics = [
    {
        icon: Activity,
        label: "RSSI / SNR",
        description: "Signal strength & noise ratio",
    },
    {
        icon: Signal,
        label: "PDR",
        description: "Packet delivery rate",
    },
    {
        icon: Zap,
        label: "TX Power",
        description: "Transmission energy",
    },
    {
        icon: Thermometer,
        label: "Temperature",
        description: "Internal & external",
    },
    {
        icon: Gauge,
        label: "Pressure",
        description: "Ambient barometric",
    },
    {
        icon: Radiation,
        label: "Radiation",
        description: "Particle exposure",
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
                    Two complementary wireless protocols tested side-by-side to
                    understand how extreme altitude affects RF performance.
                </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
                {/* Subsystem cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {subsystems.map((system, index) => (
                        <motion.div
                            key={system.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group relative glass-card-hover overflow-hidden"
                        >
                            {/* Top gradient bar */}
                            <div
                                className={`h-1 w-full bg-gradient-to-r ${system.gradient}`}
                            />

                            {/* Glow effect on hover */}
                            <div
                                className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-${system.glowColor}/5 blur-3xl group-hover:bg-${system.glowColor}/10 transition-all duration-500`}
                            />

                            <div className="relative p-6 lg:p-8">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-5">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${system.gradient} p-[1px]`}
                                        >
                                            <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                                                <system.icon
                                                    className={`w-7 h-7 text-${system.glowColor}`}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-display text-xl font-bold">
                                                {system.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {system.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <span
                                        className={`px-3 py-1 rounded-full bg-${system.glowColor}/10 border border-${system.glowColor}/30 text-${system.glowColor} text-sm font-bold font-display`}
                                    >
                                        {system.frequency}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                                    {system.description}
                                </p>

                                {/* Feature tags */}
                                <div className="flex flex-wrap gap-2">
                                    {system.features.map((f) => (
                                        <span
                                            key={f}
                                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-secondary/50 border border-border/50 text-xs text-muted-foreground"
                                        >
                                            <Radio className="w-3 h-3 text-primary/60" />
                                            {f}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

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
                            { value: "2", unit: "radios", label: "Active TX" },
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
                                transition={{
                                    duration: 0.3,
                                    delay: 0.5 + index * 0.05,
                                }}
                                className="group/metric glass-card p-4 text-center hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3 group-hover/metric:bg-primary/20 transition-colors">
                                    <metric.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div className="text-sm font-medium mb-0.5">
                                    {metric.label}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    {metric.description}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
