import type { PropsWithChildren } from "react";

interface ExperienceHeadingProps {
    size?: "sm" | "md";
}

const ExperienceHeading = ({ size = "md", children }: PropsWithChildren<ExperienceHeadingProps>) => (
    <h4 className={`mt-0 mb-0${size === "sm" ? " text-xs" : ""}`}>{children}</h4>
);

export default ExperienceHeading;
