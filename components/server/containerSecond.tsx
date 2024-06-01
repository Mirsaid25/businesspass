interface ContainerProps {
    children: React.ReactNode
}
 
const ContainerSecond: React.FunctionComponent<ContainerProps> = ({children}) => {
    return (
        <div className="px-[60px] max-[1440px]:px-[40px] max-md:px-5 mx-auto max-w-[1440px] max-[1440px]:max-w-7xl max-xl:max-w-6xl">
            {children}
        </div>
    );
}
 
export default ContainerSecond;