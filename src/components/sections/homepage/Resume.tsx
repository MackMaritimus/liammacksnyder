"use client";
import { BubbleTable, Bubble1 } from "@/components/ui/ResumeBubble";
import Carousel from "@/components/ui/Carousel";
import { useState } from "react";
import StaticOverlay from "@/components/ui/StaticOverlay";
import ResumeDownload from "@/components/ui/ResumeDownload";

// Resume Section With Qualifications

export default function Resume () {

    const [selectedBubble, setSelectedBubble] = useState(0);

    const cisOverlayBubble = (
        <BubbleTable
            title = "B.S. Computer Information Systems" 
            date = "Graduation Dec 2025" 
            company = "Colorado State University"
            location = "Fort Collins, CO"
            description = "Certification in Business Application Development"
            onClick = {() => setSelectedBubble(1)}
        />
    );

    const marketingOverlayBubble = (
         <BubbleTable
            title = "B.S. Marketing" 
            date = "Graduation Dec 2025" 
            company = "Colorado State University"
            location = "Fort Collins, CO"
            description = "Certification in Business to Business Selling"
        />
    );

    const educationBubble = (
        <Bubble1 header = "Education">
            
            {/* B.S. Computer Information Systems, CSU */}
            <BubbleTable
                title = "B.S. Computer Information Systems" 
                date = "Graduation Dec 2025" 
                company = "Colorado State University"
                location = "Fort Collins, CO"
                className = "hover:cursor-pointer hover:scale-105 duration-500"
                onClick = {() => setSelectedBubble(1)}
            />
            
            {/* B.S. Marketing, CSU */}
            <BubbleTable
                title = "B.S. Marketing" 
                date = "Graduation Dec 2025" 
                company = "Colorado State University"
                location = "Fort Collins, CO"
                className = "hover:cursor-pointer hover:scale-105 duration-500"
                onClick = {() => setSelectedBubble(2)}
            />
        </Bubble1>
    );

    const landscaperOverlayBubble = (
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
    );

    const tellerOverlayBubble = (
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
    );

    const professionalExperienceBubble = (
        <Bubble1 header = "Professional Experience">
                    
            {/* Landscaper Position */}
            <BubbleTable
                title = "Landscape Crew Lead" 
                date = "Jun 2021 - Jun 2023" 
                company = "Massage the Earth"
                location = "Lafayette, CO"
                className = "hover:cursor-pointer hover:scale-105 duration-500"
                onClick = {() => setSelectedBubble(3)}
            />

            {/* Student Teller Position */}
            <BubbleTable
                title = "Student Teller" 
                date = "Jun 2019 - Jan 2021" 
                company = "Premier Memebers Credit Union"
                location = "Louisville, CO"
                className = "hover:cursor-pointer hover:scale-105 duration-500"
                onClick = {() => setSelectedBubble(4)}
            />
        </Bubble1>
    );

    const websiteOverlayBubble = (
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
    );

    const tradingOverlayBubble = (
        <BubbleTable
            title = "Charles Schwab Trading" 
            date = "2020 - Present"
            description = "Traded stocks since I was 15 years old, now maintaining two brokerage accounts, both of which have achieved profits."
            bullets = {[
                "Achieved 193% growth and a 100% gain/loss ratio on one of two brokerages in 2024",
                "Perform both fundamental and technical analysis to assess entries and exits for trades"]}
        />
    );

    const projectsBubble = (
        <Bubble1 header = "Projects">
             
            {/* Personal Vercel Site */}
            <BubbleTable
                title = "Personal Vercel Website" 
                date = "May 2025 - Present"
                className = "hover:cursor-pointer hover:scale-105 duration-500"
                onClick = {() => setSelectedBubble(5)}
            />

            {/* Schwab Trading */}
            <BubbleTable
                title = "Charles Schwab Trading" 
                date = "2020 - Present"
                className = "hover:cursor-pointer hover:scale-105 duration-500"
                onClick = {() => setSelectedBubble(6)}
            />
        </Bubble1>
    );

    return (
        <section className = "w-full flex flex-col mb-0 items-center text-wrap">

            {/* Desktop Resume Section */ }
            <Carousel className = "hidden xl:flex mb-12">
                {educationBubble}
                {professionalExperienceBubble}
                {projectsBubble}
            </Carousel>


            {/* Mobile Resume Section */ }
            <div className = "gap-y-8 flex flex-col w-full px-6 overflow-hidden xl:hidden items mb-15">
                {educationBubble}
                {professionalExperienceBubble}
                {projectsBubble}
            </div>

            {/* Resume Download Button */ }
            <ResumeDownload/>

            {/* Overlay Bubble Rendering */}
            {selectedBubble === 1 && (
                <StaticOverlay onClick = {() => setSelectedBubble(0)}>
                    {cisOverlayBubble}
                </StaticOverlay>
            )}

            {selectedBubble === 2 && (
                <StaticOverlay onClick = {() => setSelectedBubble(0)}>
                    {marketingOverlayBubble}
                </StaticOverlay>
            )}

            {selectedBubble === 3 && (
                <StaticOverlay onClick = {() => setSelectedBubble(0)}>
                    {landscaperOverlayBubble}
                </StaticOverlay>
            )}

            {selectedBubble === 4 && (
                <StaticOverlay onClick = {() => setSelectedBubble(0)}>
                    {tellerOverlayBubble}
                </StaticOverlay>
            )}

            {selectedBubble === 5 && (
                <StaticOverlay onClick = {() => setSelectedBubble(0)}>
                    {websiteOverlayBubble}
                </StaticOverlay>
            )}

            {selectedBubble === 6 && (
                <StaticOverlay onClick = {() => setSelectedBubble(0)}>
                    {tradingOverlayBubble}
                </StaticOverlay>
            )}


        </section>
    );
}