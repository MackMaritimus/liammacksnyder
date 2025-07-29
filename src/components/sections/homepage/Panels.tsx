
// Panels Section. Contains various panels with the same size but different functionalities

import Panel from "@/components/ui/Panel";

export default function Panels () {

    return (
        <section className = "w-fit grid grid-cols-1 min-[710px]:grid-cols-2 items-center justify-center gap-6 overflow-hidden mb-12 px-12">
            
            <Panel 
                squareImage = "/Resume_Download_Square_Panel.png"
                rectangleImage = "/Resume_Download_Rectangle_Panel.png"
                href = "/Liam_Snyder_Resume.pdf"
                alt = "Download Liam Snyder's Resume"
            />
            
        </section>
    );

}