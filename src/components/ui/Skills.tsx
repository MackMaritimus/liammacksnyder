
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
            expandTableClassName="mt-6 max-w-lg w-full"
            arrowClassName="mx-auto mt-6"
        >
            <SkillsContent/>
        </ExpandTable>
    );
}

function SkillsContent() {
    const { expanded } = useContext(ExpandContext);

    return (

        <div className = "grid grid-cols-2 gap-6 text-sm max-[430px]:text-xs text-wrap">
            {/* Languages and Frameworks Column */}
            <div className = "shadow-default flex flex-col w-full">
                <div className = {`flex flex-col h-full ${expanded ? "rounded-lg" : ""}`}>
                    <div className = {`bg-cyan-600/90 flex items-center justify-center min-h-12 p-2 ${expanded ? "rounded-t-lg" : "rounded-lg"}`}>
                        <p>Technologies</p>
                    </div>   
                    <div className = {`bg-gray-800/60 w-full h-full flex text-center justify-center rounded-b-lg ${expanded ? "" : "hidden" }`}>   
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
            <div className = "shadow-default flex flex-col w-full">
                <div className = {`flex flex-col h-full ${expanded ? "rounded-lg" : ""}`}>
                    <div className = {`bg-pink-600/90 flex items-center justify-center min-h-12 p-2 ${expanded ? "rounded-t-lg" : "rounded-lg"}`}>
                        <p>Tools</p>
                    </div>
                    <div className = {`bg-fuchsia-950/50 w-full h-full flex text-center justify-center rounded-b-lg ${expanded ? "" : "hidden" }`}>
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

        </div>
    );
}
