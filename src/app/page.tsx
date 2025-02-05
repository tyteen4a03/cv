import Education from "@/app/components/Education";
import Employment from "@/app/components/Employment";
import Header from "@/app/components/Header";
import Skills from "@/app/components/Skills";
import Summary from "@/app/components/Summary";
import Volunteering from "@/app/components/Volunteering";

export default function Home() {
    return (
        <div>
            <Header />
            <main className="flex flex-col py-6 print:py-4 gap-4 print:gap-2">
                <Summary />
                <Skills />
                <Employment />
                <Volunteering />
                <Education />
            </main>
        </div>
    );
}
