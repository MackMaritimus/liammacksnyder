import Image from "next/image";

// Socials Components Containing Linked LinkedIn, GitHub, and Email Icons. Takes className for surrounding Div and icon "width" as params.

interface SocialsProps {
    className?: string;
    width?: string;
}

export default function Socials ({className = "", width = "9"}:SocialsProps) {

    return (
        <div className = {"flex flex-row gap-x-5" + " " + className}>

            <a href = "https://www.linkedin.com/in/liammacksnyder" target = "_blank" rel = "noopener noreferrer" className = "flex">
                <Image
                    src = "/Linkedin_white_icon.svg"
                    width = {parseInt(width)}
                    height = {parseInt(width)}
                    alt = "Liam Mack Snyder LinkedIn"
                />
            </a>

            <a href = "https://github.com/MackMaritimus" target = "_blank" rel = "noopener noreferrer" className = "flex">
                <Image
                    src = "/GitHub_Invertocat_Light.svg"
                    width = {parseInt(width)}
                    height = {parseInt(width)}
                    alt = "Liam Mack Snyder GitHub"
                />
            </a>

            <a href = "mailto:LiamMackSnyder@outlook.com" className = "flex">
                <Image
                    src = "/Envelope_Icon.svg"
                    width = {parseInt(width)}
                    height = {parseInt(width)}
                    alt = "Liam Mack Snyder Email"
                />
            </a>
            
        </div>
    );

}