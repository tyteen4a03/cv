import Education from "@/app/components/Education";
import Employment from "@/app/components/Employment";
import Header from "@/app/components/Header";
import Summary from "@/app/components/Summary";
import Volunteering from "@/app/components/Volunteering";
import Skills from "@/app/components/skills/Skills";

export default function Home() {
    return (
        <div>
            <Header />
            <main className="flex flex-col mt-6 gap-3">
                <Summary />
                <Skills />
                <Employment />
                <Volunteering />
                <Education />
            </main>
        </div>
    );
}