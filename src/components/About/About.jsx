import React, { useEffect } from 'react';
import {useAnimation, motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import Text from './Text'
import Spot from './Spot'
const About = () =>{
    const controls = useAnimation();
    const [ref,inView] = useInView();

    useEffect(() => {
        if(inView){
            controls.start('show');
        }
    }, [controls,inView]);
    const imageVariants={
        hidden:{
            opacity:0, scale:0
        },
        show:{
            opacity:1,scale:1,
        }
    }
    return(
        
        <section id="about" className='relative xl:-mt-[30px] md:mt-[100px] mt-[10px] lg:w-10/12 w-11/12 mx-auto'>
            <div className="text-center mb-20">
            <div className="bg-gradient-to-r from-[#8f145d] to-[#bd4a4a] inline-block mb-6 center">
                <h2 className="text-3xl p-1">About</h2>
            </div>
            <h2>About my Skills</h2>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 md:w-full w-11/12 mx-auto'>
                <motion.div
                    ref={ref}
                    initial='hidden'
                    animate={controls}
                    variants={imageVariants}
                    transition={{
                        duration: 0.8,
                        delay:0.5,
                        ease: [0,0.71,0.2,1.01]
                    }}
                    className=" image image-wrapper  md:block visible  bg-[#fff]"
                >
                    <img src='../../../images/200w.webp' className="h-auto max-w-full ml-20 mt-20" alt="" />
                </motion.div>
                <Text></Text>
                <Spot></Spot>
            </div> 
        </section>
    )
}
export default About;