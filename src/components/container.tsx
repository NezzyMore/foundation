import { cn } from "@/lib/utils";
import React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
};

const Container = ({ children, className }: Props) => {
    return (
        <div className={cn("container mx-auto p-2 md:p-4", className)}>
            {children}
        </div>
    );
};

export default Container;
