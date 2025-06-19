import ExploreMyWork from "@/components/sections/homepage/ExploreMyWork";
import AboutMe from "@/components/sections/homepage/AboutMe";
import Footer from "@/components/sections/homepage/Footer";
import SectionDivider from "@/components/ui/SectionDivider";
import Resume from "@/components/sections/homepage/Resume";

export default function HomePage() {
    return (
        <main className = "min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center space-y-16">
            
            { /* AboutMe Section With My Name, Personal Summary, and Picture of Mexplore My Work" Section With Design Work and Coding Work Portfolio Buttons */ }
            <AboutMe/>

            <Resume/>
            <SectionDivider/>
            { /* Explore My Work" Section With Design Work and Coding Work Portfolio Buttons */ }
            <ExploreMyWork/>
            <SectionDivider/>
            { /* Footer Section With Disclaimers and Email. Has Links to Vercel Website Deployment and Personal Archive GitHub Repos */ }
            <Footer/>

        </main>
    );
}
