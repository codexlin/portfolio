import { Link } from 'react-scroll'
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsBriefcase, BsChatSquare, BsClipboardData } from 'react-icons/bs'

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/*nav*/}
        <div
          className="w-full bg-black/20 h-[96px] backdrop-blur-2xl
        rounded-full max-w-[460px] mx-auto px-5 flex justify-between
         items-center text-2xl text-white/50"
        >
          <Link
            spy={true}
            activeClass="active"
            smooth={true}
            offset={-200}
            to="home"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            spy={true}
            activeClass="active"
            smooth={true}
            to="about"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BiUser />
          </Link>
          <Link
            spy={true}
            activeClass="active"
            smooth={true}
            to="services"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            spy={true}
            activeClass="active"
            smooth={true}
            to="work"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            spy={true}
            activeClass="active"
            smooth={true}
            to="contact"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
