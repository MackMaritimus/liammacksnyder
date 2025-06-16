import Body from "@/components/ui/Body";
import HeaderBubble from "@/components/ui/HeaderBubble";

// AboutMe Section With My Name, Personal Summary, and Picture of Me

export default function AboutMe () {

    return(     
        <section className = "grid grid-cols-[1fr_auto_1fr] gap-x-4 w-full mt-16">

            {/* About Me Text Container */}
            <div className = "flex col-start-2 flex-col text-center justify-top max-w-full items-center">
                
                {/* About Me Text Box and Text */}
                
                    <h1 className = "text-3xl sm:text-[2.1rem] md:text-[40px] font-bold text-[#DADAD9] font-comic-sans">
                        Liam Mack Snyder
                    </h1>
                
                <Body className = "max-w-2xl mt-6">
                     Full-stack developer and designer with a dual focus in Computer Information Systems and Marketing. I build fast, clean web experiences from the ground up. Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah Blah
                </Body>
            </div> 

            {/* About me Image */}
            <div className = "flex col-start-3 w-full hidden xl:block">
                <img
                    src = "/LinkedIn 2.png" 
                    alt = "Profile Picture" 
                    className = "w-56 2xl:w-64 h-auto object-contain mx-auto rounded-4xl ring-2 ring-neutral-500"
                />
            </div>  

        </section> 
    );
}