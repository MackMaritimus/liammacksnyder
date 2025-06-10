
export default function HPFooter () {
    return (
        <section className = "w-full h-auto flex px-6 bg-zinc-900 text-zinc-300 gap-12">
            
            <div className = "max-w-full h-auto flex flex-wrap flex-grow text-right items-end">
                <img
                    src = "/GitHub_Invertocat_Light.svg"
                    className = "w-10 h-auto mt-4 mb-2"
                />

                <a href = "https://github.com/MackMaritimus/liammacksnyder" className = "text-left text-neutral-300 mb-4 ml-3 mt-6 underline" target = "_blank" rel = "noopener noreferrer">
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
                    <a href = "https://github.com/MackMaritimus/liammacksnyder/blob/ae38728e2b23fb9762996c04e1a65066bc8cf4f9/public/LICENSE-ART" className = "mb-4 text-zinc-600" target = "_blank" rel = "noopener noreferrer">
                        © Liam Mack Snyder - Portfolio Content is Copyright-Protected. 
                    </a>
                </div>
            </div>
        </section>    
    );
}