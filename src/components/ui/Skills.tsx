
// Skills component with list two cards containing things I know, one being tools, and the other technologies.
// Renders the name of the entry with an an icon next to it and/or link to it's website if applicable

'use client'
import ExpandTable, { ExpandContext } from "./ExpandTable";
import { useContext } from "react";
import VscodeIcon from "@/assets/vscode.svg";
import SnowflakeIcon from "@/assets/snowflake-bug-color-rgb.svg";
import EclipseIcon from "@/assets/eclipse_original.svg";
import GitIcon from "@/assets/git_original.svg";
import GitHubIcon from "@/assets/github_invertocat_light.svg";
import UnityIcon from "@/assets/unity_original.svg";
import VercelIcon from "@/assets/vercel_original.svg";
import FigmaIcon from "@/assets/figma_original.svg";
import NotionIcon from "@/assets/notion_original.svg";
import NextJSIcon from "@/assets/nextjs_original.svg";
import TailwindIcon from "@/assets/tailwindcss_original.svg";
import TypeScriptIcon from "@/assets/typescript_original.svg";
import JavaScriptIcon from "@/assets/javascript_original.svg";
import ReactIcon from "@/assets/react_original.svg";
import JavaIcon from "@/assets/java_original.svg";
import CSharpIcon from "@/assets/csharp_original.svg";
import PythonIcon from "@/assets/python_original.svg";
import DataBaseIcon from "@/assets/fa_solid_database.svg"
import MySQLIcon from "@/assets/mysql_original.svg"
import UbuntuIcon from "@/assets/ubuntu_logo.svg"
import PostgresqlIcon from "@/assets/Postgresql_elephant.svg"
import NodejsIcon from "@/assets/node.js_logo.svg"
import ApacheHTTPIcon from "@/assets/apache_feather_logo.svg"
import NginxIcon from "@/assets/nginx_logo.svg"

