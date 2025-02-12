import Section from "@/app/components/layout/Section";
import SkillBadge from "@/app/components/skills/SkillBadge";
import SkillList from "@/app/components/skills/SkillList";
import SkillStarBadge from "@/app/components/skills/SkillStarBadge";
import Heading from "@/app/components/typography/Heading";

const Skills = () => (
    <Section>
        <Heading>Skills</Heading>
        <div className="grid sm:grid-cols=1 md:grid-cols-[minmax(100px,1fr)_minmax(0,5fr)] print:grid-cols-[minmax(60px,1fr)_minmax(0,5fr)] gap-x-2 gap-y-3 print:gap-y-0.5 mb-4">
            <SkillList heading="Languages">
                <SkillBadge>CSS</SkillBadge>
                <SkillBadge>HTML</SkillBadge>
                <SkillBadge>JavaScript / TypeScript</SkillBadge>
                <SkillBadge>PHP</SkillBadge>
                <SkillBadge>PowerShell</SkillBadge>
                <SkillBadge>Python</SkillBadge>
                <SkillBadge last>SQL</SkillBadge>
            </SkillList>
            <SkillList heading="Libraries">
                <SkillBadge>Chakra UI</SkillBadge>
                <SkillBadge>Cloudflare Pages</SkillBadge>
                <SkillBadge>Docker</SkillBadge>
                <SkillBadge>Elasticsearch</SkillBadge>
                <SkillBadge>Git</SkillBadge>
                <SkillBadge>GraphQL</SkillBadge>
                <SkillBadge>Jest</SkillBadge>
                <SkillBadge>Laravel</SkillBadge>
                <SkillBadge>MongoDB</SkillBadge>
                <SkillBadge>MUI</SkillBadge>
                <SkillBadge>Next.js</SkillBadge>
                <SkillBadge>Node.js</SkillBadge>
                <SkillBadge>PayloadCMS</SkillBadge>
                <SkillBadge>PostgreSQL</SkillBadge>
                <SkillBadge>Prisma</SkillBadge>
                <SkillBadge>React</SkillBadge>
                <SkillBadge>Redis</SkillBadge>
                <SkillBadge>Remix</SkillBadge>
                <SkillBadge>Symfony</SkillBadge>
                <SkillBadge>TailwindCSS</SkillBadge>
                <SkillBadge>Testing Library</SkillBadge>
                <SkillBadge last>Vitest</SkillBadge>
            </SkillList>
            <SkillList heading="Others">
                <SkillBadge>Technical Support</SkillBadge>
                <SkillBadge>Helpdesk Management</SkillBadge>
                <SkillBadge>Solution Architecture</SkillBadge>
                <SkillBadge>Project / Engineering Management</SkillBadge>
                <SkillBadge>Incident Management</SkillBadge>
                <SkillBadge last>Social Media Management</SkillBadge>
            </SkillList>
        </div>
    </Section>
);

export default Skills;
