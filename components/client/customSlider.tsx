"use client";
import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel  copy";

interface CustomSliderProps {
    slides: { id: number; url: string; carId: number }[];
}

const CustomSlider: React.FC<CustomSliderProps> = ({ slides }) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="relative w-full">
            <Carousel setApi={setApi} className="overflow-hidden">
                <CarouselContent className="w-full h-auto max-[420px]:h-[100px]">
                    {slides.length > 0 ? (
                        slides.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="flex items-center"
                            >
                                <img
                                    src={item.url}
                                    width={400}
                                    height={400}
                                    alt=""
                                    className="aspect-video object-cover object-center"
                                />
                            </CarouselItem>
                        ))
                    ) : (
                        <CarouselItem className="flex justify-center items-center">
                            <p>Фото пусто</p>
                        </CarouselItem>
                    )}
                </CarouselContent>
            </Carousel>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between mt-4 gap-1">
                {slides.length > 0 ? (
                    slides.map((_, idx) => (
                        <div
                            key={idx + 1}
                            onClick={() => {
                                api?.scrollTo(idx);
                            }}
                            className={`w-full p-0.5 max-sm:p-[1px] outline-none cursor-pointer ${
                                idx + 1 === current
                                    ? "bg-secondary"
                                    : "bg-[#C6C6C6]"
                            } rounded-full`}
                        >
                            {""}
                        </div>
                    ))
                ) : (
                    <div
                        className={`w-full p-0.5 max-sm:p-[1px] outline-none bg-[#C6C6C6] rounded-full`}
                    >
                        {""}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomSlider;
