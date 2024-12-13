import type { PropsWithChildren } from "react";

interface ExperienceSubheadingProps {
    size?: "sm" | "md";
}

const ExperienceSubheading = ({ size = "md", children }: PropsWithChildren<ExperienceSubheadingProps>) => (
    <h5 className={`text-gray-500 ${size === "sm" ? "text-xs" : "text-sm"}`}>{children}</h5>
);

export default ExperienceSubheading;
