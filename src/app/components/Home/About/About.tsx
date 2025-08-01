import Container from "@/components/container";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";

const Vision = () => {
    return (
        <section className="-mt-10 md:mt-0 py-4">
            <div className="relative z-1 mx-2 md:mx-0">
                <Container className="bg-primary rounded-2xl">
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
                        {/* COLUMN-1: Image section, now visible on all screens */}
                        <div className=" relative flex justify-center ">
                            {/* The container for the main image must be relative and have defined dimensions. */}
                            {/* `w-full` and `aspect-square` define the size, and `relative` allows the `fill` prop to work. */}
                            <div className="relative w-full aspect-square">
                                <Image
                                    src={"/images/banner/shosho.png"}
                                    alt="bgimg"
                                    // The `fill` prop makes the image occupy the full dimensions of its parent container.
                                    fill
                                    // `object-cover` ensures the image covers the container without being stretched.
                                    className="rounded-2xl object-cover"
                                />
                            </div>
                            {/* Decorative leaf image, positioned relative to the parent container */}
                            <div className="absolute top-10 right-0">
                                <Image
                                    src={"/images/newsletter/leaf.svg"}
                                    alt="leafimg"
                                    width={81}
                                    height={81}
                                />
                            </div>
                        </div>

                        {/* COLUMN-2: Text content */}
                        <div className=" flex flex-col justify-center text-white">
                            <SectionHeading title="About Us" />

                            <p className="text-base font-normal text-offwhite text-justify">
                                Teresia Waihuini Foundation – TWF is established
                                to carry on with the dreams, aspirations and
                                life ideals of the late Teresia Waihuini Mwangi,
                                our departed matriarch. In staying with her
                                lifelong activities of community engagement
                                through meaningful community interventions, the
                                family and friends established the foundation to
                                coordinate activities to support her community.
                            </p>
                            <p className="text-base font-normal mb-7 text-offwhite text-justify">
                                In staying with her lifelong activities of
                                community engagement through meaningful
                                community interventions, the family and friends
                                established the foundation to coordinate
                                activities to support her community.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Vision;
