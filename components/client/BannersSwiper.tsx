"use client";

import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

function BannersSwiper() {
    return (
        <div className="relative">
            <Carousel
                className="w-full max-h-[690px] flex items-center"
            >
                <CarouselContent>
                        <CarouselItem >
                            <Image
                                src={"/images/banner.png"}
                                width={1000}
                                height={1000}
                                alt=""
                                className="w-full h-[690px] object-cover max-sm:object-center max-lg:h-[550px] max-md:h-[500px] max-sm:h-[400px]"
                            />
                        </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default BannersSwiper;
