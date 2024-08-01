import React from 'react';
import '../styles/outerAppStyles.css';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
            when: "beforeChildren",
            staggerChildren: 0.3,
            ease: "easeInOut",
            type: "tween",
        },
    },
};

const OuterAppContainer = ({ children }) => {
    return (
        <motion.div
            className="outer-app-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {children}
        </motion.div>
    );
};

export default OuterAppContainer;
