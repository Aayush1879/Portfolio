import ToggleButton from "./togglebutton/ToggleButton";
import Links from "./links/Links";
import "./sidebar.scss";    
import { useState } from "react";
import { delay, motion } from "framer-motion"; 
export default function Sidebar(){
    const[open,setOpen] = useState(false);
    const variants = {
        open: {
            clipPath:"circle(1200px at 50px 50px)",
            transition:{
                type:"String",
                stifness:400,
                damping:40,
            }
        },
        closed:{
            clipPath : "circle(30px at 50px 50px)",
            transition:{
                delay:0.5,
                type:'spring',
                stifness:400,
                damping:40, 
            }
        },
    }
    return (
        <motion.div className="Sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                    <Links/>
            </motion.div>
            <ToggleButton setOpen={setOpen}/> 
        </motion.div>
    );
};