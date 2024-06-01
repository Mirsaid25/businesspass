"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import CustomSlider from "../client/customSlider";
import { cn } from "@/lib/utils";
import { Car } from "@/types";
import Link from "next/link";
import LikeActions from "../client/likeAction";
import { useParams } from "next/navigation";
import { Locale } from "@/i18n.config";

interface ProductCardProps {
    status?: string;
    item: Car;
    favoriteCars: any;
}

const translation = {
    "ru":{
        "km":"на 100км",
        "month":"месяц",
        "button":"Подробнее"
    },
    "en":{
        "km":"at 100km",
        "month":"month",
        "button":"More details"
    }
}

const ProductCard: React.FunctionComponent<ProductCardProps> = ({
    status,
    item,
    favoriteCars,
}) => {

    const {lang}:{lang:Locale} = useParams()

    return (
        <div className="rounded-3xl max-md:rounded-xl border border-[#A1A1A1] pt-10 p-5 max-md:p-3 max-md:pt-5 max-sm:pt-2 text-secondary bg-white relative">
            <div
                className={cn(
                    `py-2 px-3 bg-white rounded-full absolute top-3 left-5`,
                    status ? "" : "hidden"
                )}
            >
                <span className="font-medium text-sm text-black">{status}</span>
            </div>
            <LikeActions favoriteCars={favoriteCars.data} id={item.id} />
            <div className="w-full">
                <CustomSlider slides={item.images} />
            </div>
            <div className="mt-4 max-sm:mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2 max-sm:gap-1">
                    <Image
                        src={"/icons/speedometer.svg"}
                        width={16}
                        height={16}
                        alt=""
                        className="max-sm:h-3"
                    />
                    <span className="text-xs max-sm:text-[10px] max-[410px]:text-[8px]">
                        {item.speed} {translation[lang].km}
                    </span>
                </div>
                <div className="flex items-center gap-2 max-sm:gap-1">
                    <Image
                        src={"/icons/fuel-pump.svg"}
                        width={16}
                        height={16}
                        alt=""
                        className="max-sm:h-3"
                    />
                    <span className="text-xs max-sm:text-[10px] max-[410px]:text-[8px]">
                        {item.gas} {translation[lang].km}
                    </span>
                </div>
            </div>
            <h3 className="mt-3 max-sm:mt-1 font-bold text-xl max-md:text-lg max-sm:text-sm max-sm:leading-4">
                {item.mark.name} {item.model}
            </h3>
            <p className="text-black font-normal max-md:text-sm max-[410px]:text-sm">
                {item.category.title}
            </p>
            <p className="mt-4 font-semibold text-xl max-sm:mt-2 max-sm:text-base max-md:text-lg max-[410px]:text-sm">
                {item.price}$/{translation[lang].month}
            </p>
            <div className="mt-4 max-sm:mt-2 flex items-center justify-between gap-2 max-sm:gap-0">
                <Link className="w-full" href={`/ru/car/${item.id}`}>
                    <Button className="w-full flex items-center justify-center bg-secondary rounded-full py-3 max-sm:h-fit max-sm:py-1 max-sm:px-1.5">
                        <p className="text-white text-sm max-sm:text-xs max-sm:font-normal max-[410px]:text-[10px]">
                        {translation[lang].button}
                        </p>
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
