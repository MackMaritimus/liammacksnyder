"use client";
import { useState, Children } from "react";
import useTallestChildHeight from "@/hooks/useTallestChildHeight";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
}

export default function Carousel({ children, className = "" }: CarouselProps) {
    const ClassName = `relative w-full flex justify-center overflow-hidden ${className}`

    const items = Children.toArray(children);
    const [index, setIndex] = useState(0);

    const [itemRefs, maxElementHeight] = useTallestChildHeight(items.length);

    return (
        <div className = {ClassName}  style = {{ height: maxElementHeight }}>
            {items.map((child, i) => {
                
                const lastIndex = items.length - 1;

                const isActive = i === index;
                const isLeft = i === (index === 0 ? lastIndex : index - 1);
                const isRight = i === (index === lastIndex ? 0 : index + 1);


                return (
                    <div
                        ref={(el) => {
                            itemRefs[i] = el;
                        }}
                        key = {i}
                        className = {`absolute transition-all duration-500 ${
                            isActive
                                ? "scale-100 z-20"
                                : isLeft || isRight
                                ? "z-10 opacity-50 cursor-pointer blur-sm"
                                : "scale-50 z-0 opacity-0 pointer-events-none"
                            }`}
                        style={{
                            left: "50%",
                            top: "50%",
                            transform: isLeft
                                ? "translate(-115%, -50%) scale(0.75)"  // 160% = more pushed to left
                                : isRight
                                ? "translate(15%, -50%) scale(0.75)"     // 60% = pushed to right
                                : "translate(-50%, -50%) scale(1)"
                        }}

                        onClick={() => setIndex(i)}
                    >
                        <div className={isActive ? "" : "pointer-events-none"}>
                            {child}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
