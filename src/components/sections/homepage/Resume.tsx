import Head2 from "@/components/ui/Head2";
import Head3 from "@/components/ui/Head3";
import Body from "@/components/ui/Body";
import BodySmall from "@/components/ui/BodySmall";
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
                            description= "I did something cool here!"
                        />

                        <BubbleTable
                            title = "High School Diploma" 
                            date = "Graduation May 2022" 
                            company = "Centaurus High School"
                            location = "Lafayette, CO"
                        />

                    </div>
                </div>

        </section>
    )
}