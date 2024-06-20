import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa"

const error = {
    icon: <FaExclamationTriangle className="text-red-500" />,
    message: "somthing happend wrong.",
}

const success = {
    icon: <FaCheckCircle className="text-accent" />,
    message: "respose recorded.",
}

type props = {
    type: string,
    containerStyle: string,
    iconStyle: string,
    messageStyle: string,

}

const Alert = ({type, containerStyle, iconStyle, messageStyle }: props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 0, ease: "easeIn" } }}
        >
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0, transition: { duration:1, delay: 2, ease: "easeOut" } }}
                className={containerStyle}
            >
                <div className={iconStyle}>
                    {type==="success" ? success.icon : error.icon}
                </div>
                <h3 className={messageStyle}>{type==="success" ? success.message : error.message}</h3>

            </motion.div>
        </motion.div>
    )
};

export default Alert;
