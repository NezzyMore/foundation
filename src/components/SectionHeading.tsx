import { cn } from "@/lib/utils";
import React from "react";

const SectionHeading = ({
    title,
    subtitle,
    className,
}: {
    title: string;
    subtitle?: string;
    className?: string;
}) => {
    return (
        <div className={cn("mb-6", className)}>
            <h1 className="text-5xl font-semibold">{title}</h1>
            {subtitle && (
                <p className="text-muted-foreground text-xl mt-2">{subtitle}</p>
            )}
        </div>
    );
};

export default SectionHeading;
