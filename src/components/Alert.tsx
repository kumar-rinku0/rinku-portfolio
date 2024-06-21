import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa"


const errorTypes = [
    {
        type: "error",
        icon: <FaExclamationTriangle className="text-red-500" />,
        message: "somthing happend wrong.",
    },
    {
        type: "success",
        icon: <FaCheckCircle className="text-accent" />,
        message: "respose recorded.",
    },
    {
        type: "server",
        icon: <FaExclamationTriangle className="text-red-500" />,
        message: "email already exist.",
    }
]


type props = {
    type: string,
    containerStyle: string,
    iconStyle: string,
    messageStyle: string,

}

type prop = {
    type: string,
    icon: React.JSX.Element,
    message: string,
}

const Alert = ({ type, containerStyle, iconStyle, messageStyle }: props) => {
    const errorType: prop[] = errorTypes.filter((error) => error.type === type);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 0, ease: "easeIn" } }}
        >
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0, transition: { duration: 1, delay: 2, ease: "easeOut" } }}
                className={containerStyle}
            >
                {errorType.map((item, index) => {
                    return (
                        <div key={index} className="flex justify-center items-center gap-4">
                            <div key={index} className={iconStyle}>{item.icon}</div>
                            <h3 className={messageStyle}>{item.message}</h3>
                        </div>
                    )
                })}

            </motion.div>
        </motion.div>
    )
};


export default Alert;
