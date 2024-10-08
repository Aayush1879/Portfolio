import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {motion} from 'framer-motion';
import  "./navbar.scss";
import Sidebar from '../sidebar/Sidebar';
export default function Navbar(){
    return(
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                    initial={{opacity:0 , scale:0.5}} 
                    animate={{opacity:1 , scale:1}} 
                    transition={{duration:0.5}}
                    className='port'
                >
                    Portfolio
                </motion.span>
                <motion.div className="social" 
                    initial={{opacity:0 , scale:0.1}} 
                    animate={{opacity:1 , scale:1}} 
                    transition={{duration:0.5}}
                >
                    <a href="https://www.instagram.com/aayush_1879/" target='_blank'><InstagramIcon></InstagramIcon></a>
                    <a href="https://www.linkedin.com/in/aayush-dangi-14608a247/" target='_blank'><LinkedInIcon/></a>
                    <a href="https://github.com/Aayush1879" target='_blank'><GitHubIcon/></a>
                </motion.div>
            </div>

        </div>
    )
}