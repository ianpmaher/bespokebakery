import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollDiv = ({ children }) => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-2 bg-dracula-purple rounded-xl"
    >
      {children}
    </motion.div>
  );
};

const ScrollYDiv = ({ className }) => {
  const { scrollYProgress } = useScroll();
  // useSpring(scrollYProgress, { stiffness: 400, damping: 90 });
  const scale = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });
  const progressStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 1,
    height: "10px",
    width: "100vw",
    backgroundColor: "#c5da33",
    borderRadius: "8px",
    transformOrigin: "top left",
    zIndex: 100,
    scaleX: scrollYProgress,
  };

  return (
    <motion.div
      style={{ scaleY: scale }}
      className="fixed top-0 left-0 right-1 h-full w-[20px] bg-custom8008-error-color rounded-md origin-top-left z-[100] "
    >
      {/* {children} */}
    </motion.div>
  );
  // return(
  //     <motion.div style={{ scaleY: scrollYProgress}} className={`${className}` }>
  //         {children}
  //     </motion.div>
  // );
};

export default ScrollYDiv;
