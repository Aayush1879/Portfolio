import { duration } from '@mui/material';
import './hero.scss';
import {motion} from "framer-motion";
import Contact from '../Contact/Contact';
export default function Hero(){
    
    const textVariants = {
        initial:{
            x: -500,
            opacity: 0,
        },
        animate:{
            x:0,
            opacity: 1,
            transition:{
                duration:1.5,
                staggerChildren: 0.1,
            },
        },
        scrollButton: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 3,
                repeat: Infinity,
            },
        },
    };
    const sliderVariants = {
        initial: {
          x: 0,
        },
        animate: {
            x: "-500%",
            transition: {
                repeat: Infinity,
                repeatType:"mirror",
                duration: 15,
            },
        },
    };
    return(
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Aayush Dangi</motion.h2>
                    <motion.h1 variants={textVariants}>Full-Stack Web Developer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        {/* <motion.button variants={textVariants}><a href={Contact}>See latest work</a></motion.button>
                        <motion.button variants={textVariants}> <a href={Contact}>Hire me</a></motion.button> */}
                        {/* <button><a href={Contact}>Hi</a></button> */}
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" className='bu'/>    
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer"  variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                Frontend Backend Database
            </motion.div>
            <motion.div className="imageContainer">
                <img src="hero.jpg" alt="" />
            </motion.div>
        </div>
    )
}