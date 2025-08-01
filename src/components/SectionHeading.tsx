import { cn } from "@/lib/utils";
import React from "react";

const SectionHeading = ({
    title,
    subtitle,
    className,
    headingClassName,
}: {
    title: string;
    subtitle?: string;
    className?: string;
    headingClassName?: string;
}) => {
    return (
        <div className={cn("mb-6", className)}>
            <h1
                className={cn(
                    "text-4xl md:text-5xl font-bold",
                    headingClassName
                )}
            >
                {title}
            </h1>
            {subtitle && (
                <p className="text-muted-foreground text-base md:text-xl mt-2">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;
