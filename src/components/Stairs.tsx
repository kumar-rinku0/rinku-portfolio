import { motion } from "framer-motion"


const stairAnimation = {
    initial: {
        top : "0%",
    }, 
    animate: {
        top : "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }
}

const reverseIndex = (index : number) => {
    const totalStairs = 6;
    return totalStairs - index -1;
}

const Stairs = () => {
  return (
    <>
    {[...Array(6)].map((_, index) => {
        return (<motion.div 
        key={index}
        variants={stairAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
            duration :"0.4",
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1
        }}
        className="w-full h-full bg-white relative"
        />
    );
    })}
    </>
  )
}

export default Stairs