
import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { X } from "@mui/icons-material";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
        className="parallax"
        ref={ref}
        style={{
            background:
            type === "certi"
                ? "linear-gradient(180deg, #111, #000)"
                : "linear-gradient(180deg, #000, #111)",
        }}
    >
        <motion.h1 style={{ y: yText }}>
            {type === "certi" ? "Certificates " : "Projects"}
        </motion.h1>
        <motion.div
            style={{
            y: yBg,
            backgroundImage: `url(${
                type === "certi" ? "./stars.png" : ""
            })`,
            }}
        ></motion.div>
        <motion.div style={{ X: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
