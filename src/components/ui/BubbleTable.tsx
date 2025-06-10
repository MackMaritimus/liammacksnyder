import Head3 from "@/components/ui/Head3";
import Body from "@/components/ui/Body";
import BodySmall from "@/components/ui/BodySmall";

// Bubble Component, Made for Resume Section. Takes Title, Date, Company, Location, and Description as Params.

interface BubbleTableProps {
    header?:string;
    title?: string;
    date?: string;
    company?: string;
    location?: string;
    description?: string;
}

export default function BubbleTable ({ header = "", title = "", date = "", company = "", location = "", description = ""}:BubbleTableProps) {
    
    return (
    <div>               
        <Head3 className = "mt-2">
            {header}
        </Head3>
    
        <div className = "grid grid-cols-2 grid-rows-2 max-w-150 mt-8">
            <Body className = "text-left col-start-1 row-start-1 font-bold">
                {title}
            </Body>
    
            <Body className = "text-right col-start-2 row-start-1 font-bold">
                {date}
            </Body>
    
            <Body className = "text-left col-start-1 row-start-2 italic">
                {company}
            </Body>
    
            <Body className = "text-right col-start-2 row-start-2 italic">
                {location}
            </Body>
    
        </div>
         
        <BodySmall className = "text-left max-w-150 mb-14">
            {description}
        </BodySmall>
    </div>
    );
}

//   <div className = "flex flex-col text-center bg-neutral-900 rounded-full mt-12 mb-12 w-200 h-200 p-10 justify-center items-center">   