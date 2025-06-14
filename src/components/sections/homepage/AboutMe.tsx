import Body from "@/components/ui/Body";

// AboutMe Section With My Name, Personal Summary, and Picture of Me

export default function AboutMe () {

    return(     
        <section className = "grid grid-cols-[1fr_auto_1fr] gap-x-4 w-full mt-16">

            {/* About Me Text Container */}
            <div className = "flex col-start-2 flex-col text-center justify-top max-w-full items-center">
                
                {/* About Me Text Box and Text */}
                <div className = "px-10 sm:px-24 md:px-44 2xl:px-58 mx-auto h-[100px] sm:h-[150px] bg-zinc-700 flex items-center justify-center rounded-lg ring-1 ring-neutral-500">
                    <h1 className = "text-3xl sm:text-[2.1rem] md:text-[40px] font-bold text-neutral-100">
                        Liam Mack Snyder
                    </h1>
                 </div>
                <Body className = "max-w-2xl mt-6">
                     Full-stack developer and designer with a dual focus in Computer Information Systems and Marketing. I build fast, clean web experiences from the ground up.
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