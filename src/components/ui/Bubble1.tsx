import Head3 from "./Head3";

// Bubble Formatted Background Div Container for use with BubbleTable. Takes Children as Components.

interface Bubble1Props {
    header?: string
    children?: React.ReactNode;
}

function Bubble1({ children, header = "" }:Bubble1Props) {

    return (
       <div className = "flex flex-col text-center bg-linear-to-br from-neutral-900 to-neutral-950 rounded-4xl mt-12 mb-12 ml-8 mr-8 max-w-full md:max-w-200 p-10 md:p-15 justify-center md:justify-start items-center">
            <div>
                <Head3>
                    {header}
                </Head3>
                {children}
            </div>
       </div> 
    )
}

export default Bubble1;