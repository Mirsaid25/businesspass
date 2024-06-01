"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ChangeLanguageProps {}

const ChangeLanguage: React.FunctionComponent<ChangeLanguageProps> = () => {
    const pathName = usePathname();

    return (
        <div className="flex font-medium items-center gap-2 max-xl:text-sm">
            <Link href={`/ru/${pathName.slice(4)}`}>
                <button
                    className={cn(
                        "px-5 py-1.5 border-2 border-black rounded-full",
                        pathName.slice(1, 3) === "ru"
                            ? "bg-black text-white"
                            : "bg-transparent text-black"
                    )}
                >
                    RU
                </button>
            </Link>
            <Link href={`/en/${pathName.slice(4)}`}>
                <button
                    className={cn(
                        "px-5 py-1.5 border-2 border-black rounded-full",
                        pathName.slice(1, 3) === "en"
                            ? "bg-black text-white"
                            : "bg-transparent text-black"
                    )}
                >
                    EN
                </button>
            </Link>
        </div>
    );
};

export default ChangeLanguage;
