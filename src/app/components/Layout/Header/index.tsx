"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import HeaderLink from "./Navigation/HeaderLink";
import MobileHeaderLink from "./Navigation/MobileHeaderLink";
import { Icon } from "@iconify/react";
import { HeaderData } from "@/lib/data/header";

const Header: React.FC = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    // const navbarRef = useRef<HTMLDivElement>(null)

    const mobileMenuRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        setSticky(window.scrollY >= 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            mobileMenuRef.current &&
            !mobileMenuRef.current.contains(event.target as Node) &&
            navbarOpen
        ) {
            setNavbarOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navbarOpen]);

    useEffect(() => {
        if (navbarOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [navbarOpen]);

    return (
        <header
            className={`fixed top-0 z-40 w-full transition-all  duration-300 ${
                sticky ? "shadow-lg bg-background py-4" : "shadow-none py-4"
            }`}
        >
            <div>
                <div className="container mx-auto flex items-center justify-between">
                    <div>
                        <Logo />
                    </div>
                    <div>
                        <nav className="hidden lg:flex grow items-center gap-1 xl:gap-2  justify-center">
                            {HeaderData.map((item, index) => (
                                <HeaderLink key={index} item={item} />
                            ))}
                        </nav>
                        <button
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            className="block lg:hidden p-2 rounded-lg"
                            aria-label="Toggle mobile menu"
                        >
                            <span className="block w-6 h-0.5 bg-black"></span>
                            <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
                            <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
                        </button>
                    </div>
                </div>
                {navbarOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
                )}
                <div
                    ref={mobileMenuRef}
                    className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
                        navbarOpen ? "translate-x-0" : "translate-x-full"
                    } z-50`}
                >
                    <div className="flex items-center justify-between gap-2 p-4">
                        <div>
                            <Logo />
                        </div>
                        {/*  */}
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="hover:cursor-pointer"
                            aria-label="Close menu Modal"
                        >
                            <Icon
                                icon="material-symbols:close-rounded"
                                width={24}
                                height={24}
                                className="text-black hover:text-primary text-24 inline-block me-2"
                            />
                        </button>
                    </div>
                    <nav className="flex flex-col items-start p-4">
                        {HeaderData.map((item, index) => (
                            <MobileHeaderLink key={index} item={item} />
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
