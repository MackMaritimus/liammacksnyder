import Socials from "@/components/ui/Socials";

// Footer Section With Disclaimers and Email. Has Links to GitHub Website Deployment Repo and Personal Archive Repo

export default function HPFooter () {
    
    return (    
        <section className = "w-full h-auto flex flex-col px-6 text-zinc-300 items-start">

                {/* Socials */}
                <Socials className = "mb-12 mt-6 ml-auto" width = "w-8"/>

                {/* Portfolio Content Copyright Disclaimer */}
                <div className = "flex flex-col items-start h-full ml-auto mb-4 text-right mt-2">
                    <a href = "https://github.com/MackMaritimus/liammacksnyder" className = "text-zinc-700 hover:text-zinc-600 hover:underline" target = "_blank" rel = "noopener noreferrer">
                        © Liam Mack Snyder <br/> Website Code Viewable on GitHub
                    </a>
                </div>



        </section>
    );
}