import React, {useRef} from "react";
import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Footer from './components/footer/Footer'

function App() {

  const homeRef = useRef()
  const aboutRef = useRef()
  const portfolioRef = useRef()
  const footerRef = useRef()

  const scroll = () => {
    aboutRef.current.scrollIntoView()
  }


  return (
    <div className="App" >
      <Header scroll={scroll}
       />
      <Home reference={homeRef} />
      <About reference={aboutRef}/>
      <div className='spacer'></div>
      <Portfolio reference={portfolioRef} />  
      {/* <Contact /> */}
      <Footer reference={footerRef}/>
    </div>
  );
}

export default App;
