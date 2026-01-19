import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { PressKitSection } from "@/components/PressKitSection";
import { MessageSquare } from "lucide-react";

const Contact = () => {
    return (
        <Layout>
            <PageHeader
                badge="Get in Touch"
                title="Contact &"
                titleAccent="Resources"
                description="Have questions about BLESS? Want to collaborate or sponsor our mission? Find everything you need to connect with our team."
                icon={MessageSquare}
                breadcrumb={{ label: "Contact", href: "#" }}
            />
            <ContactSection />
            <FAQSection />
            <PressKitSection />
        </Layout>
    );
};

export default Contact;
