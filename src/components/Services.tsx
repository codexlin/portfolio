import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { BsArrowUpRight } from 'react-icons/bs'

const services = [
  {
    name: '前端开发',
    desc: '主要使用React18+Vue3+TypeScript等技术栈进行前端开发',
    link: '了解更多'
  },
  {
    name: '后端开发',
    desc: '主要使用基于SpringBoot3+Mysql8.0+MyBatis-Plus技术栈开发后端',
    link: '了解更多'
  },
  {
    name: 'UI/UX 设计',
    desc: '使用工具如Figma或Sketch来创建原型和设计界面',
    link: '了解更多'
  }
]

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/*text*/}
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat"
          >
            <h2 className="h2 text-accent mb-6">我做什么.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              我主要参与前端开发与后端开发.包括搭建项目框架,开发系统功能,编写测试文档,项目部署上线...
            </h3>
            <button className="btn btn-sm">看我的作品</button>
          </motion.div>
          {/*services*/}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* list*/}
            <div>
              {services.map((service, index) => {
                const { name, desc, link } = service
                return (
                  <div className="border-b border-white/20 h-[146px] mb-[38px] flex" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>

                      <p className="font-secondary leading-tight">{desc}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
