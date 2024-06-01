import Image from "next/image";

interface PreloadingProps {
    
}
 
const Preloading: React.FunctionComponent<PreloadingProps> = () => {
    return (
        <div className="w-full h-screen bg-slate-50 flex items-center justify-center animate-pulse">
            <Image src="/icons/logo.svg" width={400} height={400} alt="" className="max-sm:w-[250px]"/>
        </div>
    );
}
 
export default Preloading;