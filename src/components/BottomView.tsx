import Image from "next/image";

const BottomView = () => {
    return <><Image
        src={"/assets/background/path13.svg"}
        alt="bg"
        height={458}
        width={794}
        className="object-cover absolute bottom-0 inset-x-0"
    />
        <Image
            src={"/assets/background/path15.svg"}
            alt="bg"
            height={316}
            width={794}
            className="object-cover absolute bottom-7 inset-x-0"
        />
        <Image
            src={"/assets/background/path17.svg"}
            alt="bg"
            height={302}
            width={794}
            className="object-cover absolute bottom-0 inset-x-0"
        />
        <div className="h-[192] w-[794] absolute bottom-0 inset-x-0">
            <Image
                src={"/assets/icons/bottom-vector.svg"}
                alt="bg"
                height={192}
                width={794}
                className="object-fill"
            />
        </div>
    </>
}
export default BottomView;