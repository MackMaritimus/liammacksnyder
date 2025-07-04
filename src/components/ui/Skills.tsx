
// Skills component with simple list of Languages and Frameworks, Tools, and Other Skills I have.

'use client'
import ExpandTable, { ExpandContext } from "./ExpandTable";
import { useContext } from "react";

export default function Skills () {
    return (
        <ExpandTable 
            arrowWidth="w-12"
            expandedHeight="max-h-full"
            collapsedHeight="max-h-23"
            expandTableClassName="mt-12"
            arrowClassName="mx-auto mt-6"
        >
            <SkillsContent/>
        </ExpandTable>
    );
}

function SkillsContent() {
    const { expanded } = useContext(ExpandContext);

    return (
        <div className = "grid grid-cols-3 gap-6 p-1 text-sm max-[580px]:text-xs break-all">
            {/* Languages and Frameworks Column */}
            <div className = "shadow-default flex flex-col">
                <div className = {`flex flex-col h-full ${expanded ? "ring-2 ring-sky-600 rounded-lg" : ""}`}>
                    <div className = {`bg-sky-600 flex items-center justify-center min-h-22 min-[530px]:min-h-16 p-2 ${expanded ? "rounded-t-lg" : "ring-2 ring-sky-600 rounded-lg"}`}>
                        <p className = "text-center">Languages and Frameworks</p>
                    </div>   
                    <div className = {`bg-gray-800 w-full h-full flex text-center justify-center rounded-b-lg ${expanded ? "" : "hidden" }`}>   
                        <p className = "text-center text-wrap m-1 my-4">
                            Next.js <br/>
                            Tailwind CSS <br/>
                            Typescript <br/>
                            Javascript <br/>
                            React <br/>
                            React Native <br/>
                            Java <br/>
                            C# <br/>
                            Python <br/>
                            SQL
                        </p>
                    </div> 
                </div>
            </div>

            {/* Tools Column */}
            <div className = "shadow-default flex flex-col">
                <div className = {`flex flex-col h-full ${expanded ? "ring-2 ring-pink-600 rounded-lg" : ""}`}>
                    <div className = {`bg-pink-600 flex items-center justify-center min-h-22 min-[530px]:min-h-16 p-2 ${expanded ? "rounded-t-lg" : "ring-2 ring-pink-600 rounded-lg"}`}>
                        <p className = "text-center">Tools</p>
                    </div>
                    <div className = {`bg-fuchsia-950 w-full h-full flex text-center justify-center rounded-b-lg ${expanded ? "" : "hidden" }`}>
                        <p className = "text-center text-wrap m-1 my-4">
                            VS Code <br/>
                            Snowflake <br/>
                            Eclipse <br/>
                            Git <br/>
                            GitHub <br/>
                            Unity <br/>
                            Vercel <br/>
                            Figma <br/>
                            Adobe Suite <br/>
                            Notion
                        </p>
                    </div>
                </div>
            </div>

            {/* Other Column */}
            <div className = "shadow-default flex flex-col">   
                <div className = {`flex flex-col h-full ${expanded ? "ring-2 ring-slate-700 rounded-lg" : ""}`}>
                    <div className = {`bg-slate-700 flex items-center justify-center min-h-22 min-[530px]:min-h-16 p-2 ${expanded ? "rounded-t-lg" : "ring-2 ring-slate-700 rounded-lg"}`}>
                        <p className = "text-center">Other</p>
                    </div>
                    <div className = {`bg-gray-950 w-full h-full flex text-center justify-center rounded-b-lg ${expanded ? "" : "hidden" }`}>
                        <p className = "text-center m-1 my-4">
                            Debugging <br/>
                            Troubleshooting <br/>
                            Full-Stack Development <br/>
                            Scrum/Agile <br/>
                            Documentation <br/>
                            UX
                        </p>
                    </div>
                </div>
            </div> 
        </div>
    );
}
