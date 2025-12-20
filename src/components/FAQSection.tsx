import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why the stratosphere?",
    answer: "The stratosphere (15-50 km altitude) offers a unique near-space environment with extreme conditions: temperatures as low as -60°C, near-vacuum pressures, and increased radiation. These conditions let us stress-test wireless technologies in ways impossible on the ground, providing insights valuable for aerospace IoT, HAPS (High-Altitude Platform Systems), and future Mars communications.",
  },
  {
    question: "What frequencies are used?",
    answer: "We operate two distinct RF links: Wi-Fi HaLow (IEEE 802.11ah) at 868 MHz for long-range downlink, and Bluetooth Low Energy (BLE) at 2.402 GHz for intra-payload communication. These frequencies were chosen for their relevance to modern IoT applications and their contrasting propagation characteristics.",
  },
  {
    question: "Is an uplink required?",
    answer: "No uplink is required for our experiment. The payload operates autonomously throughout the flight, logging all data to onboard SD storage. This design simplifies the ground segment and ensures data collection continues even when RF reception is lost at higher altitudes (above ~10 km).",
  },
  {
    question: "How is data stored and retrieved?",
    answer: "All telemetry and RF measurements are logged to redundant industrial-grade SD cards rated for extreme temperatures. After the balloon descends and is recovered, we physically retrieve the payload and extract the data for analysis. Critical metrics are also downlinked in real-time while ground reception is possible.",
  },
  {
    question: "What KPIs are you measuring?",
    answer: "Key Performance Indicators include: Received Signal Strength Indicator (RSSI), Signal-to-Noise Ratio (SNR), Packet Delivery Rate (PDR), transmission power levels, energy consumption per packet, bit error rates, and link stability metrics. These are correlated with environmental measurements (temperature, pressure, radiation dose).",
  },
  {
    question: "How do you correlate environment and RF performance?",
    answer: "We synchronously log environmental sensors and RF metrics at high frequency (1 Hz for environmental, per-packet for RF). Post-flight analysis uses statistical methods and machine learning to identify correlations and build predictive models linking specific environmental conditions to observed performance changes.",
  },
  {
    question: "What is BEXUS?",
    answer: "BEXUS (Balloon Experiments for University Students) is a programme by the German Aerospace Center (DLR), the Swedish National Space Agency (SNSA), and ESA Education. It provides university students the opportunity to fly experiments on stratospheric balloons launched from Esrange Space Center in Sweden.",
  },
  {
    question: "When and where will the launch take place?",
    answer: "The BEXUS campaign takes place at Esrange Space Center near Kiruna, Sweden. The exact launch date depends on weather conditions and campaign scheduling, typically occurring between September and November. We'll share real-time updates on our social media channels during the campaign.",
  },
];

export function FAQSection() {
  return (
    <SectionWrapper id="faq">
      <SectionHeader
        badge="Questions & Answers"
        title="Frequently Asked Questions"
        description="Everything you need to know about the BLESS experiment."
      />

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card border-border/50 rounded-xl px-6 data-[state=open]:ring-1 data-[state=open]:ring-primary/30"
            >
              <AccordionTrigger className="text-left font-display font-semibold hover:text-primary transition-colors py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
