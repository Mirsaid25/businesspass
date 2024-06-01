import ProductSekeleton from "./ProductSekeleton";

const RenderingProductsSekeleton = () => {
    return (
        <div className="w-full grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 gap-5 max-sm:gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <ProductSekeleton key={item}/>
            ))}
        </div>
    );
};

export default RenderingProductsSekeleton;
