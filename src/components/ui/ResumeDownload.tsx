import Image from "next/image";


// Resume Download button componenet. Takes no parameters

export default function ResumeDownload () {

    return (
        <a href = "Liam_Snyder_Resume_CIS.pdf" download className = "justify-center flex bg-sky-950 mb-24 rounded-4xl">
            <div className = "flex flex-wrap xl:grid xl:grid-cols-[7fr_4fr] max-[517px]:max-w-[300px] max-w-[470px] xl:w-[500px] md:h-auto bg-linear-to-bl from-pink-600/80 to-cyan-700/90 rounded-4xl items-center justify-center shadow-default gap-6 p-6">
                            
                <p className = "text-white text-center xl:text-left mx-4 xl:ml-6 my-auto xl:col-start-1 text-5xl font-bold w-56">
                    Resume  
                </p>
            
                <Image
                    src = "Download_Icon_2.svg"
                    className = "xl:col-start-2 fill-midnight"
                    width = "140"
                    height = "140"
                    alt = "Download Liam Snyder's Resume"
                />
            </div>
        </a>
    );
}