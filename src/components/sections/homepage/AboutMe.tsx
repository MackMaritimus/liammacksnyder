
// AboutMe Section With My Name, Personal Summary, and Picture of Me

export default function AboutMe () {

    return(
    
        <section className = "grid grid-cols-[1fr_auto_1fr] gap-x-4 w-full mt-16">
        
            {/* Summary Section Text */}
            <div className = "flex col-start-2 flex-col text-center justify-top max-w-full">
                {/* Page Header Background and Text */}
                <div className = "px-10 sm:px-24 md:px-48 2xl:px-58 mx-auto h-[100px] sm:h-[150px] bg-zinc-700 flex items-center justify-center rounded-lg">
                    <h1 className = "text-3xl sm:text-[2.1rem] md:text-4xl font-bold">Liam Mack Snyder</h1>
                 </div>
                <p className = "max-w-2xl px-4 text-lg mx-auto text-gray-300 mt-4 mb-4">
                     Full-stack developer and designer with a dual focus in Computer Information Systems and Marketing. I build fast, clean web experiences from the ground up.
                </p>
            </div> 

            {/* Summary Section Image */}
            <div className = "flex col-start-3 w-full hidden 2xl:block">
            <img 
                src = "/Backhat 2.png" 
                alt = "Profile Picture" 
                className = "w-64 h-auto object-contain mx-auto rounded-xl ring-4 ring-zinc-700"
            />
            </div>  

        </section> 
    );
}