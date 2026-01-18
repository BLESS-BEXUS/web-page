import { Layout } from "@/components/Layout";
import { MissionSection } from "@/components/MissionSection";
import { OutcomesSection } from "@/components/OutcomesSection";

const About = () => {
    return (
        <Layout>
            <div className="pt-20">
                <MissionSection />
                <OutcomesSection />
            </div>
        </Layout>
    );
};

export default About;
