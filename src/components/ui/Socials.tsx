'use client'
import GitHubIcon from "@/assets/github_invertocat_light.svg";
import LinkedInIcon from "@/assets/linkedin_white.svg";
import MailIcon from "@/assets/envelope_white.svg";


// Socials Components Containing Linked LinkedIn, GitHub, and Email Icons. Takes className for surrounding Div and icon "width" as params.

interface SocialsProps {
    className?: string;
    width?: string;
}

export default function Socials ({className = "", width = "w-9"}:SocialsProps) {

    return (
        <div className = {"flex flex-row gap-x-5" + " " + className}>

            <a href = "https://www.linkedin.com/in/liammacksnyder" target = "_blank" rel = "noopener noreferrer" className = "flex">
                <LinkedInIcon
                    className = {`${width} Zh-auto`}
                />
            </a>

            <a href = "https://github.com/MackMaritimus" target = "_blank" rel = "noopener noreferrer" className = "flex">
                <GitHubIcon
                    className = {`${width} h-auto`}
                />
            </a>

            <a href = "mailto:LiamMackSnyder@outlook.com" className = "flex">
                <MailIcon
                    className = {`${width} h-auto`}
                />
            </a>
            
        </div>
    );

}