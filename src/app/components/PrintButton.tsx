"use client";

import { FaPrint } from "react-icons/fa6";
import Section from "./layout/Section";

const PrintButton = () => (
    <Section className="print:hidden">
        <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex gap-2 items-center underline cursor-pointer"
        >
            <FaPrint />
            Print this document / Save as PDF
        </button>
    </Section>
);

export default PrintButton;
