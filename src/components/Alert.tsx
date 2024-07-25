import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import {
    FaCheckCircle,
    FaExclamationTriangle,
    FaExclamationCircle,
} from "react-icons/fa";
import { Duru_Sans } from "next/font/google";

const errorTypes = [
    {
        type: "error",
        icon: <FaExclamationCircle className="text-red-500" />,
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
    {
        type: "server3",
        icon: <FaExclamationTriangle className="text-yellow-500" />,
        message: "server error!!",
    },
];

type AlertProps = {
    type: string;
    containerStyle?: string;
    iconStyle?: string;
    messageStyle?: string;
    delay?: number;
};

type ErrorTypeProps = {
    type: string;
    icon: React.JSX.Element;
    message: string;
};

const alertAnimation = {
    hidden: {
        opacity: 0,
        x: "-80vw",
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            type: "spring",
            ease: "easeIn",
        },
    },
};

const Alert = ({
    type,
    containerStyle,
    iconStyle,
    messageStyle,
    delay,
}: AlertProps) => {
    const errorType: ErrorTypeProps[] = errorTypes.filter(
        (error) => error.type === type
    );
    return (
        <motion.div
            variants={alertAnimation}
            initial="hidden"
            animate="visible"
            exit={{
                opacity: 0,
                x: "80vw",
                transition: { delay: delay || 0, type: "spring", duration: 1 },
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
