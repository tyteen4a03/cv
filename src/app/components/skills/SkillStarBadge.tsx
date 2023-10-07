import { PropsWithChildren } from "react";
import { FaStar } from "react-icons/fa6";

const SkillStarBadge = ({ children }: PropsWithChildren) => (
    <dd className="badge rounded-xl bg-amber-100 print:bg-transparent flex flex-row gap-1 items-center m-0 print:mt-0 px-3 py-2 print:px-0 print:py-0">
        <span className="text-md print:text-xs print:hidden text-amber-500">
            <FaStar />
        </span>
        <span className="text-sm print:text-xs font-semibold print:font-normal print:leading-tight">
            {children}
            <span className="hidden print:inline">;</span>
        </span>
    </dd>
);

export default SkillStarBadge;
