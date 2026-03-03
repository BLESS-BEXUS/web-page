import { SectionWrapper } from "./SectionWrapper";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    Rocket,
    Cloud,
    ArrowDown,
    Radio,
    Database,
    AlertTriangle,
} from "lucide-react";

const phases = [
    {
        icon: CheckCircle2,
        title: "Pre-Flight Checks",
        altitude: "Ground",
        time: "T − 60 min",
        description:
            "System verification, sensor calibration, and final communication tests with ground station. Battery levels and SD card integrity confirmed.",
        highlights: ["Sensor calibration", "RF link test", "Battery check"],
        accentVar: "primary" as const,
    },
    {
        icon: Rocket,
        title: "Launch & Ascent",
        altitude: "0 → 30 km",
        time: "T + 0 → ~90 min",
        description:
            "Active RF monitoring during rapid altitude gain. Temperature drops to −60 °C, pressure approaches near-vacuum. Ground reception maintained up to ~10 km.",
        highlights: ["Active HaLow TX", "RSSI logging", "Temp/Pressure recording"],
        accentVar: "primary" as const,
    },
    {
        icon: Cloud,
        title: "Float Phase",
        altitude: "~30 km",
        time: "~90 → ~150 min",
        description:
            "Extended observation at peak altitude. Stable conditions for comprehensive RF characterization in near-space environment.",
        highlights: ["Peak altitude ops", "Stable telemetry", "Radiation exposure"],
        accentVar: "accent" as const,
    },
    {
        icon: ArrowDown,
        title: "Descent & Recovery",
        altitude: "30 → 0 km",
        time: "~150 → ~210 min",
        description:
            "Controlled descent with parachute. Data logging continues throughout. Ground link reacquired below ~10 km. Physical recovery and data extraction.",
        highlights: ["Parachute deploy", "Link reacquisition", "SD data extraction"],
        accentVar: "accent" as const,
    },
];

export function FlightProfileSection() {
    return (
        <SectionWrapper id="flight-profile">
            <div className="mb-10">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
                    Flight Profile
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                    From pre-flight preparations to post-recovery analysis — every
                    phase optimized for maximum scientific return.
                </p>
            </div>

            <div className="max-w-5xl mx-auto">
                {/* Phase cards — stacked vertical with connected line */}
                <div className="relative">
                    {/* Vertical connector line */}
                    <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-accent/60 z-0" />

                    <div className="space-y-4">
                        {phases.map((phase, index) => (
                            <motion.div
                                key={phase.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.12 }}
                                className="relative flex gap-5 md:gap-8"
                            >
                                {/* Timeline node */}
                                <div className="relative z-10 shrink-0 flex flex-col items-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.12 + 0.1, type: "spring" }}
                                        className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-${phase.accentVar}/10 border border-${phase.accentVar}/30 flex items-center justify-center shadow-[0_0_15px_hsl(var(--${phase.accentVar})/0.15)]`}
                                    >
                                        <phase.icon className={`w-6 h-6 md:w-7 md:h-7 text-${phase.accentVar}`} />
                                    </motion.div>
                                </div>

                                {/* Content card */}
                                <div className="flex-1 pb-2">
                                    <div className="glass-card-hover overflow-hidden">
                                        <div className={`h-1 bg-gradient-to-r from-${phase.accentVar} to-${phase.accentVar}/30`} />
                                        <div className="p-5 lg:p-6">
                                            {/* Meta row */}
                                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                                <span className={`px-2.5 py-0.5 rounded-full bg-${phase.accentVar}/10 border border-${phase.accentVar}/30 text-${phase.accentVar} text-xs font-bold font-display`}>
                                                    {phase.altitude}
                                                </span>
                                                <span className="text-xs text-muted-foreground font-mono">
                                                    {phase.time}
                                                </span>
                                            </div>

                                            <h3 className="font-display text-lg md:text-xl font-bold mb-2">
                                                {phase.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                                {phase.description}
                                            </p>

                                            {/* Highlight tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {phase.highlights.map((h) => (
                                                    <span
                                                        key={h}
                                                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-secondary/50 border border-border/50 text-xs text-muted-foreground"
                                                    >
                                                        {h}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Reception limit callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-10 glass-card overflow-hidden"
                >
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                    <div className="p-6 flex flex-col md:flex-row items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                            <Radio className="w-7 h-7 text-primary" />
                        </div>
                        <div className="text-center md:text-left">
                            <h4 className="font-display font-bold text-base mb-1">
                                Ground Reception Limit:{" "}
                                <span className="gradient-text">~10 km</span>
                            </h4>
                            <p className="text-sm text-muted-foreground max-w-xl">
                                Above this altitude, the payload operates autonomously.
                                All telemetry is continuously logged to onboard SD storage
                                for post-flight analysis and protocol characterization.
                            </p>
                        </div>
                        <div className="hidden md:flex items-center gap-3 ml-auto shrink-0">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/15">
                                <Database className="w-3.5 h-3.5 text-primary" />
                                <span className="text-xs font-medium text-primary">SD Logging</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/5 border border-accent/15">
                                <AlertTriangle className="w-3.5 h-3.5 text-accent" />
                                <span className="text-xs font-medium text-accent">Autonomous</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
