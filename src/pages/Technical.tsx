import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { WhatWeFlySection } from "@/components/WhatWeFlySection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { FlightProfileSection } from "@/components/FlightProfileSection";
import { Cpu } from "lucide-react";

const Technical = () => {
    return (
        <Layout>
            <PageHeader
                badge="Technical Details"
                title="Engineering the"
                titleAccent="Mission"
                description="Dive deep into the payload architecture, subsystems, and the complete flight profile that powers our stratospheric experiment."
                icon={Cpu}
                breadcrumb={{ label: "Technical", href: "#" }}
            />
            <WhatWeFlySection />
            <ArchitectureSection />
            <FlightProfileSection />
        </Layout>
    );
};

export default Technical;