// Technologies array const with tool names and their icons
const technologies: Skill[] = [
    { title: "Ubuntu", Icon: UbuntuIcon, href: "https://ubuntu.com/", className: "mt-0" },
    { title: "Apache HTTPD", Icon: ApacheHTTPIcon, href: "https://httpd.apache.org/" },
    { title: "Postgresql", Icon: PostgresqlIcon, href: "https://www.postgresql.org/" },
    { title: "Nginx", Icon: NginxIcon, href: "https://nginx.org/en/" },
    { title: "Node.js", Icon: NodejsIcon, href: "https://nodejs.org/en" },
    { title: "Next.js", Icon: NextJSIcon, href: "https://nextjs.org/" },
    { title: "Tailwind CSS", Icon: TailwindIcon, href: "https://tailwindcss.com/" },
    { title: "Typescript", Icon: TypeScriptIcon, href: "https://www.typescriptlang.org/" },
    { title: "Javascript", Icon: JavaScriptIcon, href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { title: "React", Icon: ReactIcon, href: "https://react.dev/" },
    { title: "React Native", Icon: null, href: "https://reactnative.dev/" },
    { title: "Java", Icon: JavaIcon, href: "https://www.java.com/en/" },
    { title: "C#", Icon: CSharpIcon, href: "https://dotnet.microsoft.com/en-us/languages/csharp" },
    { title: "Python", Icon: PythonIcon, href: "https://www.python.org/" },
    { title: "SQL", Icon: DataBaseIcon, href: "https://www.w3schools.com/sql/" },
];

// Tools array const with tool names and their icons
const tools: Skill[] = [
    { title: "VS Code", Icon: VscodeIcon, href: "https://code.visualstudio.com/", className: "mt-0" },
    { title: "Eclipse", Icon: EclipseIcon, href: "https://eclipseide.org/" },
    { title: "Snowflake", Icon: SnowflakeIcon, href: "https://www.snowflake.com/en/" },
    { title: "MySQL Workbench", Icon: MySQLIcon, href: "https://www.mysql.com/products/workbench/" },
    { title: "Git", Icon: GitIcon, href: "https://git-scm.com/" },
    { title: "GitHub", Icon: GitHubIcon, href: "https://github.com/" },
    { title: "Unity", Icon: UnityIcon, href: "https://unity.com/" },
    { title: "Vercel", Icon: VercelIcon, href: "https://vercel.com/" },
    { title: "Figma", Icon: FigmaIcon, href: "https://www.figma.com/" },
    { title: "Adobe Suite", Icon: null, href: "https://www.adobe.com/creativecloud.html" },
    { title: "Notion", Icon: NotionIcon, href: "https://www.notion.so/" },
];

// Skill type definition
interface Skill {
    title: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    href?: string;
    className?: string;
}

// SkillEntry function to format skill title with icon. 
function SkillEntry({ title, Icon, href = "", className = "mt-2"}: { title: string; Icon: React.FC<React.SVGProps<SVGSVGElement>>; href?: string; className?: string }) {
    
    return href ? (
        <a href = {href} target = "_blank" rel = "noopener noreferrer" className = "hover:underline">
            <p className = {className}>
                {title} {Icon && <Icon className = "ml-1 inline-block w-6 h-6" />}
            </p>
        </a>
    ) : (
        <p className = {className}>
            {title} {Icon && <Icon className = "ml-1 inline-block w-6 h-6" />}
        </p>
    )
    
}

function SkillsContent() {
    const { expanded } = useContext(ExpandContext);
    const zStack = ['z-30', 'z-20', 'z-10'];


    return (

        <div className = "grid grid-cols-2 gap-6 text-sm max-[430px]:text-xs text-wrap">
            
            {/* Technologies Card */}
            <div className = "shadow-default flex flex-col w-full">
                <div className = {`flex flex-col h-full ${expanded ? "rounded-lg" : ""}`}>
                    <div className = {`bg-linear-to-br from-sky-600/90 to-sky-700/90 flex flex-col ${expanded ? "min-[430px]:grid min-[430px]:grid-cols-1" : "min-[430px]:grid min-[430px]:grid-cols-[9fr_7fr]"} items-center justify-center min-h-12 p-2 ${expanded ? "rounded-t-lg" : "rounded-lg"}`}>
                        <p className = {`text-base max-[500px]:text-sm ${expanded? "mx-auto" : "min-[430px]:ml-auto min-[430px]:ml-6"} `}>
                            Technologies
                        </p>
                        <div className = {`min-[430px]:ml-2 max-[430px]:mt-2 min-[430px]:mr-auto bg-gray-800/90 p-1 px-2 rounded ${expanded? "hidden" : "" }`}>
                            {/* Render icon stack by card name if card isn't currently expanded*/}
                            {!expanded && (
                                <div className="mx-auto min-[430px]:-top-3 flex">
                                {technologies.slice(0, 3).map(({ Icon }, i) =>
                                    Icon ? (
                                    <div
                                        key={i}
                                        className={`w-6 h-6 ${zStack[i]} ${i !== 0 ? "-ml-2" : ""}`}
                                    >
                                        <Icon className="w-full h-full drop-shadow-default" />
                                    </div>
                                    ) : null
                                )}
                                </div>
                            )}
                        </div> 
                    </div>

                    <div className = {`bg-gray-800/60 w-full h-full flex text-center justify-center rounded-b-lg ${expanded ? "" : "hidden" }`}>   
                        <div className = "text-center text-wrap m-1 my-4">
                            {technologies.map(({ title, Icon, href, className }) => (
                                <SkillEntry key={title} title={title} Icon={Icon} href = {href} className = {className}/>
                            ))}
                        </div>
                    </div> 
                </div>
            </div>

            {/* Tools Card */}
            <div className = "shadow-default flex flex-col w-full">
                <div className = {`flex flex-col h-full ${expanded ? "rounded-lg" : ""}`}>
                    <div className = {`bg-linear-to-br from-pink-600/90 to-pink-500/90 flex flex-col ${expanded ? "min-[430px]:grid min-[430px]:grid-cols-1" : "min-[430px]:grid min-[430px]:grid-cols-[5fr_7fr]"} items-center justify-center min-h-12 p-2 ${expanded ? "rounded-t-lg" : "rounded-lg"}`}>
                        <p className = {`text-base max-[500px]:text-sm ${expanded? "mx-auto" : "min-[430px]:ml-auto min-[430px]:ml-6"} `}>
                            Tools
                        </p>
                        <div className = {`min-[430px]:ml-2 max-[430px]:mt-2 min-[430px]:mr-auto bg-fuchsia-950/97 p-1 px-2 rounded ${expanded? "hidden" : "" }`}>
                            {/* Render icon stack by card name if card isn't currently expanded*/}
                            {!expanded && (
                                <div className="mx-auto min-[430px]:-top-3 flex">
                                {tools.slice(0, 3).map(({ Icon }, i) =>
                                    Icon ? (
                                    <div
                                        key={i}
                                        className={`w-6 h-6 ${zStack[i]} ${i !== 0 ? "-ml-2" : ""}`}
                                    >
                                        <Icon className="w-full h-full drop-shadow-default" />
                                    </div>
                                    ) : null
                                )}
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div className = {`bg-fuchsia-950/50 w-full h-full flex text-center justify-center rounded-b-lg ${expanded ? "" : "hidden" }`}>
                        <div className = "text-center text-wrap m-1 my-4">
                            {tools.map(({ title, Icon, href, className }) => (
                                <SkillEntry key={title} title={title} Icon={Icon} href = {href} className = {className}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

// Skills function puts skills into expand table
export default function Skills () {
    return (
        <ExpandTable 
            arrowWidth="w-12"
            expandedHeight="max-h-full"
            collapsedHeight="max-h-23"
            expandTableClassName="mt-6 max-w-lg w-full"
            arrowClassName="mx-auto mt-6"
        >
            <SkillsContent/>
        </ExpandTable>
    );
}