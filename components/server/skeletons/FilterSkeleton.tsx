import { Skeleton } from "@/components/ui/skeleton";

 
const FilterSkeleton = () => {
    return (
        <div className="flex flex-col gap-3">
            {
                [1,2,3,4,5,6,7].map(item => (
                    <div key={item}>
                        <Skeleton className="w-1/2 h-5 rounded-full"/>
                        <Skeleton className="w-full h-14 rounded-xl mt-3"/>
                    </div>
                ))
            }
        </div>
    );
}
 
export default FilterSkeleton;