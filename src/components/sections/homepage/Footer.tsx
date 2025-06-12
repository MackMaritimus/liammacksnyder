import Table from "@/components/ui/Table";

// Footer Section With Disclaimers and Email. Has Links to GitHub Website Deployment Repo and Personal Archive Repo

export default function HPFooter () {
    
    return (
        
        <section className = "w-full h-auto flex px-6 bg-zinc-900 text-zinc-300 gap-12">
            
            <Table 
                rows = "2" 
                cols = "2"
                className = "w-full items-center">
                
                {/* GitHub Logo */}
                <div className = "flex flex-col items-start bg-rose-80 min-[750px]:mb-4 max-[750px]:mt-6 w-fit h-full row-start-1 col-start-1 min-[750px]:row-start-2">
                    <img
                        src = "/GitHub_Invertocat_Light.svg"
                        className = "w-10 h-auto"
                    />
                </div>

                {/* Open-Source Text/Link */}
                <div className = "flex flex-col items-start h-full row-start-2 col-start-1 min-[750px]:ml-14 ">
                    <a href = "https://github.com/MackMaritimus/liammacksnyder" className = "text-neutral-300 underline" target = "_blank" rel = "noopener noreferrer">
                        Website is open-source on GitHub
                    </a>
                </div>

                {/* Contact Me */}
                <p className = "mt-4 mb-12 row-start-1 col-start-2 text-right">
                    Contact me at:{" "}
                    <a href = "mailto:LiamMackSnyder@outlook.com" className = "text-sky-400 hover:underline">
                        LiamMackSnyder@outlook.com
                    </a>
                </p>

                {/* Portfolio Content Copyright Disclaimer */}
                <div className = "flex flex-col items-start h-full row-start-2 col-start-2">
                    <a href = "https://github.com/MackMaritimus/liammacksnyder/blob/89398994a353e9637af04295f9b977b16cd078e6/public/LICENSE-ART" className = "text-right text-zinc-600 ml-auto underline" target = "_blank" rel = "noopener noreferrer">
                        © Liam Mack Snyder - Portfolio Content is Copyright-Protected. 
                    </a>
                </div>

            </Table>

        </section>
    );
}