import { Skeleton } from "@/components/ui/skeleton";

const AccordionSkeleton = () => {
    return (
        <div className="rounded-3xl max-md:rounded-2xl max overflow-hidden mt-20 max-lg:mt-10 h-[690px] max-lg:h-[550px] max-md:h-[500px] max-sm:h-[400px]">
            <Skeleton className="w-full h-full"></Skeleton>
        </div>
    );
};

export default AccordionSkeleton;
