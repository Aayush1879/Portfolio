import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import './project.scss';

    const items = [
        {
            id: 1,
            title: "WertEra Tshirt Printing (Fullstack project)",
            img: "./project(4).png",
            desc: "✨ Drag and Drop their designs. Customize T-shirt colors, sizes, sleeve, and neck styles.💰 Seamlessly pay using Stripe. 📦 View a complete purchase summary before checkout. 🔄 Track your progress with completed steps visible when navigating between pages.🔐 There’s also a secret admin dashboard that tracks real-time sales, accessible only with the admin email! 🚧 I’m still working through deployment issues(stripe webhook integration) and continuing to make updates.   ",
            ref: "https://www.linkedin.com/feed/update/urn:li:activity:7247329298334834688/",
        },
        {
            id: 2,
            title: "Full-Stack Project (Airbnb)",
            img: "./project(3).png",
            desc: "Frontend: HTML, CSS: Crafting a visually appealing and responsive user interface. JavaScript: Implementing dynamic and interactive features for a delightful user experience.   Backend: Node.js: Creating a scalable and efficient server environment.Express.js: Streamlining the development of robust backend APIs.MongoDB: Storing and managing data in a flexible and scalable NoSQL database.",
            ref: "https://fullstack-project-s6lq.onrender.com/listings",
        },
        {
            id: 3,
            title: "Simon-Says Game ",
            img: "./project(2).png",
            desc: "Experience the classic memory and pattern recognition game brought to life in this interactive Simon Says project. Crafted with HTML, CSS, and JavaScript, this web-based game offers a delightful blend of design and functionality.",
            ref: "https://aayush1879.github.io/Simon_Says_Game/",
        },
        {
            id: 4,
            title: "Spotify Clone",
            img: "./project(1).png",
            desc: "The Spotify Clone project is a web application designed to replicate the core features of the popular music streaming platform, Spotify. This project showcases skills in Front-End Development.Technologies used: HTML,CSS",
            ref: "https://aayush1879.github.io/Spotify-clone/",
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
                            <button><a href={item.ref} target="_blank">See Demo</a></button>
                        </motion.div>
                    </div>
                </div>
            </section>
        )
    }

export default function Project(){
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
        <div className='project'>
            <div className="progress">
                {/* <h1>Projects</h1> */}
                <motion.div className="progressbar" style={{ scaleX }}></motion.div>
            </div>
            {items.map((item)=>(
                <Single item={item} key={item.id}></Single>
            ))}
        </div>
    )
}