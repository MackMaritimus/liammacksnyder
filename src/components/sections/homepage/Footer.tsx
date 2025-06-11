
// Footer Section With Disclaimers and Email. Has Links to GitHub Website Deployment Repo and Personal Archive Repo

export default function HPFooter () {
    
    return (
        
        <section className = "w-full h-auto flex px-6 bg-zinc-900 text-zinc-300 gap-12">
            
            <div className = "max-w-full h-auto flex flex-wrap flex-grow text-left items-start min-[856px]:items-end gap-x-3">
                <img
                    src = "/GitHub_Invertocat_Light.svg"
                    className = "w-10 h-auto mt-4 mb-3"
                />

                <a href = "https://github.com/MackMaritimus/liammacksnyder" className = "text-left text-neutral-300 mb-4 mt-auto underline" target = "_blank" rel = "noopener noreferrer">
                    Website is open-source on GitHub
                </a>
            </div>    

            <div className = "max-w-full h-auto flex-col flex-grow flex-wrap text-right">
                <p className = "mt-4 mb-12">
                    Contact me at:{" "}
                    <a href = "mailto:LiamMackSnyder@outlook.com" className = "text-sky-400 hover:underline">
                        LiamMackSnyder@outlook.com
                    </a>
                </p>
                <div className = "mb-4">
                    <a href = "https://github.com/MackMaritimus/liammacksnyder/blob/89398994a353e9637af04295f9b977b16cd078e6/public/LICENSE-ART" className = "mb-4 text-zinc-600 underline" target = "_blank" rel = "noopener noreferrer">
                        © Liam Mack Snyder - Portfolio Content is Copyright-Protected. 
                    </a>
                </div>
            </div>
        </section>    
    );
}