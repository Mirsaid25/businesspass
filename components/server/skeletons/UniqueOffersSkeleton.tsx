import { Skeleton } from "@/components/ui/skeleton";

const UniqueOffersSkeleton = () => {
    return (
        <div className="rounded-3xl max-md:rounded-2xl overflow-hidden h-[300px] max-sm:h-[150px] mt-5">
            <Skeleton className="w-full h-full">
            </Skeleton>
        </div>
    );
};

export default UniqueOffersSkeleton;