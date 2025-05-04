import '../../App.css'
import Navbar from '../../components/navbar/navbar'
import Introduction from '../../components/introduction/introduction'
import About from '../../components/About/about'
import Projects from '../../components/projects/projects'
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'

function Home() {

  return (
    <>
    <Navbar/>
    <Introduction/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home