import { PropsWithChildren } from "react";

interface SkillBadgeProps {
    last?: boolean;
}

const SkillBadge = ({ last, children }: PropsWithChildren<SkillBadgeProps>) => (
    <dd className="rounded-xl bg-gray-100 print:bg-transparent flex flex-row items-center m-0 print:mt-0 px-3 py-2 print:px-0 print:py-0">
        <span className="text-sm print:text-xs font-semibold print:font-normal min-h-4">
            {children}
            {!last && <span className="hidden print:inline">;</span>}
        </span>
    </dd>
);

export default SkillBadge;
