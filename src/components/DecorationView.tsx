import Image from "next/image";
import { motion } from "motion/react";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5, // Each child animates 0.5s apart
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

const DecorationView = () => {
    return <div className="h-full w-full pl-16 pr-12 pt-8 pb-0 z-10 absolute">
        <div className="h-full w-full flex justify-between place-content-between">
            <motion.div
                className="flex flex-1 flex-col justify-between place-items-start"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                <motion.div
                    variants={itemVariants}
                    transition={{ type: "tween", duration: 0.5 }}
                >
                    <Image
                        src={"/assets/icons/1.svg"}
                        alt="bg"
                        height={280}
                        width={220}
                        className="object-contain"
                    />
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    transition={{ type: "tween", duration: 0.5 }}
                >
                    <Image
                        src={"/assets/icons/2.svg"}
                        alt="bg"
                        height={180}
                        width={180}
                        className="object-contain"
                    />
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    transition={{ type: "tween", duration: 0.5 }}
                >
                    <Image
                        src={"/assets/icons/3.svg"}
                        alt="bg"
                        height={100}
                        width={160}
                        className="object-contain"
                    />
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    transition={{ type: "tween", duration: 0.5 }}
                >
                    <Image
                        src={"/assets/icons/4.svg"}
                        alt="bg"
                        height={219}
                        width={191}
                        className="object-contain"
                    />
                </motion.div>
            </motion.div>
            <motion.div
                className="flex flex-1 flex-col justify-center place-items-end"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                <motion.div
                    variants={itemVariants}
                    transition={{ type: "tween", duration: 0.5 }}
                >
                    <Image
                        src={"/assets/icons/5.svg"}
                        alt="bg"
                        height={227}
                        width={247}
                        className="object-contain"
                    />
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    transition={{ type: "tween", duration: 0.5 }}
                >
                    <Image
                        src={"/assets/icons/6.svg"}
                        alt="bg"
                        height={190}
                        width={196}
                        className="object-contain"
                    />
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    transition={{ type: "tween", duration: 0.5 }}
                >
                    <Image
                        src={"/assets/icons/7.svg"}
                        alt="bg"
                        height={197}
                        width={214}
                        className="object-contain"
                    />
                </motion.div>
            </motion.div>
        </div>
    </div >
}
export default DecorationView;