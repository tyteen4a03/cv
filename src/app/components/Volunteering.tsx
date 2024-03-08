import Experience from "@/app/components/experience/Experience";
import ExperienceDetailsList from "@/app/components/experience/ExperienceDetailsList";
import ExperienceHeading from "@/app/components/experience/ExperienceHeading";
import ExperienceSubheading from "@/app/components/experience/ExperienceSubheading";
import Section from "@/app/components/layout/Section";
import Heading from "@/app/components/typography/Heading";

const Volunteering = () => (
    <Section>
        <Heading>Volunteering</Heading>
        <Experience>
            <ExperienceHeading>
                Digital Development Volunteer (Tech Lead, Product Lead) -{" "}
                <a href="https://www.crisis.org.uk/crisis-at-christmas/what-is-crisis-at-christmas">Crisis UK</a>
            </ExperienceHeading>
            <ExperienceSubheading>London, GB / Remote - 2015 - Present</ExperienceSubheading>
            <p className="print:hidden">
                Crisis at Christmas is an annual event where schools and hotels are converted into homeless shelters,
                providing people experiencing homelessness with warm meals, shelter, support and companionship, and
                advice services to help them escape homelessness for good.
            </p>
            <ExperienceDetailsList>
                <li>
                    Plans, delivers and supports IT solutions (hardware, software, telephony, wired/wireless internet) to help homeless guests escape homelessness at Crisis at Christmas
                </li>
                <li>Creates and maintains bespoke, mission-critical web applications</li>
                <li>Leads a multi-disciplinary team of IT professionals</li>
                <li>Manages Microsoft 365 / Azure AD instance for volunteer email / collaboration software access</li>
                <li>
                    Manages team of ~25 Level 2 IT Helpdesk Volunteers and a knowledge base
                </li>
            </ExperienceDetailsList>
        </Experience>
        <Experience>
            <ExperienceHeading>
                Tech Lead, Community Lead - <a href="https://corporateclash.net">Toontown: Corporate Clash</a>
            </ExperienceHeading>
            <ExperienceSubheading>Remote - 2021 - Present</ExperienceSubheading>
            <p className="print:hidden">
                Toontown: Corporate Clash is a fan-made recreation of the defunct Disney MMORPG, Toontown Online. It
                handles between 500 to 2,000 concurrent players per day.
            </p>
            <ExperienceDetailsList>
                <li>
                    Manages a team of 20+ volunteer Software Engineers, in various stages of their careers, to plan and
                    deliver content updates
                </li>
                <li>
                    Responsible for overall technical direction and quality of the game, its website and associated
                    tooling
                </li>
                <li>Develops tools for moderation, community safety and community management</li>
                <li>Builds and maintains server infrastructure to sustain 1K+ concurrent players</li>
                <li>
                    Engages with community in official and unofficial capacities to shape the direction of future
                    development
                </li>
            </ExperienceDetailsList>
        </Experience>
    </Section>
);

export default Volunteering;
