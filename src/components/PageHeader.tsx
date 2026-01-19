import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, LucideIcon } from "lucide-react";

interface PageHeaderProps {
    badge: string;
    title: string;
    titleAccent?: string;
    description: string;
    icon?: LucideIcon;
    breadcrumb?: {
        label: string;
        href: string;
    };
}

export function PageHeader({
    badge,
    title,
    titleAccent,
    description,
    icon: Icon,
    breadcrumb,
}: PageHeaderProps) {
    return (
        <section className="relative pt-28 pb-8 md:pt-32 md:pb-12 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 stars-bg opacity-10" />
            <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
            <div className="relative container mx-auto px-4 lg:px-8">
                {/* Breadcrumb */}
                {breadcrumb && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4"
                    >
                        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Link
                                to="/"
                                className="hover:text-primary transition-colors"
                            >
                                Home
                            </Link>
                            <ChevronRight className="w-4 h-4" />
                            {breadcrumb.href !== "#" ? (
                                <Link
                                    to={breadcrumb.href}
                                    className="hover:text-primary transition-colors"
                                >
                                    {breadcrumb.label}
                                </Link>
                            ) : (
                                <span className="text-foreground">
                                    {breadcrumb.label}
                                </span>
                            )}
                        </nav>
                    </motion.div>
                )}

                <div className="max-w-3xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
                            {Icon && <Icon className="w-4 h-4" />}
                            {badge}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                    >
                        {title}
                        {titleAccent && (
                            <>
                                {" "}
                                <span className="gradient-text">
                                    {titleAccent}
                                </span>
                            </>
                        )}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl"
                    >
                        {description}
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
