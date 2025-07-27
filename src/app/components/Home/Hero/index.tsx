import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const Hero = () => {
    return (
        <>
            {/* Mobile/Small screens - Background image with overlay text */}
            <section className="md:hidden relative min-h-screen flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src="/images/banner/shosho.png"
                        alt="Teresia Waihuini portrait"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 container mx-auto px-4 py-20">
                    <div className="max-w-2xl">
                        <h1 className="font-bold text-4xl sm:text-5xl text-white leading-tight mb-6">
                            Continuing Teresia Waihuini's Legacy
                        </h1>
                        <p className="text-white/90 text-base sm:text-lg leading-7 sm:leading-8">
                            Nurturing communities by weaving together the
                            threads of knowledge, sustainability, and visionary
                            leadership, we cultivate environments where
                            individuals thrive and empower one another. Through
                            education, we spark minds; through environmental
                            care, we protect the earth; and through leadership
                            development, we inspire transformative action for a
                            brighter, more unified future.
                        </p>
                    </div>
                </div>
            </section>

            {/* Medium screens and up - Text left, Image right */}
            <section className="hidden md:block h-auto">
                <div className="container mx-auto py-20 lg:py-20 px-4">
                    <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="md:col-span-6 lg:col-span-7 flex flex-col gap-5">
                            <h1 className="font-bold text-4xl lg:text-5xl xl:text-6xl text-foreground leading-tight">
                                Continuing Teresia Waihuini's Legacy
                            </h1>
                            <p className="text-bluegray text-base lg:text-lg lg:leading-8 leading-7">
                                Nurturing communities by weaving together the
                                threads of knowledge, sustainability, and
                                visionary leadership, we cultivate environments
                                where individuals thrive and empower one
                                another. Through education, we spark minds;
                                through environmental care, we protect the
                                earth; and through leadership development, we
                                inspire transformative action for a brighter,
                                more unified future.
                            </p>
                        </div>
                        <div className="md:col-span-6 lg:col-span-5">
                            <Card className="overflow-hidden border-0 shadow-lg py-0">
                                <AspectRatio
                                    ratio={7 / 10}
                                    className="bg-muted"
                                >
                                    <Image
                                        src="/images/banner/shosho.png"
                                        alt="Teresia Waihuini portrait"
                                        fill
                                        className="object-cover rounded-lg"
                                        sizes="(max-width: 1024px) 50vw, 40vw"
                                    />
                                </AspectRatio>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
