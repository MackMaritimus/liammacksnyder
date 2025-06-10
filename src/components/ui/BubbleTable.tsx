import Body from "@/components/ui/Body";
import BodySmall from "@/components/ui/BodySmall";

// Bubble Component, Made for Resume Section. Takes Title, Date, Company, Location, and Description as Params.

interface BubbleTableProps {
    title?: string;
    date?: string;
    company?: string;
    location?: string;
    description?: string;
    bullets?: string;
}

function BubbleTable ({ title="", date="", company="", location="", description="",bullets=""}:BubbleTableProps) {
    
    return (
    
    <div className = "bg-neutral-800 rounded-[8px] ring-12 ring-neutral-800">               
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
         
        <BodySmall className = "text-left max-w-150">
            {description}
        </BodySmall>

        <BodySmall className = "text-left max-w-150 whitespace-pre-line ml-6">
            {bullets}
        </BodySmall>
    </div>
    );
}

export default BubbleTable;