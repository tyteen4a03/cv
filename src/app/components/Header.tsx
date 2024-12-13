import { SocialLink } from "@/app/components/SocialLink";
import { FaGithub, FaLinkedin, FaMedium, FaStackOverflow } from "react-icons/fa6";

const Header = () => (
    <header className="bg-cyan-900 font-white">
        <div className="max-w-2xl text-white mx-auto flex flex-col md:flex-row print:flex-row p-4 md:p-6 print:p-6 gap-4">
            <div className="flex flex-col gap-3 flex-grow">
                <h1 className="font-bold text-3xl">Timothy Choi</h1>
                <div>
                    <h2 className="text-lg mb-0">Software Engineer</h2>
                    <h3 className="text-md">Berlin, DE</h3>
                </div>
            </div>
            <ul className="flex flex-col items-start gap-2">
                <li>
                    <SocialLink icon={<FaGithub />} link="https://github.com/tyteen4a03">
                        tyteen4a03
                    </SocialLink>
                </li>
                <li>
                    <SocialLink icon={<FaStackOverflow />} link="https://stackoverflow.com/users/1049833/tyteen4a03">
                        tyteen4a03
                    </SocialLink>
                </li>
                <li>
                    <SocialLink icon={<FaLinkedin />} link="https://www.linkedin.com/in/tyteen4a03/">
                        https://linkedin.com/in/tyteen4a03/
                    </SocialLink>
                </li>
                <li>
                    <SocialLink icon={<FaMedium />} link="https://medium.com/@tyteen4a03">
                        tyteen4a03
                    </SocialLink>
                </li>
            </ul>
        </div>
    </header>
);

export default Header;
