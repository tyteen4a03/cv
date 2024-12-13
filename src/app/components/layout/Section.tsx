import clsx from "clsx";
import type { FC, HTMLAttributes, PropsWithChildren } from "react";

const Section: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({ children, className, ...props }) => {
    return (
        <section
            className={clsx(
                "max-w-2xl w-full text-white mx-auto flex flex-col md:flex-row print:flex-row px-4 md:px-6 print:px-6",
                className,
            )}
            {...props}
        >
            <div className="ml-0 prose print:prose-sm prose-p:my-4 print:prose-p:my-1 leading-normal print:leading-tight">
                {children}
            </div>
        </section>
    );
};

export default Section;
