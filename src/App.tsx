/*
 * @Author: LinRenJie xoxosos666@gmail.com
 * @Date: 2023-08-29 23:46:59
 * @Description:
 */
import Banner from './components/Banner'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import './App.css'

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  )
}

export default App
