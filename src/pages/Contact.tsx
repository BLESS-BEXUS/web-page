import { Layout } from "@/components/Layout";
import { SponsorsSection } from "@/components/SponsorsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { PressKitSection } from "@/components/PressKitSection";

const Contact = () => {
    return (
        <Layout>
            <div className="pt-20">
                <SponsorsSection />
                <FAQSection />
                <ContactSection />
                <PressKitSection />
            </div>
        </Layout>
    );
};

export default Contact;
