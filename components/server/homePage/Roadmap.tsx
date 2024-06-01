
import ContainerSecond from "../containerSecond";

const roadmap = [
    {
        step:1,
        title:"Поиск эксперта",
        description:"Исследуйте и найдите ведущих специалистов своего дела"
    },
    {
        step:2,
        title:"Поиск эксперта",
        description:"Исследуйте и найдите ведущих специалистов своего дела"
    },
    {
        step:3,
        title:"Поиск эксперта",
        description:"Исследуйте и найдите ведущих специалистов своего дела"
    },
]

const Roadmap = async ({
    translation,
}: {
    translation: { span: string; h1: string; p: string; step: string, data:any };
}) => {

    return (
        <section
            id="roadmap"
            className="rounded-3xl mt-20 max-sm:mt-10 py-14 max-md:py-7 border border-[#A1A1A1] shadow-cust"
        >
            <ContainerSecond>
                <div className="flex gap-10 max-sm:gap-5">
                    <p className="text-secondary text-2xl max-lg:text-xl max-md:text-lg max-sm:text-sm max-sm:leading-4 max-sm:w-[75px]">
                        {translation.span}
                    </p>
                    <div className="max-w-[690px] max-lg:max-w-md m-auto">
                        <h3 className="text-primary-gradient text-5xl max-lg:text-3xl max-md:text-2xl max-sm:leading-6 font-bold leading-[1.2]">
                            {translation.h1}
                        </h3>
                        <p className="text-secondary text-3xl max-lg:text-xl max-md:text-lg max-sm:text-base max-sm:leading-5 mt-5 max-sm:mt-2">
                            {translation.p}
                        </p>
                    </div>
                </div>
                <hr className="w-full mt-9 mb-5 border-2 max-sm:border border-[#808080]" />
                <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-5 justify-between max-xl:gap-10">
                    {translation.data.map((item: any) => (
                        <div key={item.step} className="max-w-52 max-xl:max-w-full max-xl:rounded-xl max-xl:shadow-md max-xl:p-3 max-sm:shadow-none max-sm:rounded-none max-sm:p-0 max-sm:border-b-2 max-sm:pb-3 max-sm:border-[#8d8b8b]">
                            <p className="text-xl max-lg:text-lg max-sm:text-sm text-secondary">
                                {item.id} шаг
                            </p>
                            <p className="text-[#131313] font-bold mt-12 max-sm:mt-8">
                                {item.title}
                            </p>
                            <p className=" text-secondary">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </ContainerSecond>
        </section>
    );
};

export default Roadmap;
