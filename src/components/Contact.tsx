import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-1 justify-start items-center"
        >
          {/*text*/}
          <div className="flex-1">
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">Get in touch</h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's Work <br /> together!
              </h2>
            </div>
          </div>
          {/*form*/}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6
          pb-24 p-6 items-start"
          >
            <input
              type="text"
              className="bg-transparent border-b py-3 placeholder:text-white focus:border-accent transition-all outline-none w-full"
              placeholder="Your name"
            />
            <input
              type="text"
              className="bg-transparent border-b py-3 placeholder:text-white focus:border-accent transition-all outline-none w-full"
              placeholder="Your email"
            />
            <textarea
              className="resize-none mb-12 bg-transparent border-b py-12 placeholder:text-white focus:border-accent transition-all outline-none w-full"
              placeholder="Your message"
            />
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
