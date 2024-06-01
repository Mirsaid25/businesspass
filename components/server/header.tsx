"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ContainerSecond from "@/components/server/containerSecond";
import ChangeLanguage from "../client/changeLanguage";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getCookie, hasCookie } from "cookies-next";
import { useParams } from "next/navigation";
import BurgerMenuSheet from "../client/burgerMenuSheet";

const Header = ({
    translation,
}: {
    translation: {
        links: { homePage: string; catalogPage: string; contacts: string };
        registerButton: string;
        loginButton: string;
    };
}) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
        null
    );

    const [registerHandle, setRegisterHandle] = useState(false);
    const [signUpHandle, setSignUpHandle] = useState(false);

    function togleSignModals() {
        setRegisterHandle(!registerHandle);
        setSignUpHandle(!signUpHandle);
    }

    const [userInfo, setUserInfo] = useState<any | null>(null);
    const { lang } = useParams();

    useEffect(() => {
        const isAuth = hasCookie("userToken");
        const userCookie: any = getCookie("userInfo");

        if (userCookie) {
            const userInfo = JSON.parse(userCookie);
            setUserInfo(userInfo);
        }
        
        setIsAuthenticated(isAuth);
    }, []);

    const params = useParams();

    return (
        <ContainerSecond>
            <header className="mt-3 flex items-center justify-between">
                <div className="flex items-center w-1/3 max-[1440px]:w-auto">
                    <div className="hidden max-lg:block">
                        <BurgerMenuSheet
                            userInfo={userInfo}
                            isAuthenticated={isAuthenticated}
                            signUpHandle={signUpHandle}
                            registerHandle={registerHandle}
                            setRegisterHandle={setRegisterHandle}
                            setSignUpHandle={setSignUpHandle}
                            togleSignModals={togleSignModals}
                        />
                    </div>
                    <div className="bg-primary-gradient rounded-full px-8 py-3 max-xl:px-5 max-xl:py-2 text-xs text-white max-lg:hidden">
                        <ul className="flex items-center gap-5 max-xl:gap-4">
                            <li>
                                <Link href={`/${lang}`}>
                                    {translation.links.homePage}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}`}>
                                    {translation.links.catalogPage}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}`}>
                                    {translation.links.contacts}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <Link href={"/"}>
                        <Image
                            src={"/icons/logo.svg"}
                            width={155}
                            height={102}
                            alt=""
                            className="max-xl:w-[120px]"
                        />
                    </Link>
                </div>
                <div className="flex items-center gap-8 max-xl:gap-5 max-lg:hidden">
                    <Link
                        href={"tel:+13478287777"}
                        className="flex items-center gap-2"
                    >
                        <Image
                            src={"/icons/phone-call.svg"}
                            width={20}
                            height={20}
                            alt=""
                            className="max-xl:w-[18px] max-xl:h-[18px]"
                        />
                        <span className="font-semibold text-xl max-xl:text-base text-secondary">
                            +1 347 828 7777
                        </span>
                    </Link>
                    <ChangeLanguage />

                    {userInfo !== null ? (
                        <Link
                            href={`/${params.lang}/account`}
                            className="flex items-center gap-2"
                        >
                            <p className="font-bold">
                                {userInfo.username.split("_").join(" ")}
                            </p>
                            <Avatar>
                                <AvatarImage
                                    // src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                />
                                <AvatarFallback className="text-white">
                                    {userInfo.username[0]}
                                </AvatarFallback>
                            </Avatar>
                        </Link>
                    ) : null}
                </div>
                <div className="hidden max-lg:block"></div>
            </header>
        </ContainerSecond>
    );
};

export default Header;
