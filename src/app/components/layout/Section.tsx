import { PropsWithChildren } from "react";

const Section = ({ children }: PropsWithChildren) => {
    return (
        <section className="max-w-2xl w-full text-white mx-auto flex flex-col md:flex-row print:flex-row px-4 md:px-6 print:px-6">
            <div className="ml-0 prose print:prose-sm prose-p:my-4 print:prose-p:my-1 leading-normal print:leading-tight">
                {children}
            </div>
        </section>
    );
};

export default Section;
