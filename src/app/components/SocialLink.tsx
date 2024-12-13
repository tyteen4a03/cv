import type { PropsWithChildren, ReactNode } from "react";

interface SocialLinkProps {
    icon: ReactNode;
    link: string;
}

export const SocialLink = ({ icon, link, children }: PropsWithChildren<SocialLinkProps>) => {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <div className="flex flex-row gap-2 items-center justify-center">
                <span className="text-xl w-5 h-5">{icon}</span>
                <div className="text-xs align-middle" style={{ lineHeight: "1.25rem" }}>
                    {children}
                </div>
            </div>
        </a>
    );
};
