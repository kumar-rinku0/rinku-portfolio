import React, { ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

const errorTypes = [
    {
        type: "error",
        icon: <FaExclamationTriangle className="text-red-500" />,
        message: "fill out the details.",
    },
    {
        type: "success",
        icon: <FaCheckCircle className="text-accent" />,
        message: "respose recorded.",
    },
    {
        type: "server1",
        icon: <FaExclamationTriangle className="text-red-500" />,
        message: "e-mail already exist.",
    },
    {
        type: "server2",
        icon: <FaExclamationTriangle className="text-red-500" />,
        message: "phone no already exist.",
    },
];

type props = {
    type: string;
    containerStyle: string;
    iconStyle: string;
    messageStyle: string;
};

type prop = {
    type: string;
    icon: React.JSX.Element;
    message: string;
};

const Alert = ({ type, containerStyle, iconStyle, messageStyle }: props) => {
    const errorType: prop[] = errorTypes.filter((error) => error.type === type);
    return (
        <motion.div
            initial={{ opacity: 0, x: "-100vw" }}
            animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, type: "spring", ease: "easeIn" },
            }}
            exit={{
                opacity: 0,
                x: "100vw",
                transition: {
                    duration: 1,
                    type: "spring",
                    delay: 1,
                    ease: "easeOut",
                },
            }}
            className="top-0 left-0 right-0 fixed"
        >
            <div className={containerStyle}>
                {errorType.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="flex justify-center items-center gap-4"
                        >
                            <div key={index} className={iconStyle}>
                                {item.icon}
                            </div>
                            <h3 className={messageStyle}>{item.message}</h3>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default Alert;
