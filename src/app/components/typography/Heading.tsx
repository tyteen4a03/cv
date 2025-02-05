import type { PropsWithChildren } from "react";

const Heading = ({ children }: PropsWithChildren) => (
    <h4 className="uppercase text-xl print:text-sm mb-3 print:mb-0 print:mt-0">{children}</h4>
);

export default Heading;
