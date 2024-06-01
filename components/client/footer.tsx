"use client";

import Image from "next/image";
import Container from "../server/container";
import ContainerSecond from "../server/containerSecond";
import Link from "next/link";
import { Button } from "../ui/button";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ApplicationSchema } from "@/schemas";
import { Input } from "../ui/input";
import { useState } from "react";
import axios from "axios";
import { useToast } from "../ui/use-toast";
import { useParams } from "next/navigation";
import { Checkbox } from "../ui/checkbox";

interface FooterProps {
    translation: any;
}
const URL = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage`;

const Footer: React.FunctionComponent<FooterProps> = ({ translation }) => {
    const [isPending, setIsPending] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof ApplicationSchema>>({
        resolver: zodResolver(ApplicationSchema),
        defaultValues: {
            name: "",
            number: "",
            check: false,
        },
    });

    const onSubmit = (data: z.infer<typeof ApplicationSchema>) => {
        setIsPending(true);

        let msg = `🆕 Бесплатная консультация! \n`;
        msg += `👨 Имя: ${data?.name} \n`;
        msg += `📞 Номер телефона: ${data?.number} \n`;
        msg += `Сгласен: ${data?.check ? "Да" : "Нет"} \n`;

        axios
            .post(URL, {
                chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
                parse_mode: "html",
                text: msg,
            })
            .then((res: any) => {
                if (res.status === 200 || res.status === 201) {
                    toast({
                        description: "Your message has been sent.",
                    });
                    setIsPending(false);
                    form.reset({
                        check: false,
                        name: "",
                        number: "",
                    });
                }
            })
            .catch((err: any) => {
                setIsPending(false);
                toast({
                    variant: "destructive",
                    description: "Uh oh! Something went wrong.",
                });
            });
    };

    return (
        <footer id="footer">
            <Container>
                <div className="bg-secondary py-7 rounded-t-3xl max-lg:py-5 max-sm:py-4">
                    <ContainerSecond>
                        <div className="flex max-lg:flex-col max-lg:gap-5 items-center justify-between">
                            <h3 className="text-5xl max-[1440px]:text-4xl max-lg:text-3xl max-md:text-2xl font-semibold text-[#e4e4e4]">
                                {translation.block1}
                            </h3>
                            <div className="flex items-center gap-5 max-sm:gap-3 max-sm:w-full">
                                <Link href={"/"} className="w-full">
                                    <Image
                                        src={"/images/googleplay.png"}
                                        width={260}
                                        height={75}
                                        alt="GooglePlay"
                                        className="max-lg:w-[180px] max-sm:w-full"
                                    />
                                </Link>
                                <Link href={"/"} className="w-full">
                                    <Image
                                        src={"/images/appstore.png"}
                                        width={260}
                                        height={75}
                                        alt="AppStore"
                                        className="max-lg:w-[180px] max-sm:w-full"
                                    />
                                </Link>
                            </div>
                        </div>
                    </ContainerSecond>
                </div>
                <ContainerSecond>
                    <div className="py-16 max-md:py-10 max-sm:py-5 flex justify-between max-lg:flex-col-reverse">
                        <div className="flex flex-col justify-center">
                            <p className="text-2xl text-secondary max-lg:hidden">
                                {translation.block2.spanText}
                            </p>
                            <div className="flex flex-col max-lg:flex-row max-lg:w-full max-lg:gap-10 max-sm:gap-5 max-lg:mt-5">
                                <Image
                                    src={"/icons/logo.svg"}
                                    width={450}
                                    height={285}
                                    alt="Logo"
                                    className="mt-28 max-lg:mt-5 max-xl:w-[370px] max-lg:w-full"
                                />
                            </div>
                        </div>
                        <div className="w-[45%] max-sm:w-full max-lg:w-2/3">
                            <p className="text-xl max-md:text-lg max-sm:text-base text-secondary max-lg:block hidden">
                                {translation.block2.spanText}
                            </p>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="space-y-6 max-sm:space-y-3 "
                                >
                                    <h3 className="text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-bold text-primary-gradient leading-tight">
                                        {translation.block2.form.title}
                                    </h3>
                                    <div className="space-y-6 max-sm:space-y-2">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-[#979797]">
                                                        {
                                                            translation.block2
                                                                .form
                                                                .inputNameLabel
                                                        }
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            disabled={isPending}
                                                            placeholder="Jon"
                                                            type={"text"}
                                                            className="bg-[#F3F3F3] border border-[#A1A1A1] p-5 rounded-[10px]"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="number"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-[#979797]">
                                                        {
                                                            translation.block2
                                                                .form
                                                                .inputGmailLabel
                                                        }
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            disabled={isPending}
                                                            placeholder="+1"
                                                            type={"string"}
                                                            className="bg-[#F3F3F3] border border-[#A1A1A1] p-5 rounded-[10px]"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="check"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={
                                                                field.value
                                                            }
                                                            onCheckedChange={
                                                                field.onChange
                                                            }
                                                        />
                                                    </FormControl>
                                                    <FormLabel>
                                                        {translation.block2.form.span}
                                                    </FormLabel>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <Button
                                        disabled={isPending}
                                        type="submit"
                                        className="bg-secondary text-white px-14 py-4 rounded-full h-fit max-sm:px-10 max-sm:py-2"
                                    >
                                        {translation.block2.form.submit}
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </ContainerSecond>
            </Container>
        </footer>
    );
};

export default Footer;
