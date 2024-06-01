import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";


const AccordionHomePage = async ({translation}:{translation:any}) => {
    return (
        <section className="flex max-lg:flex-col justify-between gap-20 my-20 max-lg:my-10 max-lg:gap-5">
            <div className="w-1/2 max-sm:w-full">
                <h2 className="text-5xl max-[1440px]:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-bold text-primary-gradient">
                    Частые вопросы
                </h2>
                <p className="text-2xl max-[1440px]:text-xl max-lg:text-lg max-sm:text-base text-secondary mt-3 max-lg:mt-1">
                    С чем чаще всего сталкиваются наши пользователи
                </p>
            </div>
            <Accordion
                type="single"
                collapsible
                className="w-full flex flex-col gap-5"
            >
                {translation.data.map(
                    (item: {
                        id: number;
                        question: string;
                        answer: string;
                    }) => (
                        <AccordionItem
                            key={item.id}
                            className="max-lg:pb-5 max-lg:px-5 max-sm:px-3 max-sm:pb-2 max-sm:pt-1"
                            value={`item-${item.id}`}
                        >
                            <AccordionTrigger className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-medium text-secondary">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="max-w-[500px] max-lg:text-sm">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    )
                )}
            </Accordion>
        </section>
    );
};

export default AccordionHomePage;
