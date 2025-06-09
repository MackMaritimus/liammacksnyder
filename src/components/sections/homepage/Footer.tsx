
export default function HPFooter () {
    return (
        <section className = "w-full h-auto flex flex-col px-6 bg-zinc-900 text-zinc-300 text-right">
              
            <p className = "mt-4">
                Contact me at:{" "}
                <a href = "mailto:LiamMackSnyder@outlook.com" className = "text-sky-400 hover:underline">
                    LiamMackSnyder@outlook.com
                </a>
            </p>
            
            <a href = "https://github.com/MackMaritimus/liammacksnyder" className = "ml-auto mt-16 underline">
                Open-Source - Website is open-source on GitHub
            </a>

            <p className = "mb-4 text-zinc-600">
                © Liam Mack Snyder - Portfolio Content is Copyright-Protected. 
            </p>
        </section>    
    );
}