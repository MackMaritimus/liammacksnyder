
// Small Body Text. Takes Text as Children and ClassName

interface BodySmallProps {
    children?: React.ReactNode;
    className?: string;
}

export default function BodySmall ({ children, className = "" }:BodySmallProps) {
    
    return (
        <p className = {"text-sm text-neutral-300" + " " + className}>
            {children}
        </p>
    );
}