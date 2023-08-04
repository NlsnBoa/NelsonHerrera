import { useState } from 'react'
import Nav from "./components/Nav"
import './App.css'
import Typewriter from 'typewriter-effect'

function App() {
  const [togglePage, setTogglePage] = useState("")
  const [skipFlag, setSkipFlag] = useState(false)
  const [typing, setTyping] = useState('runIntroduction')

  const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

  async function handleNavClick (page: string, smoothTransition: boolean = false) {
    if (smoothTransition && togglePage !== page) {
      setTogglePage("")
      setSkipFlag(true)
      await sleep(700)

      setTogglePage(page)
      setSkipFlag(false)
      return
    }

    if (togglePage === page) {
      console.log("turned-off", page)
      setTogglePage("")
    } else {
      setTogglePage(page)
      console.log("page set", page)
    }
  }

  return (
    <>
      <div className='body'>
        <div className='navBar'>
          <ul className='navBarMenu'>
            <li onClick={() => handleNavClick(togglePage)} > 
              <div className={((togglePage === "" && !skipFlag) ? "homepageNavOn" : "homepageNavOff")} >Home</div> 
            </li>
            <li onClick={() => { (togglePage === "") ? handleNavClick("left") : handleNavClick("left", true)}} >
              <div className={(togglePage === "left" ? "aboutpageNavOn" : "aboutpageNavOff")} >About</div> 
            </li>
            <li onClick={() => { (togglePage === "") ? handleNavClick("bottom") : handleNavClick("bottom", true)}}  > 
              <div  className={(togglePage === "bottom" ? "projectspageNavOn" : "projectspageNavOff")} >Projects</div>
            </li>
            <li onClick={() => { (togglePage === "") ? handleNavClick("right") : handleNavClick("right", true)}}  > 
              <div className={(togglePage === "right" ? "contactpageNavOn" : "contactpageNavOff")} >Contact</div>
            </li>
          </ul>
        </div>
        {
          ("runTitle" === typing) &&
          <div className="name-plate">
            <div className={(togglePage === "" || togglePage === "right") ? "Name" : "NameOff"}>
              <Typewriter options={{ cursor: '', }} onInit={(typer)=> {
                typer.changeDelay(50)
                .pauseFor(100)
                .typeString("<span class='nameFont' >Nelson Herrera</span>")
                .pauseFor(100)
                .typeString("<br class='title' />")
                .pauseFor(300)
                .typeString("<span  class='title' >Full-Stack Developer</span>")
                .start()
              }}/>
            </div>
          </div>
        }
        {
          ("runIntroduction" === typing) &&
          (<div className='typeWriterPlate'>
            <div className={(togglePage === "" || togglePage === "right") ? "typeWriter" : "typeWriterOff"} >
              <Typewriter options={{

                }}
              onInit={(typer)=> {
                typer.changeDelay(30)
                .typeString("Hi, my name is Nelson! ")
                .pauseFor(200)
                .deleteAll(12)
                .pauseFor(100)
                .typeString("I'm a Computer Science undergraduate student at UCF with a passion for <span class='creativeFont'>Creating. </span>")
                .pauseFor(200)
                .changeDeleteSpeed(10)
                .deleteChars(10)
                .typeString("<span class='learningFont' >Learning. </span>")
                .pauseFor(200)
                .changeDeleteSpeed(10)
                .deleteChars(10)
                .typeString("<span class='programmingFont' >and Programming. </span>")
                .pauseFor(220)
                .deleteAll(14)
                .pauseFor(100)
                .typeString("If you have any questions, feel free to contact me. ")
                .pauseFor(200)
                .deleteAll(10)
                // .typeString("Thank you for visi")
                // .pauseFor(800)
                // .deleteAll(30)
                .callFunction(() => { setTyping("runTitle")})
                .start()
              }}/>
            </div>

          </div>)
        }
  

        {
          (togglePage === "" || togglePage === "left" || togglePage === 'right') &&
          (<div className='leftContainer'>
            <Nav handleNavClick={handleNavClick} togglePage={togglePage} orientation='left'>{"About"}</Nav>
          </div>)
        } 
        {     
          (togglePage === "" || togglePage === "right" ) && 
          (<div className='rightContainer'>
            <Nav handleNavClick={handleNavClick} togglePage={togglePage} orientation='right'>{"Contact"}</Nav>
          </div>)
        }   
        {
          (togglePage === "" || togglePage === "bottom" || togglePage === 'right') &&
          (<div className='bottomContainer'>
            <Nav handleNavClick={handleNavClick} togglePage={togglePage} orientation='bottom'>{"Projects"}</Nav>
          </div>)
        }
      </div>
    </>
  )
}

export default App
