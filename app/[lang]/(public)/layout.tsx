import Footer from "@/components/client/footer";
import Container from "@/components/server/container";
import Header from "@/components/server/header";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: {lang:Locale};
}>) {
    const { header, footer } = await getDictionary(params.lang);

    return (
        <>
            <Header translation={header}/>
            <main>
                <Container>{children}</Container>
            </main>
            <Footer translation={footer}/>
        </>
    );
}
