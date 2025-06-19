
// Socials Components Containing Linked LinkedIn, GitHub, and Email Icons. Takes className for surrounding Div and icon "width" as params.

interface SocialsProps {
    className?: string;
    width?: string;
}

export default function Socials ({className = "", width = "9"}:SocialsProps) {

    return (
        <div className = {"flex flex-row gap-x-5" + " " + className}>

            <a href = "https://www.linkedin.com/in/liammacksnyder" target = "_blank" rel = "noopener noreferrer" className = "flex">
                <img
                    src = "/Linkedin_white_icon.svg"
                    className = {"h-auto min-w-8 w-" + width}
                    alt = "Liam Mack Snyder LinkedIn"
                />
            </a>

            <a href = "https://github.com/MackMaritimus" target = "_blank" rel = "noopener noreferrer" className = "flex">
                <img
                    src = "/GitHub_Invertocat_Light.svg"
                    className = {"h-auto min-w-8 w-" + width}
                    alt = "Liam Mack Snyder GitHub"
                />
            </a>

            <a href = "mailto:LiamMackSnyder@outlook.com" target = "_blank" rel = "noopener noreferrer" className = "flex">
                <img
                    src = "/Envelope_Icon.svg"
                    className = {"h-auto min-w-8 w-" + width}
                    alt = "Liam Mack Snyder Email"
                />
            </a>
            
        </div>
    );

}