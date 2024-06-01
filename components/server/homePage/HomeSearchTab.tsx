import TopSearchTab from "@/components/client/HomeSearchTab";
import { getData } from "@/lib/https.request";
import { cn } from "@/lib/utils";

const HomeSearchContainer = async ({translation}:{translation:{ linkAll: string; searchButton: string; }}) => {
    const categories = await getData("/category");
    const marks = await getData("/marks");

    if(!categories.data.length && !marks.data.length){
        return null
    }

    return (
        <div className={cn("")}>
            <TopSearchTab translation={translation} categories={categories.data} marks={marks.data} />
        </div>
    );
};

export default HomeSearchContainer;
