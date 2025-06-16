
// Header bubble which surrounds text, taking children and optional additional tailwind classes

interface HeaderBubbleProps {
    children?: React.ReactNode;
    className?: string;
}

export default function HeaderBubble ({children, className = ""}:HeaderBubbleProps) {

    const ClassName = `px-10 sm:px-24 md:px-44 2xl:px-58 mx-auto h-[100px] sm:h-[150px] bg-zinc-700 flex items-center justify-center rounded-lg ring-1 ring-neutral-500 opacity ${className}` 

    return (

        <div className = {ClassName}>
            {children}
        </div>
        
        
    );
}