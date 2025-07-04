import AboutMe from "@/components/sections/homepage/AboutMe";
import Footer from "@/components/layout/Footer";
import SectionDivider from "@/components/ui/SectionDivider";
import Resume from "@/components/sections/homepage/Resume";
import Panels from "@/components/sections/homepage/Panels";

export default function HomePage() {
    return (
        <main className = "min-h-screen bg-night text-white flex flex-col items-center max-w-[2180px] mx-auto">
            
            { /* AboutMe Section With My Name, Personal Summary, and Picture of Me */ }
            <AboutMe/>

            { /* Resume Section With Carousel. Carousel holds different bubbles each equivalent to a resume section, with experiences being expandable on click */ }
            <Resume/>

            { /* Panels Section. Contains various panels with the same size but different functionalities. The panels are images in /public. */ }
            <Panels/>

            { /* Footer Section With Disclaimers and Email. Has Links to Vercel Website Deployment and Personal Archive GitHub Repos */ }
            <SectionDivider/>
            <Footer/>

        </main>
    );
}
