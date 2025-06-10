import Head2 from "@/components/ui/Head2";
import BubbleTable from "@/components/ui/BubbleTable";

// Resume Section With Qualifications

export default function Resume () {

    return (
        
        <section className = "w-full bg-radial from-gray-600 to-zinc-950 flex flex-col mb-0 items-center text-wrap">
            
                <Head2 className = "mt-8">
                    Resume
                </Head2>
                
                <div className = "flex flex-col text-center bg-neutral-900 rounded-full mt-12 mb-12 w-200 h-200 p-10 justify-center items-center">
                    <div>
                        <BubbleTable
                            header = "Education" 
                            title = "B.S. Computer Information Systems" 
                            date = "Graduation Dec 2025" 
                            company = "Colorado State University"
                            location = "Fort Collins, CO"
                            description= "Certification is Business Application Development"
                        />

                        <BubbleTable
                            title = "B.S. Marketing" 
                            date = "Graduation May 2025" 
                            company = "Colorado State University"
                            location = "Fort Collins, CO"
                            description= "Certification is Business to Business Selling"
                        />

                    </div>
                </div>

                <div className = "flex flex-col text-center bg-neutral-900 rounded-full mt-12 mb-12 w-200 h-200 p-10 justify-center items-center">
                    <div>
                        <BubbleTable
                            header = "Professional Experience" 
                            title = "Landscaper" 
                            date = "Jun 2021 - Jun 2023" 
                            company = "Massage the Earth"
                            location = "Lafayette, CO"
                            description = "Delivered client-focused landscape services in a fast-paced small business setting while taking on additional responsibilities including new hire training and job site preparation."    
                        />

                        <BubbleTable
                            title = "Hello" 
                            date = "Goodbye" 
                            company = "No"
                            location = "Yes"
                        />

                    </div>
                </div>

        </section>
    );
}