import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, FileText, Image, File } from "lucide-react";

const downloads = [
  {
    icon: Image,
    title: "Download Logo",
    description: "Official BLESS logo in various formats",
    format: "SVG, PNG, AI",
  },
  {
    icon: FileText,
    title: "Download One-Pager",
    description: "Mission summary document",
    format: "PDF",
  },
  {
    icon: File,
    title: "Media Photos",
    description: "High-resolution images for press",
    format: "ZIP (JPG)",
  },
];

export function PressKitSection() {
  return (
    <SectionWrapper id="press-kit">
      <SectionHeader
        badge="For Media"
        title="Press Kit"
        description="Download official BLESS materials for press coverage, publications, and educational content."
      />

      <div className="max-w-3xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-4">
          {downloads.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card-hover p-6 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-display font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground mb-1">{item.description}</p>
              <span className="text-xs text-primary">{item.format}</span>
              
              <Button variant="outline" size="sm" className="mt-4 w-full">
                <Download className="w-4 h-4" />
                Download
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
