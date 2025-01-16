import Experience from "@/app/components/experience/Experience";
import ExperienceDetailsList from "@/app/components/experience/ExperienceDetailsList";
import ExperienceHeading from "@/app/components/experience/ExperienceHeading";
import ExperienceSubheading from "@/app/components/experience/ExperienceSubheading";
import Section from "@/app/components/layout/Section";
import Heading from "@/app/components/typography/Heading";

const Employment = () => (
    <Section>
        <Heading>Employment</Heading>
        <Experience>
            <ExperienceHeading>
                Senior Software Engineer - <a href="https://www.xo-life.com">XO Life</a>
            </ExperienceHeading>
            <ExperienceSubheading>Berlin, DE - 2024 - 2024</ExperienceSubheading>
            <p className="print:hidden">
                XO Life provides a platform for pharmaceutical companies to provide support for people taking their
                medicines.
            </p>
            <ExperienceDetailsList>
                <li>Developed new features in the client-facing vertical</li>
                <li>
                    Improved coding standards and practices, preparing the 5-year-old codebase for modern libraries such
                    as MUI v6 and React 19
                </li>
            </ExperienceDetailsList>
        </Experience>
        <Experience>
            <ExperienceHeading>
                Senior Software Engineer - <a href="https://www.researchgate.net/">ResearchGate</a>
            </ExperienceHeading>
            <ExperienceSubheading>Berlin, DE - 2020 - 2023</ExperienceSubheading>
            <ExperienceHeading size="sm">
                Software Engineer - <a href="https://www.researchgate.net/">ResearchGate</a>
            </ExperienceHeading>
            <ExperienceSubheading size="sm">Berlin, DE - 2019 - 2020</ExperienceSubheading>
            <p className="print:hidden">
                ResearchGate is a social network for scientists, allowing academics to share and discuss academic
                publications and progress.
            </p>
            <ExperienceDetailsList>
                <li>
                    Developed features for ResearchGate&apos;s back-of-house accounting and business administration
                    platform, as well as solutions for publishers
                </li>
                <li>Maintained reusable PHP and React components used by all teams</li>
                <li>Organized cross-team Guilds to solve engineering issues related to ResearchGate web application</li>
                <li>Mentored entry-level and new Software Engineers across the organisation</li>
                <li>
                    <strong>Achievement:</strong> Migrated key products from legacy monolith to modern, Next.js-based
                    platform
                </li>
                <li>
                    <strong>Achievement:</strong> Designed and implemented payment reminder system and reduced
                    uncollected revenue by 100%
                </li>
            </ExperienceDetailsList>
        </Experience>
    </Section>
);

export default Employment;
