import { Layout } from "@/components/Layout";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { PressKitSection } from "@/components/PressKitSection";

const Contact = () => {
    return (
        <Layout>
            <div className="pt-20">
                <ContactSection />
                <FAQSection />
                <PressKitSection />
            </div>
        </Layout>
    );
};

export default Contact;
