import Link from "next/link";
import ContainerSecond from "../containerSecond";
import { Button } from "@/components/ui/button";
import { getData } from "@/lib/https.request";
import ProductCard from "../productCard";
import { cookies } from "next/headers";
import { Locale } from "@/i18n.config";

const UniqueOffers = async ({
    params,
    translation,
}: {
    params: { lang: Locale };
    translation: { title: string; p: string; openCatalogButton: string };
}) => {
    const userId: any = cookies()?.get("userId")?.value;

    const uniqueOffers = await getData("/unique-offers");
    const favoriteCars = await getData(`/favorite-cars/${userId}`, true);

    if (!uniqueOffers.data.length || !uniqueOffers.data) {
        return null;
    }

    return (
        <ContainerSecond>
            <section className="mt-20 grid grid-cols-4 gap-5 max-[1440px]:hidden">
                <div className="max-w-[316px]">
                    <h3 className="font-bold text-5xl max-[1440px]:text-4xl">
                        {translation.title}
                    </h3>
                    <p className="mt-4 text-sm text-secondary">
                        {translation.p}
                    </p>
                    <div className="flex gap-2 mt-3">
                        <Link href={`/${params.lang}/catalog/1`}>
                            <Button className="w-full flex items-center justify-center bg-primary-gradient rounded-full py-3">
                                <p className="text-white text-sm">
                                    {translation.openCatalogButton}
                                </p>
                            </Button>
                        </Link>
                        {/* <Button
                            variant={"ghost"}
                            className="w-full flex items-center justify-center rounded-full py-3"
                        >
                            <p className="text-sm">Поиск</p>
                        </Button> */}
                    </div>
                </div>

                {uniqueOffers.data.map((item: any) => (
                    <ProductCard
                        key={item}
                        item={item}
                        favoriteCars={favoriteCars}
                    />
                ))}
            </section>
        </ContainerSecond>
    );
};

export default UniqueOffers;
