import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  alternate?: boolean;
  noPadding?: boolean;
}

export function SectionWrapper({ id, children, className = "", alternate = false, noPadding = false }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 ${noPadding ? "" : "py-16 md:py-20"} ${className}`}
    >
      {/* Subtle connector gradient between sections */}
      {alternate && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent pointer-events-none" />
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative container mx-auto px-4 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({ badge, title, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-10 md:mb-12 ${centered ? "text-center max-w-3xl mx-auto" : ""}`}>
      {badge && (
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
