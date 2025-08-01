import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
    const path = usePathname();

    return (
        <Button
            variant={"link"}
            className={cn(
                "justify-start -ml-2 text-lg",
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

export default MobileHeaderLink;
