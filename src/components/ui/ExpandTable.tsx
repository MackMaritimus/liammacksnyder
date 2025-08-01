
// This is a componenet that places a table around another component,
// and limits the height of that other component until the clicking the expand arrow at the bottom of the table

import { useState, createContext } from "react";
import Collapse_Arrow from "@/assets/collapse_arrow.svg";
import Expand_Arrow from "@/assets/expand_arrow.svg";

interface ExpandTableProps {
    arrowWidth: string,
    expandTableClassName?: string,
    arrowClassName?: string,
    expandedHeight: string,
    collapsedHeight: string,
    children: React.ReactNode
}

export const ExpandContext = createContext({ expanded:false })

export default function ExpandTable ({arrowWidth, expandTableClassName = "", arrowClassName = "", expandedHeight, collapsedHeight, children}:ExpandTableProps) {

    const [expanded, setExpanded] = useState(false);
    const expandedClass = `overflow-hidden ${expanded ? expandedHeight : collapsedHeight}`
    const expandTableClassNameConc = `flex flex-col ${expandTableClassName}`
    const arrowClassNameConc = `flex ${arrowClassName}`
    const arrowWidthConc = `${arrowWidth} h-auto`

    

    return (
        <ExpandContext.Provider value = {{ expanded }}>
            <div className = {expandTableClassNameConc}>

                <div className = {expandedClass}>
                    {children}
                </div>


                <div className = {arrowClassNameConc}>
                    
                    <button 
                        className = {`${expanded ? "hidden" : ""}`} 
                        onClick = {() => setExpanded(true)}
                        >
                        
                        <Expand_Arrow
                            className = {arrowWidthConc}
                        />

                    </button>

                    <button 
                        className = {`${expanded ? "" : "hidden"}`}
                        onClick = {() => setExpanded(false)}
                        >
                        
                        <Collapse_Arrow
                            className = {arrowWidthConc}
                        />

                    </button>
                    
                </div>

            </div>
        </ExpandContext.Provider>

    );

}