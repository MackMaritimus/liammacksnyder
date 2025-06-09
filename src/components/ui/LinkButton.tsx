import Link from 'next/link';
import React from 'react'

// Renders either an <a> tag or a <Link> based on whether the href is external

// LinkButton Properties Interface
interface LinkButtonProps {
    href: string;
    className?: string;
    children?: React.ReactNode;
}

// LinkButton Function
export default function LinkButton ({ href, className = "", children}: LinkButtonProps) {
    // isExternal boolean const to check if href param starts with "http"
    const isExternal = href.startsWith("http");

    // If isExternal is true (href starts with http), return "<a>" component
    if (isExternal) 
        {
        return (
            <a  href = {href} className = {className} target = "_blank" rel = "noopener noreferrer">
                {children}
            </a>
        );
    }
    
    // If isExternal is false (href does not start with http), return "<Link>" component
    return (
        <Link href = {href} className = {className}>
            {children}
        </Link>
    );
}

