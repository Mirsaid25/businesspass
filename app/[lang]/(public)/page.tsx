import Link from "next/link";
import { Suspense } from "react";

import ContainerSecond from "@/components/server/containerSecond";
import { Button } from "@/components/ui/button";
import Banners from "@/components/server/homePage/Banners";
import AccordionHomePage from "@/components/server/homePage/accordion";
import Roadmap from "@/components/server/homePage/Roadmap";
import { cn } from "@/lib/utils";
import BannersSkeleton from "@/components/server/skeletons/BannersSkeleton";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import AccordionSkeleton from "@/components/server/skeletons/accordion";

export default async function Home({ params }: { params: { lang: Locale } }) {

    const translation = await getDictionary(params.lang);

    return (
        <>
            <ContainerSecond>
                <section className="mt-16 flex gap-24 max-md:gap-10 max-sm:gap-5">
                    <p className="text-secondary text-2xl max-xl:text-xl max-md:text-sm max-w-56 max-md:max-w-20">
                        {translation.homePage.section1.span}
                    </p>
                    <div className="max-w-[810px]">
                        <h1 className="text-5xl max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-bold">
                            {translation.homePage.section1.h1}
                        </h1>
                        <div className="flex max-lg:flex-col max-lg:items-start items-center justify-between w-full mt-5 max-xl:mt-2 max-xl:gap-5">
                            <div className="flex items-center gap-1 max-lg:gap-3">
                                <div className="flex items-start">
                                    <span className="text-4xl max-xl:text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-lg font-semibold">
                                        $
                                    </span>
                                    <span className="text-8xl max-xl:text-7xl max-lg:text-6xl max-md:text-5xl  font-medium">
                                        0
                                    </span>
                                </div>
                                <div className="max-xl:text-sm max-md:text-xs max-lg:text-base text-secondary flex flex-col items-start max-w-[336px]">
                                    <span className="font-bold leading-4 max-sm:leading-3">
                                        {translation.homePage.section1.p1}
                                    </span>
                                    <span className="leading-4 max-sm:leading-3">
                                        {translation.homePage.section1.p2}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <Link href={`/${params.lang}/catalog/1`}>
                                    <Button className="px-7 flex items-center justify-center bg-primary-gradient rounded-full h-fit py-3 max-xl:py-2 max-xl:px-4 max-lg:px-5">
                                        <p className="text-white text-sm max-xl:text-xs max-lg:text-sm max-md:text-xs font-medium">
                                            {
                                                translation.homePage.section1
                                                    .button
                                            }
                                        </p>
                                    </Button>
                                </Link>

                                <Link href={`/#roadmap`} scroll={true}>
                                    <Button
                                        variant={"ghost"}
                                        className="w-full flex items-center justify-center rounded-full py-3 px-7 h-fit max-xl:py-2 max-xl:px-4 max-lg:px-5"
                                    >
                                        <p className="text-sm max-xl:text-xs max-lg:text-sm max-md:text-xs">
                                            {
                                                translation.homePage.section1
                                                    .button2
                                            }
                                        </p>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </ContainerSecond>

            <section
                className={cn(
                    "rounded-3xl max-md:rounded-2xl min-h-[120px] overflow-hidden mt-20 max-lg:mt-10 relative bg-primary-gradient"
                )}
            >
                <Suspense fallback={<BannersSkeleton />}>
                    <Banners />
                </Suspense>
            </section>

            <Suspense fallback={<BannersSkeleton />}>
                <Roadmap translation={translation.homePage.roadmap} />
            </Suspense>

            <ContainerSecond>
                <Suspense fallback={<AccordionSkeleton/>}>
                    <AccordionHomePage translation={translation.homePage.faq}/>
                </Suspense>
            </ContainerSecond>
        </>
    );
}
