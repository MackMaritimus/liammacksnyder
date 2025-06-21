import useNoScroll from "@/hooks/useNoScroll";

// Absolutely positioned Static Overlay component that fills and dims the whole screen and takes a child component to display on top inside a styled div.
// Clicking in the dimmed empty background closes the overlay.

interface StaticOverlayProps {
    children?: React.ReactNode;
    onClick?: () => void;
}

export default function StaticOverlay ({children, onClick}:StaticOverlayProps) {
    
    useNoScroll();

    return (
        <div
            className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-6 hover:cursor-pointer"
            onClick={onClick}
        >
            <div onClick={(e) => e.stopPropagation()} className = "flex items-start justify-center bg-linear-to-br from-pink-600 to-cyan-700 sm:max-w-[75%] lg:max-w-[50%] max-h-[80%] rounded-4xl p-6 sm:p-10 ring-6 ring-eggshell hover:cursor-default overflow-y-auto">
                {children}
            </div>
        </div>
    );
}