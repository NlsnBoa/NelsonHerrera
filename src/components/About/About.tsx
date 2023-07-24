import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.contentContainer}>

      <div className={styles.aboutIntroContainer}>
        <div className={styles.title}>
          <h1>I want to make stuff, <span className={styles.specialTitle}>and love algorithms.</span></h1>
        </div>
        <div className={styles.introDescriptionContainer}>
          <p className={styles.introduction}>
            As a computer science undergraduate who's worked in a fast-paced startup, I have developed a very strong background in a wide variety of roles ranging from backend to frontend development. During my internship I was mentored closely by my senior developers and aided them in finding solutions for our clients. With them I have been able become familiar with modern design patterns, data managment, and algorithms.   <br />

          </p>
          
          {/* <div className={styles.cover}></div> */}
        </div>
      </div>

      <div className={styles.collage}>
        <div className={styles.imageHolder1}>
          <img className={styles.building} src="src/assets/imgs/pexels-camila-melo-3075974.jpg" alt="Colombian Building" />
          <div className={styles.caption} >Cartagena, Colombia</div>
        </div>
        <div className={styles.imageHolder2}>
          <img className={styles.summerPhoto} src="src/assets/imgs/SummerPhoto.jpg" alt="Summer photo" />
          <div className={styles.caption} >Niagra Falls, New York</div>
        </div>
        <div className={styles.imageHolder3}>
          <img className={styles.winterPhoto} src="src/assets/imgs/WinterPhoto.jpg" alt="Winter photo" />
          <div className={styles.caption} >Yours truly in North Carolina</div>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>Produced by Nelson Herrera</p>
        <div className={styles.links}>
          <p><a target='_blank' href="https://github.com/NlsnBoa">Github</a></p>
          <p><a target='_blank' href="https://www.linkedin.com/in/nelson-herrera-swe/">Linkedin</a></p>
        </div>

      </footer>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default About