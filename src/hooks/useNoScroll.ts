import { useEffect } from "react";

// Disables scrollbar when the componenet this hook exists inside is rendered

export default function useNoScroll () {
    useEffect(() => {
        // Disable scrolling
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        // Restore scrolling on unmount
        return () => {
        document.body.style.overflow = originalOverflow;
        };
    }, []);
}