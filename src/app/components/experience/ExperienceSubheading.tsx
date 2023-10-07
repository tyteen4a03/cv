import { PropsWithChildren } from "react";

interface ExperienceSubheadingProps {
    size?: "sm" | "md";
}

const ExperienceSubheading = ({ size = "md", children }: PropsWithChildren<ExperienceSubheadingProps>) => (
    <span className={`text-gray-500 ${size === "sm" ? "text-xs" : "text-sm"}`}>{children}</span>
);

export default ExperienceSubheading;
