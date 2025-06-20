import Body from "@/components/ui/Body";
import BodySmall from "@/components/ui/BodySmall";
import BulletList from "./BulletList";

// Bubble Component, Made for Resume Section. Takes Title, Date, Company, Location, and Description as Params.

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
        <div className = "mt-16 bg-eggshell rounded-[8px] ring-16 ring-eggshell">          
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

export default BubbleTable;