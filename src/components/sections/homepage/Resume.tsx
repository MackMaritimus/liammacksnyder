"use client";
import { BubbleTable, Bubble1 } from "@/components/ui/ResumeBubble";
import Carousel from "@/components/ui/Carousel";
import { useState } from "react";
import StaticOverlay from "@/components/ui/StaticOverlay";

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
                "Supervised and worked alongside crews of 2-3 team members on residential projects",
                "Trained 3 new team members on procedures, equipment, and customer interaction",
                "Handled logistical tasks including dump runs, trailer hauling, and equipment preparation",
                "Acted as on-site point of contact, managing client expectations and resolving issues to uphold quality standards"]}
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
                "Operated within strict compliance protocols and confidentiality policies"]}
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

    const homeServerOverlayBubble = (
        <BubbleTable
            title = "Home Server & Personal Cloud" 
            date = "Ongoing Development"
            description = "Designed and maintain a fully self-hosted home server environment for private cloud storage, secure remote access, and automated data processing."
            bullets = {[
                "Deployed on Windows Pro, with WSL for Linux integration and to run Nextcloud.",
                "Built automated media management system using PowerShell, ExifTool, and FFmpeg to handle renaming, hash-based deduplication, conversions/encoding, storage, and multithreading of all media files placed into a dump folder.",
                "Implemented Nginx for https reverse proxy and AdGuard for DNS rewrites.",
                "Set up WireGuard network for secure, remote access to both Windows (SSH, RDP) and Linux (Nextcloud Terminal, Nextcloud Sync) server functions."]}
        />
    );

    const websiteOverlayBubble = (
        <BubbleTable
            title = "Personal Vercel Website" 
            date = "Ongoing Development" 
            description = "Built a personal website to gain frontend, deployment, and Git experience as well as experience with new languages and frameworks, and to provide myself with a customizable, online hub."
            bullets = {[
                "Deployed live site using Vercel with continuous integration from GitHub",
                "Designed custom UI/UX elements for scalability and integrated original visual content",
                "Developed with Next.js and Tailwind CSS",
                "Gained practical experience with version control and static deployment"]}
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
             
            {/* Home Server & Personal Cloud */}
            <BubbleTable
                title = "Home Server & Personal Cloud" 
                date = "Ongoing Development"
                className = "hover:cursor-pointer hover:scale-105 duration-500"
                onClick = {() => setSelectedBubble(6)}
            />

            {/* Personal Vercel Site */}
            <BubbleTable
                title = "Personal Vercel Website" 
                date = "Ongoing Development"
                className = "hover:cursor-pointer hover:scale-105 duration-500"
                onClick = {() => setSelectedBubble(5)}
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
                    {homeServerOverlayBubble}
                </StaticOverlay>
            )}

        </section>
    );
}