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
    hidden: { opacity: 0, y: -400 }, // Start from above
    show: { opacity: 1, y: 0 }, // Move down smoothly
};

const TopView = () => {
    return <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
    >
        <motion.div
            className="absolute top-0 inset-x-0"
            variants={itemVariants}
            transition={{ type: "tween", duration: 0.5 }}
        >
            <Image
                src={"/assets/background/path5.svg"}
                alt="bg"
                height={375}
                width={794}
                className="object-cover"
            />
        </motion.div>
        <motion.div
            className="absolute top-0 inset-x-0"
            variants={itemVariants}
            transition={{ type: "tween", duration: 0.5 }}
        >
            <Image
                src={"/assets/background/path7.svg"}
                alt="bg"
                height={355}
                width={794}
                className="object-cover"
            />
        </motion.div>
        <motion.div
            className="absolute top-0 inset-x-0"
            variants={itemVariants}
            transition={{ type: "tween", duration: 0.5 }}
        >
            <Image
                src={"/assets/background/path9.svg"}
                alt="bg"
                height={362}
                width={794}
                className="object-cover"
            />
        </motion.div>
        <motion.div
            className="absolute top-0 inset-x-0"
            variants={itemVariants}
            transition={{ type: "tween", duration: 0.5 }}
        >
            <Image
                src={"/assets/background/path11.svg"}
                alt="bg"
                height={277}
                width={794}
                className="object-cover"
            />
        </motion.div>
        <motion.div
            className="absolute top-0 inset-x-0"
            variants={itemVariants}
            transition={{ type: "tween", duration: 0.5 }}
        >
            <Image
                src={"/assets/icons/top-vector.svg"}
                alt="bg"
                height={289}
                width={794}
                className="object-fill"
            />
        </motion.div>
    </motion.div>
}
export default TopView;