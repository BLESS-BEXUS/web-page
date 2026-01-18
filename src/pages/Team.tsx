import { Layout } from "@/components/Layout";
import { TeamSection } from "@/components/TeamSection";
import { OutreachSection } from "@/components/OutreachSection";

const Team = () => {
    return (
        <Layout>
            <div className="pt-20">
                <TeamSection />
                <OutreachSection />
            </div>
        </Layout>
    );
};

export default Team;
