import BubbleTable from "@/components/ui/BubbleTable";
import Bubble1 from "@/components/ui/Bubble1";
import CompDivider from "@/components/ui/CompDivider";

// Resume Section With Qualifications

export default function Resume () {

    return (
        <section className = "w-full flex flex-col mb-0 items-center text-wrap">
                
                {/* Education Bubble */}
                <Bubble1 header = "Education">
                    
                    {/* B.S. Computer Information Systems, CSU */}
                    <BubbleTable
                        title = "B.S. Computer Information Systems" 
                        date = "Graduation Dec 2025" 
                        company = "Colorado State University"
                        location = "Fort Collins, CO"
                        description = "Certification in Business Application Development"
                    />
                    
                    {/* B.S. Marketing, CSU */}
                    <BubbleTable
                        title = "B.S. Marketing" 
                        date = "Graduation Dec 2025" 
                        company = "Colorado State University"
                        location = "Fort Collins, CO"
                        description = "Certification in Business to Business Selling"
                    />
                </Bubble1>
    
                <CompDivider/>
                
                {/* Professional Experience Bubble */}
                <Bubble1 header = "Professional Experience">
                    
                    {/* Landscaper Position */}
                    <BubbleTable
                        title = "Landscape Crew Lead" 
                        date = "Jun 2021 - Jun 2023" 
                        company = "Massage the Earth"
                        location = "Lafayette, CO"
                        description = "Delivered client-focused landscape services in a fast-paced small business setting while taking on additional responsibilities including new hire training and job site preparation."
                        bullets = {[
                            "Led physically demanding work under pressure, meeting tight deadlines while maintaining precision and professionalism",
                            "Trained 3 new team members on procedures, equipment, and customer interaction",
                            "Supported planning and execution of multi-step projects, helping prioritize tasks, allocate resources, and track progress",
                            "Acted as on-site point of contact, directly managing client expectations and resolving issues to uphold quality standards and satisfaction"]}
                    />

                    {/* Student Teller Position */}
                    <BubbleTable
                        title = "Student Teller" 
                        date = "Jun 2019 - Jan 2021" 
                        company = "Premier Memebers Credit Union"
                        location = "Louisville, CO"
                        description = "Provided high-volume transactional support and member-facing service with a focus on accuracy, professionalism, and confidentiality in a regulated financial environment."
                        bullets = {[
                            "Prevented 2 cases of check fraud through proactive verification and awareness",
                            "Processed daily cash transactions up to $10,000",
                            "Performed vault auditing and participated in secure opening/closing procedures",
                            "Operated within strict compliance protocols and confidentiality policies",
                            "Delivered member-focused service while managing long lines and high-pressure situations"]}
                    />
                </Bubble1>

                <CompDivider/>
                
                {/* Projects Bubble */}
                <Bubble1 header = "Projects">
                    
                    {/* Landscaper Position */}
                    <BubbleTable
                        title = "Personal Vercel Website" 
                        date = "May 2025 - Present" 
                        description = "Currently working on designing a personal website to gain frontend, deployment, and Git experience as well as experience with new languages and frameworks."
                        bullets = {[
                            "Deployed live site via Vercel with continuous integration from GitHub",
                            "Gained hands-on experience with frontend frameworks, version control, CLI Git, and static deployment",
                            "Designed custom UI/UX elements and integrated original visual content",
                            "Linked to a project archive GitHub repo that currently contains SQL work, and will contain Java, Python, and React Native work when finished. Site will also eventually contain art."]}
                    />

                    {/* Student Teller Position */}
                    <BubbleTable
                        title = "Charles Schwab Trading" 
                        date = "2020 - Present"
                        description = "Traded stocks since I was 15 years old, now maintaining two brokerage accounts, both of which have achieved profits."
                        bullets = {[
                            "Achieved 193% growth and a 100% gain/loss ratio on one of two brokerages in 2024",
                            "Perform both fundamental and technical analysis to assess entries and exits for trades"]}
                    />

                    <BubbleTable
                        title = "2D Unity 8-Bit RPG Prototype" 
                        date = "Nov 2024 - Dec 2024" 
                        description = "For practice with both game engines and C#, designed the first section of a map, implemented basic scripts, and solved problems while documenting my process on Notion."
                        bullets = {[
                            "Implemented C# scripts for player movement, camera switching between game objects, and collision with a tilemap",
                            "Designed a map to follow logical progression, area themes, and allow for player freedom, backtracking, and exploration"]}
                    />

                    <BubbleTable
                        title = "User Customization iOS Icon Pack" 
                        date = "Oct 2024 - Nov 2024" 
                        description = "Designed over 150 app icons for user customization tailored for launch on Etsy using Photoshop and Illustrator."
                        bullets = {[
                            "Completed over 150 icons, improving process efficiency and methods as I worked, in the span of 1 month",
                            "Performed competitor analysis, designed icons for a target market of women, identified keywords, and researched pricing"]}
                    />

                </Bubble1>
        </section>
    );
}