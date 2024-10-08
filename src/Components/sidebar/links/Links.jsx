
import { SpeedDial } from "@mui/material";
import { delay, motion } from "framer-motion"; 
export default function Links(){
    const variants = {
        open:{
            transition:{
                delay:1,
                SpeedDial:4,
                staggerChildren: 0.1,
            },
        },
        closed:{
            transition: {
                delay:0.5,
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        }
    };
    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
        },
        closed: {
            y: 50,
            opacity: 0,
        },
    };

    const items = ["Homepage","About","Skills","Certificates","Projects","Contact"];
    return(
        <motion.div className="links" variants={variants}>
            {items.map(item=>(<motion.a href={`#${item}`} key={item} variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {item}
            </motion.a>))}
        </motion.div>
    );
};   