import Container from "@/components/container";
import React from "react";
import WhatWeDoCard from "./WhatWeDoCard";
import SectionHeading from "@/components/SectionHeading";

const WhatWeDo = () => {
    const WhatWeDoData = [
        {
            title: "Leadership & Peace Promotion",
            description:
                "In line with Teresia’s attribute of being a peace ambassador wherever she went, the foundation identifies and supports opportunities to promote peaceful community co-existence and local leadership development.",
            imageUrl: "/images/banner/shosho.png",
        },
        {
            title: "Environment Conservation and Sustainability",
            description:
                "TWF works in areas of community engagement that support environmental conservation and sustainability. As one way to ensure its sustainability, the foundation engages in community led income generating activities.",
            imageUrl: "/images/banner/shosho.png",
        },
        {
            title: "Leadership & Peace Promotion",
            description:
                "The foundation endeavours to scout and support children from less privileged backgrounds who are gifted academically as well as those with identifiable non-academic gifts and talents To do this, the foundation undertakes a holistic view rather than the traditional, academic performance criteria.",
            imageUrl: "/images/banner/shosho.png",
        },
    ];
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
