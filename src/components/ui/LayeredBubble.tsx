
// Layered Bubble Experiemental Component

interface LayeredBubbleProps {
    children?: React.ReactNode;
    className?: string;
}

export default function LayeredBubble ({children, className = ""}: LayeredBubbleProps) {
    
    return (
        <div className = "p-2 bg-[#30292F] items-center justify-center flex rounded-lg my-14">
            <div className = "p-2 bg-[#5D737E] items-center justify-center flex rounded-lg">
                <div className = "px-12 py-1 bg-[#FCFCFC] items-center justify-center flex rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}

