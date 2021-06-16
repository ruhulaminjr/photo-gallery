import React from "react";
import { motion } from "framer-motion";
const Modal = ({ selectedIMG, setSelectedIMG }) => {
  const clickHandler = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedIMG(null);
    }
  };
  return (
    <motion.div className="backdrop" onClick={clickHandler}
    initial={{y:"150vh"}}
    animate={{y:0}}
    >
      <motion.img
        src={selectedIMG}
        alt="big-img"
        initial={{ y: -"-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
