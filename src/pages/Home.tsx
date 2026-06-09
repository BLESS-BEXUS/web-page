import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { OutcomesSection } from "@/components/OutcomesSection";
import { RexusBexusSection } from "@/components/RexusBexusSection";

const Home = () => {
    return (
        <Layout>
            <HeroSection />
            <MissionSection />
            <RexusBexusSection />
            <OutcomesSection />
        </Layout>
    );
};

export default Home;
