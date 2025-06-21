import AboutMe from "@/components/sections/homepage/AboutMe";
import Footer from "@/components/layout/Footer";
import SectionDivider from "@/components/ui/SectionDivider";
import Resume from "@/components/sections/homepage/Resume";

export default function HomePage() {
    return (
        <main className = "min-h-screen bg-night text-white flex flex-col items-center space-y-16 ">
            
            { /* AboutMe Section With My Name, Personal Summary, and Picture of Mexplore My Work" Section With Design Work and Coding Work Portfolio Buttons */ }
            <AboutMe/>

            <Resume/>
            <SectionDivider/>

            { /* Footer Section With Disclaimers and Email. Has Links to Vercel Website Deployment and Personal Archive GitHub Repos */ }
            <Footer/>

        </main>
    );
}
