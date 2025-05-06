import useData from "@/hooks/useData";
import { PersonType } from "@/types";

const TypeContainer = () => {
    const { setPersonType } = useData();
    return <div className="bg-black flex h-full w-full">
        <div className="flex flex-1 bg-blue-500 group hover:grow-[1.5] transition-all duration-300 ease-linear justify-center place-items-center cursor-pointer p-5" onClick={() => setPersonType(PersonType.MAGNAI)}>
            <p className="text-xl xs:text-3xl md:text-5xl text-center text-orange-500">Батмагнайгийн<br/>хамт олон</p>
        </div>
        <div className="flex flex-1 bg-orange-500 hover:grow-[1.5] transition-all duration-300 ease-linear justify-center place-items-center cursor-pointer p-5" onClick={() => setPersonType(PersonType.ARI)}>
            <p className="text-xl xs:text-3xl md:text-5xl text-center  text-blue-500">Ариунжаргалын<br/>хамт олон</p>
        </div>
    </div>
}
export default TypeContainer;