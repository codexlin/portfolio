import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div
          className="
        lg:gap-x-20 lg:gap-y-0 h-screen
        flex flex-col gap-y-10 lg:flex-row lg:items-center"
        >
          {/*  img*/}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/*text*/}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">关于我.</h2>
            <h3 className="h3 mb-4">
              我有良好的沟通和问题解决能力并拥有广泛的前端技术知识，包括HTML、CSS和JavaScript，以及流行的前端框架如React和Vue.js。能够创建语义化的网页结构和精美的响应式网站。经验丰富的React.js和Vue.js开发，能够构建交互式单页应用（SPA）。熟悉常用库高效管理和开发项目并且优化代码和资源以提高网页加载速度和性能.
            </h3>
            <p className="mb-6">更多</p>
            {/*  stats*/}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="mb-2 text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className="mb-2 text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="mb-2 text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">联系我</button>
              <a href="#" className="text-gradient btn-link">
                iFolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
