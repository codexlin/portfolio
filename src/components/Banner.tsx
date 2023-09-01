import Image from '../assets/avatar.svg'
import { FaGithub, FaYoutube } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12"
        >
          {/*text*/}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              ACE <span>Lin</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]
          "
            >
              <span className="text-white mr-4">我是一名</span>
              <TypeAnimation
                sequence={['前端工程师', 2000, '后端工程师', 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              大家好，我是Lin，一名热衷于前端开发的工程师。我热衷于不断学习新的技术和最佳实践，以保持在快速发展的前端领域中的竞争力。在我的业余时间，我喜欢分享我的知识和见解，实现小案例，撰写前端开发博客，并积极参与开源社区。
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">联系我</button>
              <a href="#" className="text-gradient btn-link">
                iFolio
              </a>
            </motion.div>
            {/*  socials*/}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
            </motion.div>
          </div>
          {/*image*/}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] "
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner
