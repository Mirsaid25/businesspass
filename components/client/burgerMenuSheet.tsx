"use client";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@radix-ui/react-label";
import { IoMenu } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";
import { useParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ChangeLanguage from "./changeLanguage";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { deleteCookie, getCookie, hasCookie } from "cookies-next";
import { IoCall } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface BurgerMenuSheetProps {
    signUpHandle: boolean;
    setSignUpHandle: Dispatch<SetStateAction<boolean>>;
    registerHandle: boolean;
    setRegisterHandle: Dispatch<SetStateAction<boolean>>;
    togleSignModals: () => void;
    userInfo: any;
    isAuthenticated: any;
}

const BurgerMenuSheet: React.FunctionComponent<BurgerMenuSheetProps> = ({
    signUpHandle,
    setSignUpHandle,
    togleSignModals,
    registerHandle,
    setRegisterHandle,
    userInfo,
    isAuthenticated,
}) => {
    const [handleMenu, setHandleMenu] = useState(false);

    const params = useParams();
    const pathname = usePathname();
    const router = useRouter();

    const closeMenu = () => {
        setHandleMenu(false);
    };

    const routes = [
        {
            id: 1,
            href: `/${params.lang}`,
            label: "Главная страница",
            active: pathname === `/${params.lang}`,
        },
        {
            id: 2,
            href: `/${params.lang}/catalog/1`,
            label: "Каталог",
            active: pathname.includes("/catalog/"),
        },
    ];

    const routesAuthorithe = [
        {
            id: 1,
            href: `/${params.lang}/favorites`,
            label: "Избранное",
            active: pathname.includes("/favorites"),
            icon: "heart.svg",
        },
        {
            id: 2,
            href: `/${params.lang}/applications`,
            label: "Арендованные машины",
            active: pathname.includes("/applications"),
            icon: "car.svg",
        },
        {
            id: 3,
            href: `/${params.lang}/applicant-info`,
            label: "Информация о заявителе",
            active: pathname.includes("/applicant-info"),
            icon: "car.svg",
        },
        {
            id: 4,
            href: `/support`,
            label: "Поддержка",
            active: pathname.includes("/support"),
            icon: "help-circle.svg",
        },
    ];

    function logOut() {
        deleteCookie("userInfo");
        deleteCookie("userToken");
        deleteCookie("userId");

        setHandleMenu(false);
        router.refresh();
    }

    return (
        <Sheet open={handleMenu} onOpenChange={setHandleMenu}>
            <SheetTrigger asChild>
                <button
                    title="menu"
                    className="bg-primary-gradient rounded-full p-2.5 max-xl:p-1.5 max-lg:p-2.5"
                >
                    <IoMenu size={20} color="white" />
                </button>
            </SheetTrigger>
            <SheetContent side={"left"} className="w-full">
                <div className="p-8 pt-0 flex flex-col justify-between h-full">
                        <div className="flex items-end gap-5">
                            <ChangeLanguage />
                        </div>
                    <div>
                        <Link
                            href={"tel:+13478287777"}
                            className="text-3xl flex font-medium items-center gap-2"
                        >
                            <IoCall size={24} />
                            <span>+1 347 828 7777</span>
                        </Link>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default BurgerMenuSheet;
