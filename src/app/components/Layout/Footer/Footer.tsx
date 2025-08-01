import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { FooterLinkData } from "@/lib/data/footer";

const Footer = () => {
    // A reusable component for footer links, ensuring proper styling and navigation
    const FooterLink = ({
        children,
        href,
    }: {
        children: React.ReactNode;
        href: string;
    }) => (
        <Button
            asChild
            variant={"link"}
            className="px-1 text-offwhite hover:text-primary"
        >
            <Link href={href}>{children}</Link>
        </Button>
    );

    return (
        // The main footer container with a top margin
        <footer className="bg-muted mt-4">
            <div className="container mx-auto">
                <div className="py-10">
                    {/* Main content grid: stacks on mobile, becomes a 3-column layout on medium/large screens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* COLUMN-1: Logo and Socials */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="mb-6">
                                <Image
                                    src={"/logo.png"}
                                    alt="dsign-logo"
                                    width={222}
                                    height={64}
                                />
                            </div>
                            <div className="flex gap-4">
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
                                            />
                                        </Link>
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* COLUMN-2/3: Dynamic Links from FooterLinkData */}
                        {/* This section now uses a grid to handle multiple columns of links on larger screens */}
                        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-4">
                            {FooterLinkData.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center md:items-start text-center md:text-left"
                                >
                                    <ul className="flex flex-col items-center md:items-start">
                                        {item.links.map((link, i) => (
                                            <li key={i}>
                                                <FooterLink href={link.href}>
                                                    {link.label}
                                                </FooterLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* COLUMN-4: Contact Information */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
                            <h3 className="text-xl font-semibold mb-2 text-primary">
                                Contact
                            </h3>
                            <div className="flex space-x-2 items-center">
                                <MapPin className="text-primary" />
                                <p className="text-base font-normal text-offwhite">
                                    925 Filbert Street Pennsylvania 18072
                                </p>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <Phone className="text-primary" />
                                <Link href="tel:+ 45 34 11 44 11">
                                    <p className="text-base font-normal text-offwhite hover:text-primary">
                                        + 45 34 11 44 11
                                    </p>
                                </Link>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <Mail className="text-primary" />
                                <Link href="mailto:info@gmail.com">
                                    <p className="text-base font-normal text-offwhite hover:text-primary">
                                        info@gmail.com
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* All Rights Reserved - Separator with border-t */}
                    <div className="flex py-5 mt-8 items-center justify-center border-t border-t-bordertop">
                        <h4 className="text-offwhite text-sm text-center font-normal">
                            @2025 TWF
                        </h4>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
