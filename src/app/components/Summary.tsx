import Section from "@/app/components/layout/Section";
import Heading from "@/app/components/typography/Heading";

const Summary = () => (
    <Section className="print:hidden">
        <Heading>Summary</Heading>
        <p>I am a software engineer with an interest in using tech for social good.</p>
        <p>
            Since my first website at 10 on GeoCities, I&apos;ve gone on to work on Minecraft custom servers, MMORPGs,
            web application used by millions, and led volunteer teams to deliver IT services powering a homeless shelter
            network every Christmas.
        </p>
        <p>
            I enjoy being &quot;the glue&quot; to IT projects, working across disciplines to ensure they get delivered
            on time, meet budget and satisfy users. I have created projects from scratch, and have dived into complex
            codebases and modernised them.
        </p>
        <p>
            I prefer full-stack development on the web but can also specialise into backend / frontend and other
            disciplines as needed.
        </p>
    </Section>
);

export default Summary;
