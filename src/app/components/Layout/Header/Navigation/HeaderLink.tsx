"use client";
import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const path = usePathname();

    return (
        <Button
            variant={"link"}
            className={cn(
                "px-1 ",
                path === item.href
                    ? "text-primary "
                    : " text-foreground  hover:text-primary"
            )}
            asChild
        >
            <Link href={item.href}>{item.label}</Link>
        </Button>
    );
};

export default HeaderLink;
