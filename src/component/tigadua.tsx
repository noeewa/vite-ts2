export default function Tigadua() {
    const sBlock = "flex w-6/7 bg-[#d3d3d3] h-full w-full aspect-square justify-center items-center text-center";
    const sVideo = "flex w-6/7 bg-[#d3d3d3] h-full w-full aspect-video justify-center items-center text-center";
    const Tiga = () => {
        return(
            <div className="grid grid-flow-col gap-5 justify-items-center">
                <div className={sBlock}>1</div>
                <div className={sBlock}>2</div>
                <div className={sBlock}>3</div>
            </div>
        )
    }
    const Dua = () => {
        return(
            <div className="grid grid-flow-col gap-5 my-5">
                <div className={sVideo}>1</div>
                <div className={sVideo}>2</div>
            </div>
        )
    }
    return (
        <div className="w-full my-10">
            <Tiga/>
            <Dua/>
        </div>
    )
}