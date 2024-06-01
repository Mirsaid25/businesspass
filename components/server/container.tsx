interface ContainerProps {
    children: React.ReactNode
}
 
const Container: React.FunctionComponent<ContainerProps> = ({children}) => {
    return (
        <div className="mx-auto max-w-[1440px] max-[1440px]:max-w-7xl max-xl:max-w-6xl">
            {children}
        </div>
    );
}
 
export default Container;