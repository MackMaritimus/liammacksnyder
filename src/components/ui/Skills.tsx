
// Skills component with simple list of Languages and Frameworks, Tools, and Other Skills I have.

'use client'
import ExpandTable from "./ExpandTable"

export default function Skills () {


    return (
        <div className = "bg-linear-to-br from-neutral-800 to-gray-900 rounded-xl p-4 my-6 shadow-default">
            <ExpandTable 
                arrowWidth = "w-12"
                expandedHeight = "max-h-full"
                collapsedHeight = "max-h-20 md:max-h-16 xl:max-h-12"
                expandTableClassName = "mt-6"
                arrowClassName = "mx-auto mt-6"
                >

                <div className = "grid grid-cols-3 grid-rows-[min-content_min-content_auto] gap-6">
                    {/* Languages and Frameworks Column */}
                    <div className = "bg-teal-700 rounded-lg flex items-center justify-center shadow-default">
                        <p className = "text-center">
                            Languages and Frameworks
                        </p>
                    </div>
                    <div className = "row-start-2">
                        <p className = "text-center text-base text-wrap"> 
                            Next.js <br />
                            Tailwind CSS <br />
                            Typescript <br />
                            Javascript <br />
                            React <br />
                            React Native <br />
                            Java <br />
                            C# <br />
                            Python <br />
                            SQL
                        </p>
                    </div>


                    {/* Tools Column */}
                    <div className = "bg-amber-600 rounded-lg flex items-center justify-center shadow-default">
                        <p className = "text-center">
                            Tools
                        </p>
                    </div>
                    <div className = "row-start-2">
                        <p className = "text-center text-base text-wrap row-start-2"> 
                            VS Code <br />
                            Snowflake <br />
                            Eclipse <br />
                            Git <br />
                            GitHub <br />
                            Unity <br />
                            Vercel <br />
                            Figma <br />
                            Adobe Suite <br />
                            Notion
                        </p>
                    </div>
        
                    {/* Other Column */}
                    <div className = "bg-emerald-800 rounded-lg flex items-center justify-center shadow-default">
                        <p className = "text-center">
                            Other
                        </p>
                    </div>
                    <div className = "row-start-2">
                        <p className = "text-center text-base text-wrap row-start-2"> 
                            Debugging <br />
                            Troubleshooting <br />
                            Full-Stack Development <br />
                            Scrum/Agile <br />
                            Documentation <br />
                            UX 
                        </p>
                    </div>
                </div>
            </ExpandTable>
        </div>
    );
}