import Container from "@/components/container";
import React from "react";
import WhatWeDoCard from "./WhatWeDoCard";
import SectionHeading from "@/components/SectionHeading";
import { WhatWeDoData } from "@/lib/data";

const WhatWeDo = () => {
    return (
        <section className="py-10">
            <Container>
                <SectionHeading title="What We Do" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {WhatWeDoData.map((item, index) => (
                        <WhatWeDoCard
                            title={item.title}
                            description={item.description}
                            imageUrl={item.imageUrl}
                            key={index}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default WhatWeDo;
