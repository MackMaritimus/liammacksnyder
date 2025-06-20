import Head3 from "./Head3";

// Bubble Formatted Background Div Container for use with BubbleTable. Takes Children as Components.

interface Bubble1Props {
    header?: string
    children?: React.ReactNode;
}

function Bubble1({ children, header = "" }:Bubble1Props) {

    return (
       <div className = "text-night flex flex-col text-center bg-linear-to-br from-pink-700 to-cyan-700 rounded-4xl ml-8 mr-8 max-w-full w-full md:w-190 p-10 md:p-15 justify-center md:justify-start items-center">
            <div className = "w-full">
                <div className = "bg-eggshell px-6 py-4 w-[60%] mx-auto rounded-full">
                    <Head3>
                        {header}
                    </Head3>
                </div>
                {children}
            </div>
       </div> 
    );
}

export default Bubble1;