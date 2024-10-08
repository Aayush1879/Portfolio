import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import './certificate.scss';

    const items = [
        {
            id: 1,
            title: "Java 1",
            img: "./certi(2).png",
            desc: "Learned basic java and understood the concepts of programming.",
            ref: "./COURSERA_CERTIFICATE.pdf",
        },
        {
            id: 2,
            title: "Java 2",
            img: "./certi(3).png",
            desc: "Learned advanced java and data structures",
            ref: "./Inheritance certi.pdf"
        },
        {
            id: 3,
            title: "Frontend development",
            img: "./certi(1).png",
            desc: "Learned about Front-End web development through this amazing course and the main thing it taught me was to stay disciplined through the learning phase",
            ref: "./certificate(coursera).pdf"
        },
    ];

    const Single = ({item})=>{
        const ref = useRef();
        const { scrollYProgress } = useScroll({
            target: ref,
        });
        const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

        return (
            <section >
                <div className="container">
                    <div className="wrapper">
                        <div className="imageContainer" ref={ref}>
                            <img src={item.img} alt="" />
                        </div>
                        <motion.div className="textContainer" style={{y}}>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <button><a href={item.ref} target="_blank" >Click to see certificate</a></button>
                        </motion.div>
                    </div>
                </div>
            </section>
        )
    }

export default function Certificate(){
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 50,
    });

    return (
        <div className='certificate'>
            <div className="progress">
                {/* <h1>Certificates</h1> */}
                <motion.div className="progressbar" style={{ scaleX }}></motion.div>
            </div>
            {items.map((item)=>(
                <Single item={item} key={item.id}></Single>
            ))}
            </div>
    )
}