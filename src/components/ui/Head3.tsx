
// Formatted Heading 3. Takes Text as Children and ClassName

interface Head3Props {
    children?: React.ReactNode;
    className?: string;
}

export default function Head3 ({ children, className = "" }:Head3Props) {

    return (
        <h3 className = {"text-2xl font-bold" + " " + className}>
            {children}
        </h3>
    );
}