
// Formatted Heading 2. Takes Text as Children and ClassName

interface Head2Props {
    children?:React.ReactNode;
    className?: string;
}

export default function Head2 ({ children, className = ""}:Head2Props) {

    return (
        <h2 className = {"text-3xl font-bold" + " " + className}>
            {children}
        </h2>
    );
}