import ExploreMyWork from "@/components/sections/homepage/ExploreMyWork";
import AboutMe from "@/components/sections/homepage/AboutMe";
import Footer from "@/components/sections/homepage/Footer";

export default function HomePage() {
    return (
        <main className = "min-h-screen bg-neutral-900 text-white flex flex-col items-center space-y-16">
      
            <AboutMe/>
            <hr className = "w-full border-gray-600 mt-0 mb-0" />

            { /* Explore My Work" Section With Design Work and Coding Work Portfolio Buttons */ }
            <ExploreMyWork/>
            <hr className = "w-full border-gray-600 mt-0 mb-0" />

            <Footer/>

        </main>
    );
}
