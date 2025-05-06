import Image from "next/image";

const DecorationView = () => {
    return <div className="h-full w-full pl-16 pr-12 pt-28 pb-0 z-10 absolute">
        <div className="h-full w-full flex justify-between place-content-between">
            <div className="flex flex-1 flex-col justify-between place-items-start" >
                <Image
                    src={"/assets/icons/1.svg"}
                    alt="bg"
                    height={380}
                    width={299}
                    className="object-contain"
                />
                <Image
                    src={"/assets/icons/2.svg"}
                    alt="bg"
                    height={283}
                    width={242}
                    className="object-contain"
                />
                <Image
                    src={"/assets/icons/3.svg"}
                    alt="bg"
                    height={153}
                    width={160}
                    className="object-contain"
                />
                <Image
                    src={"/assets/icons/4.svg"}
                    alt="bg"
                    height={219}
                    width={191}
                    className="object-contain"
                />
            </div>
            <div className="flex flex-1 flex-col justify-center place-items-end" >
                <Image
                    src={"/assets/icons/5.svg"}
                    alt="bg"
                    height={227}
                    width={247}
                    className="object-contain"
                />
                <Image
                    src={"/assets/icons/6.svg"}
                    alt="bg"
                    height={190}
                    width={196}
                    className="object-contain"
                />
                <Image
                    src={"/assets/icons/7.svg"}
                    alt="bg"
                    height={197}
                    width={214}
                    className="object-contain"
                />
            </div>
        </div>
    </div>
}
export default DecorationView;