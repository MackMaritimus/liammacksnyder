import Socials from "@/components/ui/Socials";

// Footer Section With Disclaimers and Email. Has Links to GitHub Website Deployment Repo and Personal Archive Repo

export default function HPFooter () {
    
    return (    
        <section className = "w-full h-auto flex flex-col px-6 text-zinc-300 items-start">

                {/* Socials */}
                <Socials className = "mb-12 mt-6 ml-auto" width = "30"/>

                {/* Open-Source Text/Link */}
                <div className = "flex flex-col items-start h-full ml-auto">
                    <a href = "https://github.com/MackMaritimus/liammacksnyder" className = "text-zinc-700 hover:text-zinc-600 hover:underline" target = "_blank" rel = "noopener noreferrer">
                        Website is open-source on GitHub
                    </a>
                </div>

                {/* Portfolio Content Copyright Disclaimer */}
                <div className = "flex flex-col items-start h-full ml-auto mb-4">
                    <a href = "https://github.com/MackMaritimus/liammacksnyder/blob/89398994a353e9637af04295f9b977b16cd078e6/public/LICENSE-ART" className = "text-zinc-700 hover:text-zinc-600 hover:underline" target = "_blank" rel = "noopener noreferrer">
                        © Liam Mack Snyder - Portfolio Content is Copyright-Protected 
                    </a>
                </div>



        </section>
    );
}