// import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import styles from "./About.module.css";
import Photo from "../Photo";

const About = () => {

    // allows the photo to enter the component without causing lag
    const [showPhoto, setPhoto] = useState(false)

    const [imgVisibilty, setImgVisibility] = useState('Off')
  
    async function delayImgVisibility() {
      setTimeout(() => {
        setImgVisibility("On")
      }, 100)
    }
  
    // 1250
    setTimeout(() => {
      setPhoto(true)
    }, 1250)
    


  return (
    <div className={styles.contentContainer}>

      <div className={styles.aboutIntroContainer}>
        <div className={styles.title}>
          <h1>I want to make software, <span className={styles.specialTitle}>and love algorithms.</span></h1>
        </div>
        <div className={styles.introDescriptionContainer}>
          <p className={styles.introduction}>
            <br />When I was three years old my parents and I moved to the United States from Colombia. We moved for several reasons one of which was that I would have more opportunities. Therefore, it is only because of them I have made it this far. <br /> <br />For most of my life, I have loved technology and as I grew up I played a lot on my Xbox and Nintendo DS. I've always had a love for solving puzzles and building things in creative ways. Whether it was building a mini vending machine from Legos to Go-Karts made from wood, I never stopped making things. Today, I love reading autobiographies and manga. I also really enjoy drawing and journaling. In high school, I started going to the gym and now follow a calisthenics and weightlifting regimen that helps me stay disciplined. 
          </p>
          <br />
          <p className={styles.introduction} >Now lets pivot to some of the things I've learned. </p>
          <br />
          <p className={styles.introduction}>
            As a computer science undergraduate who's worked in a fast-paced startup, I have developed a very strong background in a wide variety of roles ranging from backend to frontend development. During my first internship I was mentored closely by my senior developers and aided them in finding solutions for our clients. With them I have been able become familiar with modern design patterns, data managment, and algorithms.   
          </p>
          <br />
          
          
          {/* <div className={styles.cover}></div> */}
        </div>
      </div>

      <div className={styles.collage}>
        <div className={styles.imageHolder1}>
          {/* <img className={styles.building} src="./assets/images/pexels-camila-melo-3075974.jpg" alt="Colombian Building" loading='eager'/> */}
          {  !showPhoto  && <div className={styles.building}></div>}
          {  showPhoto  && <div className={styles["buildingOn"]}> <Photo width={526.66} height={320} style={"building"} smallUrl="./assets/images/pexels-camila-melo-small.jpg" url="./assets/images/pexels-camila-melo-3075974.jpg" delayImgVisibility={delayImgVisibility} visibility={imgVisibilty} lazy={true} ></Photo></div> }
          <div className={styles.caption} >Cartagena, Colombia</div>
        </div>
        <div className={styles.imageHolder2}>
          {/* <img className={styles.summerPhoto} src="./assets/images/SummerPhoto.jpg" alt="Summer photo" loading='eager'/> */}
          {  !showPhoto  && <div className={styles.summerPhoto}></div>}
          {  showPhoto  && <Photo width={795} height={320} style="summerPhoto" smallUrl="./assets/images/SummerPhoto-small.jpg" url="./assets/images/SummerPhoto.jpg" delayImgVisibility={delayImgVisibility} visibility={imgVisibilty} lazy={true} ></Photo>}
          <div className={styles.caption} >Niagra Falls, New York</div>
        </div>
        <div className={styles.imageHolder3}>
          {/* <img className={styles.winterPhoto} src="./assets/images/WinterPhoto.jpg" alt="Winter photo" loading='eager'/> */}
          {  !showPhoto  && <div className={styles.winterPhoto}></div>}
          {  showPhoto  && <Photo  width={258.34} height={320}  style={"winterPhoto"} smallUrl="./assets/images/WinterPhoto-small.jpg" url="./assets/images/WinterPhoto.jpg" delayImgVisibility={delayImgVisibility} visibility={imgVisibilty} lazy={true}></Photo>}
          <div className={styles.caption} >Yours truly in North Carolina</div>
        </div>
      </div>

      <div className={styles.aboutIntroContainer}>
        <div className={styles.introDescriptionContainer}>
          <p className={styles.introduction}>
            I hope you enjoy looking through my portofolio as everything you see was programmed by myself. 
          </p>
          
          {/* <div className={styles.cover}></div> */}
        </div>
      </div>

      <footer className={styles.footer}>
        <p>Produced by Nelson Herrera</p>
        <div className={styles.links}>
          <p><a target='_blank' href="https://github.com/NlsnBoa">Github</a></p>
          <p><a target='_blank' href="https://www.linkedin.com/in/nelson-herrera-swe/">Linkedin</a></p>
        </div>

      </footer>
    </div>
  )
}

export default About