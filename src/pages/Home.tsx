import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { OutcomesSection } from "@/components/OutcomesSection";

const Home = () => {
    return (
        <Layout>
            <HeroSection />
            <MissionSection />
            <OutcomesSection />
        </Layout>
    );
};

export default Home;
