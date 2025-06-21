"use client";
import Head3 from "./Head3";
import Body from "@/components/ui/Body";
import BodySmall from "@/components/ui/BodySmall";
import BulletList from "./BulletList";

// Bubble Table Component, Made for Resume Section. Takes Title, Date, Company, Location, and Description as Params.

interface BubbleTableProps {
    title?: string;
    date?: string;
    company?: string;
    location?: string;
    description?: string;
    bullets?: string[];
}

function BubbleTable ({ title="", date="", company="", location="", description="", bullets = []}:BubbleTableProps) {

    return (
        <div 
            className = "mt-16 bg-eggshell rounded-[8px] ring-16 ring-eggshell">    

            <div className = "grid grid-cols-2 mt-12 text-bottom">
                <Body className = "text-left col-start-1 row-start-1 font-bold">
                    {title}
                </Body>
        
                <Body className = "text-right col-start-2 row-start-1 font-bold">
                    {date}
                </Body>
        
                <Body className = "text-left col-start-1 row-start-2 italic">
                    {company}
                </Body>
            
                <Body className = "text-right text-top col-start-2 row-start-2 italic">
                    {location}
                </Body>
        
            </div>
            
            <BodySmall className = "text-left">
                {description}
            </BodySmall>

            <BulletList items = {bullets} className = "text-sm"/>

           

            
        </div>
    );
}

// Bubble1 Component, Made for Resume Section. Header as param and BubbleTables as children.

interface Bubble1Props {
    header?: string
    children?: React.ReactNode;
}

function Bubble1({ children, header = "" }:Bubble1Props) {

    return (
        <div className = "text-night flex flex-col text-center bg-linear-to-br from-pink-700 to-cyan-700 rounded-4xl mx-auto max-w-full w-full md:w-190 p-10 md:p-15 justify-center md:justify-start items-center">
            <div className = "w-full">
                <div className = "bg-eggshell px-6 py-4 w-[95%] sm:w-[85%] xl:w-[75%] mx-auto rounded-full">
                    <Head3>
                        {header}
                    </Head3>
                </div>
                {children}
            </div>
        </div>
    );
}

export { BubbleTable, Bubble1 };