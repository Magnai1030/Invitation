import Image from "next/image";
import { motion } from "motion/react";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Each child animates 0.5s apart
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 1300 }, // Start from above
    show: { opacity: 1, y: 0 }, // Move down smoothly
};

const BottomView = () => {
    return <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
    ><motion.div
        className="absolute bottom-0 inset-x-0"
        variants={itemVariants}
        transition={{ type: "tween", duration: 0.5 }}
    >
            <Image
                src={"/assets/background/path13.svg"}
                alt="bg"
                height={458}
                width={794}
                className="object-cover"
            />
        </motion.div>
        <motion.div
            className="absolute bottom-7 inset-x-0"
            variants={itemVariants}
            transition={{ type: "tween", duration: 0.5 }}
        >
            <Image
                src={"/assets/background/path15.svg"}
                alt="bg"
                height={316}
                width={794}
                className="object-cover"
            />
        </motion.div>
        <motion.div
            className="absolute bottom-0 inset-x-0"
            variants={itemVariants}
            transition={{ type: "tween", duration: 0.5 }}
        >
            <Image
                src={"/assets/background/path17.svg"}
                alt="bg"
                height={302}
                width={794}
                className="object-cover"
            />
        </motion.div>
        <motion.div
            className="absolute bottom-0 inset-x-0"
            variants={itemVariants}
            transition={{ type: "tween", duration: 0.5 }}
        >
            <Image
                src={"/assets/icons/bottom-vector.svg"}
                alt="bg"
                height={192}
                width={794}
                className="object-fill"
            />
        </motion.div>
    </motion.div>
}
export default BottomView;