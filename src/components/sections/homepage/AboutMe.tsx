import Body from "@/components/ui/Body";
import Socials from "@/components/ui/Socials";
import Image from "next/image";

// AboutMe Section With My Name, Personal Summary, and Picture of Me

export default function AboutMe () {

    return(     
        <section className = "grid grid-cols-1 xl:grid-cols-2 gap-x-4 w-full mt-15 items-center">

            {/* About Me Text Container */}
            <div className = "flex col-start-1 flex-col text-center xl:text-left max-w-full items-center xl:items-start mx-16 xl:ml-[25%]">
                
                {/* About Me Text Box and Text */}
                
                <h1 className = "text-3xl sm:text-[2.1rem] md:text-[40px] font-bold text-[#DADAD9] font-comic-sans">
                    {"Liam Mack Snyder"}
                </h1>
                

                <Body className = "max-w-2xl mt-6">
                    {"Hi there! My name's Liam. I'm a CSU student pursuing a BSBA with dual focuses in Computer Information Systems and Marketing. I've only been coding since August of 2024, but I've been enjoying spending quite a bit of time making things like this website."}
                </Body>

                <Body className = "max-w-2xl mt-6 font-bold">
                    {"Bachelor's of Science, Business Administration"}
                </Body>

                <Body className = "max-w-2xl mt-0">
                    {"Dual Concentrations: Computer Information Systems and Marketing"}
                </Body>

                <Body className = "max-w-2xl mt-0 italic">
                    {"Certifications in Business App Development and B2B Selling"}
                </Body>

                <Body className = "max-w-2xl mt-6">
                    {"Fort Collins, CO"}
                </Body>

                <Socials className = "mt-6" width = "30"/>

            </div> 

            

            {/* About me Image */}
            <div className = "flex col-start-2 w-full hidden xl:block items-center">
                <div className = "p-10">
                    <div className = "ring-2 max-w-180 mx-auto rounded-full">
                        <Image
                            src = "/LinkedIn_2.png" 
                            alt = "Portrait of Liam Mack Snyder" 
                            className = "w-full object-contain mx-auto rounded-full"
                            width = {720}
                            height = {720}
                            quality = {95}
                            priority
                        />
                    </div>
                </div>
            </div>  

        </section> 
    );
}