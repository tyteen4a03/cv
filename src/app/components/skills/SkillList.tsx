import { PropsWithChildren } from "react";

interface SkillListProps {
    heading: string;
}

const SkillList = ({ heading, children }: PropsWithChildren<SkillListProps>) => (
    <dl className="contents">
        <dt className="mt-1 print:mt-0 font-bold content-start print:text-xs">{heading}</dt>
        <div className="flex flex-row flex-wrap gap-2 print:gap-1">{children}</div>
    </dl>
);

export default SkillList;
