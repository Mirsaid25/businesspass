"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider:any = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
    <SliderPrimitive.Root
        ref={ref}
        className={cn(
            "relative flex w-full touch-none select-none items-center",
            className
        )}
        {...props}
    >
        <SliderPrimitive.Track className="relative h-2 max-md:h-1 w-full grow overflow-hidden rounded-full bg-[#B4B4B4] dark:bg-gray-800">
            <SliderPrimitive.Range className="absolute h-full bg-[#474747] dark:bg-gray-50" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-5 w-5 max-md:h-4 max-md:w-4 rounded-full bg-[#474747] ring-offset-white transition-colors disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
