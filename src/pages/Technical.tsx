import { Layout } from "@/components/Layout";
import { WhatWeFlySection } from "@/components/WhatWeFlySection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { FlightProfileSection } from "@/components/FlightProfileSection";

const Technical = () => {
    return (
        <Layout>
            <div className="pt-20">
                <WhatWeFlySection />
                <ArchitectureSection />
                <FlightProfileSection />
            </div>
        </Layout>
    );
};

export default Technical;
