import useData from "@/hooks/useData";
import { PersonType } from "@/types";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const TypeContainer = () => {
    const { setPersonType } = useData();
    const [person, setPerson] = useState<PersonType>();

    const onPressSendInfo = (type: PersonType) => {
        setPerson(type);
        setTimeout(() => {
            setPersonType(type);
        }, 600);
    }
    return <div className="bg-black flex h-full w-full">
        <AnimatePresence mode="wait">
            {person != PersonType.ARI && <motion.div
                className="flex flex-1 bg-blue-500 justify-center place-items-center cursor-pointer"
                whileHover={person == undefined ? {
                    flexGrow: 1.5,
                    transition: { duration: 0.2 },
                } : undefined}
                transition={{
                    type: "tween",
                    duration: 0.5,
                }}
                initial={{ flex: 1 }}
                animate={{ flex: 1 }}
                exit={{ flex: 0 }} // Hide animation when removed
                onClick={() => onPressSendInfo(PersonType.MAGNAI)}
            >
                {person == undefined && <motion.p initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.1,
                    }}
                    exit={{ opacity: 0, scale: 0.1 }} className="text-xl xs:text-3xl md:text-5xl text-center text-orange-500">Батмагнайгийн<br />хамт олон</motion.p>}
            </motion.div>}
        </AnimatePresence>
        <AnimatePresence mode="wait">
            {person != PersonType.MAGNAI && <motion.div
                className="flex flex-1 bg-orange-500 justify-center place-items-center cursor-pointer"
                whileHover={person == undefined ? {
                    flexGrow: 1.5,
                    transition: { duration: 0.2 },
                } : undefined}
                transition={{
                    type: "tween",
                    duration: 0.5,
                }}
                initial={{ flex: 1 }}
                animate={{ flex: 1 }}
                exit={{ flex: 0 }} // Hide animation when removed
                onClick={() => onPressSendInfo(PersonType.ARI)}
            >
                {person == undefined && <motion.p initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.1,
                    }}
                    exit={{ opacity: 0, scale: 0.1 }} className="text-xl xs:text-3xl md:text-5xl text-center text-blue-500">Ариунжаргалын<br />хамт олон</motion.p>}
            </motion.div>}
        </AnimatePresence>
    </div >
}
export default TypeContainer;