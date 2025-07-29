
// Table Component That Takes Rows and Cols as Params. Must Have Both

interface TableProps {
    rows: string;
    cols: string;
    className: string;
    children?: React.ReactNode;
}

export default function Table ({ rows , cols, className = "", children}:TableProps) {

    const ClassName = `grid grid-rows-${rows} grid-cols-${cols} ${className}`

    return (
        <div className = {ClassName}>
            {children}
        </div>
    );
}