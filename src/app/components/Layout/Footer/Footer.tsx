import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { FooterLinkData } from "@/lib/data/footer";

const Footer = () => {
    const FooterLink = ({
        children,
        href,
    }: {
        children: React.ReactNode;
        href: string;
    }) => (
        <Button asChild variant={"link"} className="px-1 ">
            <Link href={href}>{children}</Link>
        </Button>
    );

    return (
        <footer className="bg-muted mt-4">
            <div className=" container mx-auto">
                <div className="">
                    <div className="flex items-center justify-between py-10">
                        {/* COLUMN-1 */}

                        <div className="">
                            <div className="mb-10">
                                <Image
                                    src={"/logo.png"}
                                    alt="dsign-logo"
                                    width={222}
                                    height={64}
                                />
                            </div>
                            <div className="flex gap-6 items-center">
                                {[
                                    {
                                        icon: "fa6-brands:facebook-f",
                                        link: "/",
                                    },
                                    {
                                        icon: "fa6-brands:instagram",
                                        link: "/",
                                    },
                                    {
                                        icon: "fa6-brands:x-twitter",
                                        link: "/",
                                    },
                                ].map((item, index) => (
                                    <Button
                                        key={index}
                                        asChild
                                        size={"icon"}
                                        className="rounded-full hover:bg-primary hover:text-white border-primary text-primary"
                                        variant={"outline"}
                                    >
                                        <Link href={item.link}>
                                            <Icon
                                                icon={item.icon}
                                                width="16"
                                                height="16"
                                                className=""
                                            />
                                        </Link>
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* CLOUMN-2/3 */}
                        <div className="flex flex-col">
                            {FooterLinkData.map((item, i) => (
                                <ul className="flex" key={i}>
                                    {item.links.map((link, i) => (
                                        <FooterLink key={i} href={link.href}>
                                            {link.label}
                                        </FooterLink>
                                    ))}
                                </ul>
                            ))}
                        </div>

                        {/* CLOUMN-4 */}

                        <div className="flex flex-col gap-4">
                            <div className="flex space-x-2">
                                <MapPin />
                                <p className="text-base font-normal text-offwhite">
                                    925 Filbert Street Pennsylvania 18072
                                </p>
                            </div>
                            <div className="flex space-x-2 ">
                                <Phone />
                                <Link href="tel:+ 45 34 11 44 11">
                                    <p className="text-base font-normal text-offwhite hover:text-primary">
                                        + 45 34 11 44 11
                                    </p>
                                </Link>
                            </div>
                            <div className="flex space-x-2">
                                <Mail />
                                <Link href="mailto:info@gmail.com">
                                    <p className="text-base font-normal text-offwhite hover:text-primary">
                                        info@gmail.com
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* All Rights Reserved */}

                    <div className="flex py-5 items-center justify-center border-t border-t-bordertop">
                        <h4 className="text-offwhite text-sm text-center lg:text-start font-normal">
                            @2025 TWF
                        </h4>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
