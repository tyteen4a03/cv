import Section from "@/app/components/layout/Section";
import SkillBadge from "@/app/components/skills/SkillBadge";
import SkillList from "@/app/components/skills/SkillList";
import SkillStarBadge from "@/app/components/skills/SkillStarBadge";
import Heading from "@/app/components/typography/Heading";

const Skills = () => (
    <Section>
        <Heading>Skills</Heading>
        <div className="grid sm:grid-cols=1 md:grid-cols-[minmax(100px,1fr)_minmax(0,5fr)] print:grid-cols-[minmax(100px,1fr)_minmax(0,5fr)] gap-x-2 gap-y-3 print:gap-y-0.5">
            <SkillList heading="Languages">
                <SkillStarBadge>PHP</SkillStarBadge>
                <SkillStarBadge>Python</SkillStarBadge>
                <SkillStarBadge>JavaScript / TypeScript</SkillStarBadge>
                <SkillStarBadge>HTML</SkillStarBadge>
                <SkillStarBadge>CSS</SkillStarBadge>
                <SkillBadge>PowerShell</SkillBadge>
                <SkillBadge last>SQL</SkillBadge>
            </SkillList>
            <SkillList heading="Libraries">
                <SkillStarBadge>GraphQL</SkillStarBadge>
                <SkillStarBadge>Jest</SkillStarBadge>
                <SkillStarBadge>MongoDB</SkillStarBadge>
                <SkillStarBadge>MySQL / MariaDB</SkillStarBadge>
                <SkillStarBadge>Next.js</SkillStarBadge>
                <SkillStarBadge>Node.js</SkillStarBadge>
                <SkillStarBadge>PostgreSQL</SkillStarBadge>
                <SkillStarBadge>React</SkillStarBadge>
                <SkillStarBadge>Remix</SkillStarBadge>
                <SkillStarBadge>TailwindCSS</SkillStarBadge>
                <SkillStarBadge>Testing Library</SkillStarBadge>
                <SkillBadge>Chakra UI</SkillBadge>
                <SkillBadge>Docker</SkillBadge>
                <SkillBadge>ELK Stack</SkillBadge>
                <SkillBadge>Git</SkillBadge>
                <SkillBadge>Laravel</SkillBadge>
                <SkillBadge>Panda3D</SkillBadge>
                <SkillBadge>PayloadCMS</SkillBadge>
                <SkillBadge>Prisma</SkillBadge>
                <SkillBadge>Redis</SkillBadge>
                <SkillBadge last>Symfony</SkillBadge>
            </SkillList>
            <SkillList heading="Others">
                <SkillBadge>Technical Support</SkillBadge>
                <SkillBadge>Helpdesk Management</SkillBadge>
                <SkillBadge>Project / Engineering Management</SkillBadge>
                <SkillBadge>Incident Management</SkillBadge>
                <SkillBadge last>Social Media Management</SkillBadge>
            </SkillList>
        </div>
    </Section>
);

export default Skills;
