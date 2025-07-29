
/*  Panel componenet used in the panels section.
    Takes two images for different screen sizes and an external link or other href as properties
    Image 1:
        Width: 320px 
        Height: 320px
    Image 2:
        Width: 512px
        Height: 120px
    
    Note: Images default to placeholders if not provided
*/

import Image from "next/image";

interface PanelProps {
    squareImage?: string,
    rectangleImage?: string,
    href?: string
    alt: string,
}

export default function Panel ({squareImage = "/Placeholder_Image_1.png", rectangleImage= "/Placeholder_Image_2.png", href = undefined, alt}:PanelProps) {

    return (
       <a href = {href} target = "_blank">
            <div className = "w-full max-w-[320px] min-[1070px]:max-w-[512px] h-auto rounded-lg overflow-hidden shadow-default">
                
                {/* Square Image 320x320 */}
                <Image 
                    src = {squareImage} 
                    alt = {alt} 
                    className = "min-[1070px]:hidden"
                    width = {320}
                    height = {320}
                    quality = {100}
                />

                {/* Rectangle Image 512x120 */}
                <Image 
                    src = {rectangleImage} 
                    alt = {alt} 
                    className = "max-[1070px]:hidden"
                    width = {512}
                    height = {120}
                    quality = {100}
                />

            </div>
        </a> 
    );
}