import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { TeamSection } from "@/components/TeamSection";
import { OutreachSection } from "@/components/OutreachSection";
import { Users } from "lucide-react";

const Team = () => {
    return (
        <Layout>
            <PageHeader
                badge="Our Team"
                title="The People Behind"
                titleAccent="BLESS"
                description="A multidisciplinary team of students and researchers from Universidad Francisco de Vitoria, united by a passion for aerospace innovation."
                icon={Users}
                breadcrumb={{ label: "Team", href: "#" }}
            />
            <TeamSection />
            <OutreachSection />
        </Layout>
    );
};

export default Team;
