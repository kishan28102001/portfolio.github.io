import React,{useRef} from 'react'
import {motion} from "framer-motion"
const Testimonials=()=>{
    return (
        <div id='testimonials' className='md:w-10/12 mx-auto w-11/12 py-10 mb-32 text-center'>
        <div className="bg-gradient-to-r from-[#8f145d] to-[#bd4a4a] inline-block mb-6 center">
              <h2 className="text-3xl p-1">Testimonials</h2>
            </div>
        <motion.div initial={{opacity: 0, y: -150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, y: 0 }}
                    transition={{ duration: 0.6 }} 
                    className="border-b-2 text-4xl pink-text-gradient inline-block border-pink-600 mb-20">
        </motion.div>
        <div className='w-10/12 mx-auto '>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-10 '>
                <motion.div initial={{opacity: 0, x: -150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, x: 0 }}
                    transition={{ duration: 0.6 }}  
                    className='border-2  border-neutral-400 rounded-xl p-2 relative text-center bg-solid  shadow-2xl '>
                    <p className='text-sm mb-8 mt-4 w-10/12 mx-auto text-neutral-300'>"Working with Kishan was an absolute pleasure. His expertise and attention to detail brought our website to life. They had a deep understanding of our requirements and delivered a stunning, user-friendly website that exceeded our expectations. His professionalism, prompt communication, and technical skills make him a top-notch web developer."</p>
                    <h1 className='mt-2 text-xl blue-text-gradient'>Aaryan Saraswat</h1>
                    <p className='mb-6 mt-1 text-sm italic text-neutral-400'>Web Developer</p>
                    <div className='w-10 h-10 absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                        <img className='w-full h-full rounded-full object-cover object-center' src="/client2.jpg" alt="" />
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0, x: 150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className='border-2 border-neutral-400 rounded-xl p-2 relative text-center bg-solid  shadow-2xl '>
                    <p className='text-sm mb-8 mt-4 w-10/12 mx-auto text-neutral-300'>"What sets Kishan apart is not just his technical prowess, but also his commitment to continuous learning and improvement. He invests significant time and effort in staying updated with the latest programming concepts, algorithms, and data structures. This dedication allows him to tackle even the most intricate coding challenges with ease and elegance."</p>
                    <h1 className='mt-2 text-xl blue-text-gradient'>Abhishek Jaiswal</h1>
                    <p className='mb-6 mt-1 text-sm italic text-neutral-400'>Sr.Software Developer at NAV Fund Administration Group</p>
                    <div className='w-10 h-10 absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                        <img className='w-full h-full rounded-full object-cover object-center' src="/client1.jpg" alt="" />
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0, x: -150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, x: 0 }}
                    transition={{ duration: 0.6 }}  
                    className='border-2  border-neutral-400 rounded-xl p-2 relative text-center bg-solid  shadow-2xl '>
                    <p className='text-sm mb-8 mt-4 w-10/12 mx-auto text-neutral-300'>"I can't thank Satender enough for their outstanding work on our e-commerce website. They not only created a visually stunning and user-friendly platform but also implemented powerful features that enhanced our online sales. Their technical expertise, problem-solving skills, and dedication to delivering a high-quality product were truly impressive. Satender is a reliable and talented web developer who I would recommend to anyone seeking exceptional web development services."</p>
                    <h1 className='mt-2 text-xl blue-text-gradient'>Avinash Dwiwedi</h1>
                    <p className='mb-6 mt-1 text-sm italic text-neutral-400'>HOD of CSE Department at JIMS</p>
                    <div className='w-10 h-10 absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                        <img className='w-full h-full rounded-full object-cover object-center' src="/client3.png
                        " alt="" />
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0, x: 150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className='border-2 border-neutral-400 rounded-xl p-2 relative text-center bg-solid  shadow-2xl '>
                    <p className='text-sm mb-8 mt-4 w-10/12 mx-auto text-neutral-300'>"We are extremely satisfied with the web development services provided by Satender. Their technical skills, combined with their excellent project management, resulted in a seamless and efficient development process. They were attentive to our needs, responsive to our feedback, and delivered a website that perfectly aligned with our vision. Satender is a talented and reliable professional who I would recommend to anyone looking for top-quality web development services."</p>
                    <h1 className='mt-2 text-xl blue-text-gradient'>Sarah Johnson</h1>
                    <p className='mb-6 mt-1 text-sm italic text-neutral-400'>CEO of Innovate Technologies</p>
                    <div className='w-10 h-10 absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                        <img className='w-full h-full rounded-full object-cover object-center' src="/client4.jpg" alt="" />
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
    )
}

export default Testimonials;