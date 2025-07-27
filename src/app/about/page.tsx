import React from "react";
import PageHeader from "../components/Layout/PageHeader/PageHeader"; // Assuming this component exists
import { Card } from "@/components/ui/card"; // Assuming this component exists
import Image from "next/image"; // Import the Next.js Image component
import { Separator } from "@/components/ui/separator";

const AboutPage = () => {
    // Helper components for consistent styling
    const Heading = ({ children }: { children: React.ReactNode }) => (
        <h2 className="text-3xl font-bold text-gray-800 mb-4 sm:text-4xl text-center md:text-left">
            {children}
        </h2>
    );
    const SubHeading = ({ children }: { children: React.ReactNode }) => (
        <h3 className="text-2xl font-semibold text-gray-700 mb-3 mt-6 sm:text-2xl text-center md:text-left">
            {children}
        </h3>
    );
    const Paragraph = ({ children }: { children: React.ReactNode }) => (
        <p className="text-lg text-gray-700 leading-relaxed mb-4">{children}</p>
    );
    const Blockquote = ({ children }: { children: React.ReactNode }) => (
        <blockquote className="border-l-4 border-emerald-500 pl-4 py-2 italic text-gray-600 my-4 bg-emerald-50 rounded-r-md">
            {children}
        </blockquote>
    );

    // New reusable ContentSection component
    const ContentSection = ({
        heading,
        imageUrl,
        imageAlt,
        imagePosition = "right", // Default to right
        children,
    }: {
        heading: string;
        imageUrl?: string;
        imageAlt?: string;
        imagePosition?: "left" | "right";
        children: React.ReactNode;
    }) => {
        const imageContent = imageUrl && imageAlt && (
            <div className="md:w-1/3 flex justify-center">
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    width={400} // Placeholder width
                    height={300} // Placeholder height
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-lg shadow-md w-full h-auto object-cover aspect-video md:aspect-square"
                />
            </div>
        );

        const textContent = (
            <div className={imageUrl ? "md:w-2/3" : "w-full"}>{children}</div>
        );

        return (
            <div className="">
                <Heading>{heading}</Heading>
                <div
                    className={`flex flex-col gap-8 ${
                        imagePosition === "left"
                            ? "md:flex-row"
                            : "md:flex-row-reverse"
                    } items-start`}
                >
                    {imageContent}
                    {textContent}
                </div>
            </div>
        );
    };

    return (
        <>
            {/* PageHeader component - assuming it handles title and subtitle */}
            <PageHeader
                title="About Us"
                subtitle="Learn more about our mission and values"
            />

            <section className="container mx-auto px-4 py-8  space-y-12">
                {/* Who We Are Section using ContentSection */}
                <ContentSection
                    heading="Who We Are"
                    imageUrl="/logo-symbol.png"
                    imageAlt="TWF Mission"
                    imagePosition="right"
                >
                    <Paragraph>
                        The Teresia Waihuini Foundation (TWF) was established as
                        a heartfelt tribute to our beloved Matriarch, Teresia
                        Waihuini. Her family, deeply inspired by her life of
                        service and dedication, founded TWF to perpetuate her
                        legacy by actively engaging in community development and
                        support.
                    </Paragraph>
                    <Paragraph>
                        Our foundation is built upon four core pillars, guiding
                        our efforts to create lasting positive change:
                    </Paragraph>
                    <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 pl-4">
                        <li>
                            <strong>Education:</strong> Empowering individuals
                            through access to learning opportunities.
                        </li>
                        <li>
                            <strong>Environment:</strong> Promoting
                            sustainability and conservation for a healthier
                            planet.
                        </li>
                        <li>
                            <strong>Leadership and Development:</strong>{" "}
                            Fostering growth and capacity within communities.
                        </li>
                        <li>
                            <strong>Healthcare and Community Wellbeing:</strong>{" "}
                            Addressing health needs and enhancing overall
                            community welfare.
                        </li>
                    </ul>
                    <Paragraph>
                        We are committed to embodying Teresia Waihuini's spirit
                        of compassion and service in every initiative we
                        undertake.
                    </Paragraph>
                </ContentSection>

                {/* Our History Section */}
                <Separator className="my-8" />
                <div className="space-y-8">
                    <div>
                        <Heading>Our History</Heading>
                        <Paragraph>
                            The journey of the Teresia Waihuini Foundation is
                            marked by consistent dedication and impactful
                            activities:
                        </Paragraph>
                    </div>

                    {/* Launch of TWF - August 2021 using ContentSection */}
                    <ContentSection
                        heading="Launch of TWF - August 2021"
                        imageUrl="/images/about-page/2021_launch.jpg" // Replace with actual image URL
                        imageAlt="TWF Launch Event"
                        imagePosition="right" // Example: Image on the right
                    >
                        <Paragraph>
                            The Teresia Waihuini Foundation was officially
                            launched on <strong>August 4th, 2021</strong>. This
                            significant event brought together Teresia's family,
                            friends, and members of the local church where she
                            had served as chairperson. At the launch, CEO Madam
                            Nancy Warima and Chairman Mr. P.J. Kuria announced
                            the foundation's initial focus on Education,
                            Environment, and Leadership & Development.
                        </Paragraph>
                        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 pl-4 mb-4">
                            <li>
                                <strong>Education Pillar Launched:</strong> Two
                                four-year full scholarships were announced for a
                                deserving boy and girl from Mathioya
                                Constituency, selected through a competitive
                                process.
                            </li>
                            <li>
                                <strong>Environment Pillar Launched:</strong>{" "}
                                Over 1000 Hass Avocado plant seedlings were
                                donated to all attendees, marking the beginning
                                of our environmental conservation efforts.
                            </li>
                        </ul>
                        <Paragraph>
                            The launch was graced by{" "}
                            <strong>Bishop Dr. Timothy Gichere</strong> of ACK
                            Mt Kenya Central as the chief guest, alongside the
                            local vicar, <strong>Rev. Filex Mwangi</strong>,
                            both offering blessings and commendations for the
                            foundation's vision.
                        </Paragraph>
                    </ContentSection>

                    {/* 1st Anniversary Activities – August 2022 using ContentSection */}
                    <ContentSection
                        heading="1st Anniversary Activities – August 2022"
                        imageUrl="/images/about-page/1_ann.jpeg"
                        imageAlt="1st Anniversary Activities"
                        imagePosition="left" // Example: Image on the left
                    >
                        <Paragraph>
                            To mark our first anniversary, the foundation
                            actively participated in local parish church
                            activities. Our support included:
                        </Paragraph>
                        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 pl-4 mb-4">
                            <li>
                                <strong>Community Development:</strong>{" "}
                                Contributing to the rehabilitation of the Vicar
                                house at the local parish church.
                            </li>
                            <li>
                                <strong>Women's Empowerment:</strong> Supporting
                                the local parish women's group at their annual
                                Talent Sunday.
                            </li>
                            <li>
                                <strong>Environmental Continuation:</strong>{" "}
                                Donating over 500 Hass Avocado seedlings to
                                attendees, reinforcing our commitment to
                                environmental protection.
                            </li>
                            <li>
                                <strong>Education Follow-up:</strong> Meeting
                                with and assessing the progress of our two
                                scholarship beneficiaries, ensuring their
                                continued academic success.
                            </li>
                        </ul>
                        <Paragraph>
                            The local parish vicar expressed profound gratitude
                            for the foundation's dedication to God's people,
                            echoing Teresia's aspirations.
                        </Paragraph>
                    </ContentSection>

                    {/* 2nd Anniversary Activities – August 2023 using ContentSection */}
                    <ContentSection
                        heading="2nd Anniversary Activities – August 2023"
                        imageUrl="/images/about-page/2_ann.jpeg"
                        imageAlt="2nd Anniversary Activities"
                        imagePosition="right" // Example: Image on the right
                    >
                        <Paragraph>
                            In alignment with Teresia Waihuini's passion for
                            local church development and supporting women's
                            group activities, the foundation committed to an
                            annual engagement with the local churches' women's
                            group during their 'Talanda' (Talent) Sunday.
                        </Paragraph>
                        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 pl-4 mb-4">
                            <li>
                                <strong>Church and Community Support:</strong>{" "}
                                Members of the foundation joined St. Peter's
                                Mutunguru ACK church for their service and
                                participated in a fundraising activity to
                                support the women's group.
                            </li>
                            <li>
                                <strong>Environmental Commitment:</strong>{" "}
                                Another 500 Avocado Hass seedlings were donated,
                                further strengthening the Environment protection
                                and conservation pillar.
                            </li>
                        </ul>
                    </ContentSection>

                    {/* 3rd Anniversary Activities – August 2024 using ContentSection */}
                    <ContentSection
                        heading="3rd Anniversary Activities – August 2024"
                        imageUrl="/images/about-page/3_ann.jpeg"
                        imageAlt="3rd Anniversary Activities"
                        imagePosition="left" // Example: Image on the left
                    >
                        <Paragraph>
                            Our third anniversary marked the formal activation
                            of our fourth pillar:{" "}
                            <strong>Healthcare and Community Wellbeing</strong>.
                        </Paragraph>
                        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 pl-4">
                            <li>
                                <strong>Healthcare Initiative:</strong>{" "}
                                Foundation members visited Ms. Eunice Kaguma, a
                                close relative suffering from debilitating
                                diabetes and severe peripheral neuropathy,
                                providing support to her and her family in
                                Nakuru. This initiative underscored our
                                commitment to caring for the less fortunate and
                                addressing critical health needs within the
                                community.
                            </li>
                        </ul>
                    </ContentSection>
                </div>

                {/* Key Testimonials Section (remains separate as it doesn't fit the image pattern) */}
                <Card className="p-6 md:p-8 shadow-lg rounded-xl bg-white">
                    <Heading>Key Testimonials</Heading>
                    <Paragraph>
                        Throughout our journey, the Teresia Waihuini Foundation
                        has been blessed with heartfelt appreciation from those
                        we've touched:
                    </Paragraph>

                    <Blockquote>
                        &ldquo;…. Dear God, we come to you full of gratitude for
                        the life that your servant Teresia lived, life dedicated
                        to serving you and your people. Thank you for the vision
                        and burden you have placed in her family to keep her
                        legacy alive. May you grant them all they need to keep
                        serving you…&rdquo;
                        <br />
                        <br />
                        <span className="font-semibold text-gray-700">
                            - Bishop Dr. Timothy Gichere (2021 Launch)
                        </span>
                    </Blockquote>

                    <Blockquote>
                        &ldquo;…mwathani cuthiriria woone wendo uria family ya
                        ndungata yaku monanitie, thie na mbere kumarathima, reke
                        mwathani ngooro ciao ciikarage na umiriria waaku makiria
                        riria manyitwo ni ihooru ria mami wao. Reke maikarage
                        makwirigiriire hiingo ciothe…&rdquo;
                        <br />
                        <br />
                        <span className="font-semibold text-gray-700">
                            - Rev. Filex Mwangi (2021 Launch)
                        </span>
                    </Blockquote>

                    <Blockquote>
                        &ldquo;….. may the almighty keep blessing the family of
                        the late Teresia, for you have truly lived up to her
                        aspirations, that of serving God and His people. A task
                        you have taken to heart and with admirable zeal. May you
                        truly never lack in all the good things. Mungu abariki
                        nyinyi sana…&rdquo;
                        <br />
                        <br />
                        <span className="font-semibold text-gray-700">
                            - Local Parish Vicar (2022 Anniversary)
                        </span>
                    </Blockquote>

                    <Blockquote>
                        &ldquo;….. we came to meet you today to share our
                        deepest appreciation, for supporting our daughter’s
                        education. Without your help and that of God, we do not
                        know where we would have turned to. In honour of what
                        you have done, xxx promises never to let you down… Ngai
                        amurathime&rdquo;
                        <br />
                        <br />
                        <span className="font-semibold text-gray-700">
                            - Mrs. Mwangi, Scholarship Beneficiary Parent (2022
                            Anniversary)
                        </span>
                    </Blockquote>

                    <Blockquote>
                        &ldquo;… God bless you the children of Waihuini, for you
                        have chosen to keep her legacy going on. That you
                        continue to care for the less fortunate even when you
                        need not to. You have taken it as your burden to do the
                        things you have been doing in her honour. We as Kaguma’s
                        family are eternally grateful and pray to the almighty
                        to keep you together and grow your work as a
                        foundation…&rdquo;
                        <br />
                        <br />
                        <span className="font-semibold text-gray-700">
                            - Madam Mwanjiku Kaguma, Relative of Healthcare
                            Beneficiary (2024 Anniversary)
                        </span>
                    </Blockquote>

                    <Blockquote>
                        &ldquo;…mwathani amurathime na amuongerere matuku maingi
                        ciana ici cia Waihuini, na amuongerere indo nyingi cia
                        guthii na mebere gutuga andu a Ngai…..&rdquo;
                        <br />
                        <br />
                        <span className="font-semibold text-gray-700">
                            - Mrs. Eunice Kaguma, Healthcare Beneficiary (2024
                            Anniversary)
                        </span>
                    </Blockquote>
                </Card>
            </section>
        </>
    );
};

export default AboutPage;
