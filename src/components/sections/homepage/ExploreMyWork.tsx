import LinkButton from "@/components/ui/LinkButton";
import BlueGraySec from "@/components/ui/BlueGraySec";

// Explore My Work" Section With Design Work and Coding Work Portfolio Buttons

export default function ExploreMyWork () {

    return (
        <BlueGraySec>

            <h2 className = "text-3xl font-bold mt-8 mb-8 text-center">
                Explore My Work
            </h2>
            
            {/* Buttons Container */}
            <div className = "w-full flex flex-wrap gap-16 justify-center px-6 mx-auto mb-16">
            
                {/* Design Work Button */}
                <button className = "w-full max-w-sm md:max-w-lg h-[550px] md:h-[750px] rounded-4xl bg-linear-to-b from-fuchsia-700 to-zinc-500 hover:scale-105 duration-300 flex flex-col ring-1 ring-gray-400">
                    {/* Design Work Button Image */}
                    <img
                        src = "/Lion_Line_Art_Transparent_1200_1200.png" 
                        alt = "Designs Preview" 
                        className = "w-64 md:w-80 h-64 md:h-80 object-contain overflow-visible mb-4 mt-12 mx-auto bg-[#272726] rounded-full ring-24 ring-[#272726]"
                    />
                
                    { /* Design Work Button Text */ }
                    <div className = "flex grow flex-col justify-center items-center mx-8 lg:mx-0">  
                        <h3 className = "text-center text-3xl md:text-4xl text-white">
                            Design Work
                        </h3>
                        <p className = "max-w-md text-center text-xl md:text-2xl text-white mt-5 md:mt-10 italic">
                            My design work including Adobe Suite, Canva, and Odd Projects
                        </p>
                    </div>
                </button>

                {/* Coding Work Button */}
                <LinkButton 
                    href = "https://github.com/MackMaritimus/Liam-Mack-Snyder-Dev-Archive" 
                    className = "w-full max-w-sm md:max-w-lg h-[550px] md:h-[750px] rounded-4xl bg-linear-to-b from-cyan-700 to-zinc-500 hover:scale-105 duration-300 flex flex-col ring-1 ring-gray-400"
                    >

                    {/* Coding Work Button Image */}
                    <img
                        src = "/Lion_Line_Art_Transparent_1200_1200.png" 
                        alt = "Designs Preview" 
                        className = "w-64 md:w-80 h-64 md:h-80 object-contain overflow-visible mb-4 mt-12 mx-auto bg-[#272726] rounded-full ring-24 ring-[#272726]"
                    />

                    { /* Coding Work Button Text */ }
                    <div className = "flex grow flex-col justify-center items-center mx-8 lg:mx-0">
                        <h3 className = "text-center text-3xl md:text-4xl text-white">
                            Coding Work
                        </h3>
                        <p className = "max-w-md text-center text-xl md:text-2xl text-gray-300 mt-5 md:mt-10 italic">
                            My coding work including Java GUIs, SQL queries, and Python analytics
                        </p>
                    </div>

                </LinkButton>    
            </div>
        </BlueGraySec>
    );
}