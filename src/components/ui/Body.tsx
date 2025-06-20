
// Default Body Text. Takes Text as Children and ClassName

interface BodyProps {
    children?: React.ReactNode;
    className?: string;
}

export default function Body ({ children, className = "" }:BodyProps) {
    
    return (
        <p className = {"text-md" + " " + className}>
            {children}
        </p>
    );
}