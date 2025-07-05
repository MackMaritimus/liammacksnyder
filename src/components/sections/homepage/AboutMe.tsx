import Body from "@/components/ui/Body";
import Socials from "@/components/ui/Socials";
import Image from "next/image";
import Skills from "@/components/ui/Skills";

// AboutMe Section With My Name, Personal Summary, and Picture of Me

export default function AboutMe () {

    return(     
        <section className = "grid grid-cols-1 xl:grid-cols-2 gap-x-4 w-full mt-15 items-center p-6">

            {/* About Me Text Container */}
            <div className = "flex col-start-1 flex-col text-center xl:text-left max-w-full xl:max-w-160 items-center xl:items-start xl:ml-[25%] mb-12">
                
                {/* About Me Text Box and Text */}
                <div className = "flex flex-col max-w-2xl xl:max-w-full">
                    <div className = "">
                        <h1 className = "text-[2.1rem] md:text-[40px] font-bold">
                            {"Liam Snyder"}
                        </h1>
                        

                        <Body className = "mt-6">
                            {"Hi there! My name's Liam. I'm a CSU student pursuing a BSBA with dual focuses in Computer Information Systems and Marketing. I've only been coding since August of 2024, but I've been enjoying spending quite a bit of time making things like this website."}
                        </Body>

                        <Body className = "mt-6">
                            {"Fort Collins, CO"}
                        </Body>
                    </div>

                    

                    <Socials className = "mx-auto xl:mx-0 mr-auto mt-6" width = "30"/>

                    <Skills/>
                </div>

            </div> 

            {/* About me Image */}
            <div className = "flex col-start-2 w-full hidden xl:block items-center p-10">
                <div className = "ring-4 max-w-180 mx-auto rounded-full">
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

        </section> 
    );
}