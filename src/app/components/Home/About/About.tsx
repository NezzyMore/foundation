import Image from "next/image";

const Vision = () => {
    return (
        <section className="-mt-10 md:mt-0">
            <div className="relative z-1">
                <div className="container mx-auto bg-primary rounded-2xl">
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
                        {/* COLUMN-1 */}
                        <div className="hidden lg:block">
                            <div className="float-right pt-20 relative">
                                <Image
                                    src={"/images/newsletter/bgImage.png"}
                                    alt="bgimg"
                                    width={588}
                                    height={334}
                                />
                                <div className="absolute top-10 right-0">
                                    <Image
                                        src={"/images/newsletter/leaf.svg"}
                                        alt="leafimg"
                                        width={81}
                                        height={81}
                                    />
                                </div>
                                <div className="absolute bottom-8 left-2">
                                    <Image
                                        src={"/images/newsletter/circel.svg"}
                                        alt="circleimg"
                                        width={30}
                                        height={30}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* COLUMN-2 */}
                        <div className="p-10 flex flex-col justify-center text-white">
                            <h3 className="mb-3 text-6xl font-semibold text-white">
                                About Us
                            </h3>
                            <p className="text-base font-normal text-offwhite">
                                Teresia Waihuini Foundation – TWF is established
                                to carry on with the dreams, aspirations and
                                life ideals of the late Teresia Waihuini Mwangi,
                                our departed matriarch. In staying with her
                                lifelong activities of community engagement
                                through meaningful community interventions, the
                                family and friends established the foundation to
                                coordinate activities to support her community.
                            </p>
                            <p className="text-base font-normal mb-7 text-offwhite">
                                In staying with her lifelong activities of
                                community engagement through meaningful
                                community interventions, the family and friends
                                established the foundation to coordinate
                                activities to support her community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
