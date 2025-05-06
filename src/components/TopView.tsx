import Image from "next/image";

const TopView = () => {
    return <><Image
        src={"/assets/background/path5.svg"}
        alt="bg"
        height={375}
        width={794}
        className="object-cover absolute top-0 inset-x-0"
    />
        <Image
            src={"/assets/background/path7.svg"}
            alt="bg"
            height={355}
            width={794}
            className="object-cover absolute top-0 inset-x-0"
        />
        <Image
            src={"/assets/background/path9.svg"}
            alt="bg"
            height={362}
            width={794}
            className="object-cover absolute top-0 inset-x-0"
        />
        <Image
            src={"/assets/background/path11.svg"}
            alt="bg"
            height={277}
            width={794}
            className="object-cover absolute top-0 inset-x-0"
        />

        <div className="h-[289] w-[794] absolute top-0 inset-x-0">
            <Image
                src={"/assets/icons/top-vector.svg"}
                alt="bg"
                height={289}
                width={794}
                className="object-fill"
            />
        </div>
    </>
}
export default TopView;