"use client";
import BulletList from "./BulletList";

// This class contains two componenets; BubbleTable and Bubble1

// Bubble Table Component, Made for Resume Section. Takes Title, Date, Company, Location, Description, className, onClick, and isActive to determine on click behavior, as Params.

interface BubbleTableProps {
    title?: string;
    date?: string;
    company?: string;
    location?: string;
    description?: string;
    bullets?: string[];
    className?: string;
    onClick?: () => void;
}

function BubbleTable ({ title="", date="", company="‎", location="‎", description="", bullets = [], className = "", onClick}:BubbleTableProps) {

    const ClassName = `bg-eggshell rounded-[16px] p-4 text-night shadow-default ${className}`

    return (


        <div 
            className = {ClassName} onClick = {onClick}>

            <div className = "max-[350px]:text-xs max-[430px]:text-sm grid grid-cols-2 text-bottom">
                <p className = "text-left col-start-1 row-start-1 font-bold">
                    {title}
                </p>
        
                <p className = "max-[350px]:text-xs max-[430px]:text-sm text-right col-start-2 row-start-1 font-bold">
                    {date}
                </p>
        
                <p className = "max-[350px]:text-xs max-[430px]:text-sm text-left col-start-1 row-start-2 italic">
                    {company}
                </p>
            
                <p className = "max-[350px]:text-xs max-[430px]:text-sm text-right text-top col-start-2 row-start-2 italic">
                    {location}
                </p>
            </div>

            <p className = "text-sm text-left">
                {description}
            </p>

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
        <div className = "shadow-default text-night flex flex-col text-center bg-linear-to-br from-pink-500/70 xl:from-pink-600/90 to-cyan-600/70 xl:to-cyan-700/90 rounded-4xl mx-auto max-w-full w-full md:w-190 justify-center md:justify-start items-center">
            <div className = "w-full bg-white/10 p-6 xl:p-15 rounded-4xl space-y-6">
                <div className = "shadow-default bg-eggshell px-6 py-4 w-[95%] sm:w-[85%] xl:w-[75%] mx-auto rounded-full">
                    <h3 className = "max-[430px]:text-base text-2xl font-bold ">
                        {header}
                    </h3>
                </div>
                {children}
            </div>
        </div>
    );
}

export { BubbleTable, Bubble1 };