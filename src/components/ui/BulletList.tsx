
// Bullet List Component That Takes Array of String and Gives Bulleted List with Proper Indentation

interface BulletListProps {
    items: string[];
    className?: string;
}

export default function BulletList ({ items = [], className = "" }:BulletListProps) {

    const ClassName =  `list-disc list-inside px-6 mt-2 space-y-1 text-left ${className}`

    return (
        
        <ul className = {ClassName}> 
            {items.length > 0 && (
                items.map((item, index) => (
                    <li key={index} className = "pl-2 indent-[-1.25rem]">{item}</li>   
                ))
            )}
        </ul>
        
        
    );
}