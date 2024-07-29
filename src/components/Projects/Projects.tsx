import { useState } from 'react'
import styles from './Projects.module.css'
import Photo from '../Photo'
// import { LazyLoadImage } from 'react-lazy-load-image-component';

const Projects = () => {
  // allows the photo to enter the component without causing lag
  const [showPhoto, setPhoto] = useState(false)

  const [imgVisibilty, setImgVisibility] = useState('Off')

  async function delayImgVisibility() {
    setTimeout(() => {
      setImgVisibility("On")
    }, 500)
  }

  // 1250
  setTimeout(() => {
    setPhoto(true)
  }, 1250)
  
  return (
    <div className={styles.contentContainer}>
      <div className={styles.timeline}>
        <div className={styles.timelineProject} >
          <div  className={styles.projectCount} >
            01
          </div>
          <div className={styles.projectContent}>
            <div>
              <div>
                <div className={styles.projectTitle}>
                  PATHFINDING VISUALIZER  
                </div>
              </div>
              <div className={styles.projectRole}>
                React • HTML • CSS • Typescript
              </div>
            </div>
            <div className={styles.projectDescription}>
              Pathfinding-Visualizer is a simple program that visualizes popular pathfinding algorithms. You can place the start and target nodes, draw barrier nodes, and then run one of the implemented pathfinding algorithms: breadth first search, depth first search, Dijkstra's, and A*, with more like Bellman Ford's to be implemented.
            </div>
          </div>
          <div className={styles.track}>
              <div className={styles.train} id="train">
                  <video className={styles["video" + imgVisibilty]}   autoPlay loop>
                    <source src="./assets/compressed2PV1730.mp4" type="video/mp4" />
                  </video>
                  {/* {imgVisibilty && <img className={styles[laptopStyling]}  src="./assets/images/Mockup.svg" alt="" loading='eager'/>} */}
                  {  showPhoto  && <Photo style={"laptop"} url={"./assets/images/Mockup.svg"} delayImgVisibility={delayImgVisibility} visibility={imgVisibilty} ></Photo>}

                  {/* <LazyLoadImage className={styles.laptop}  src="./assets/images/Mockup.svg" effect='opacity'  placeholder={<div className={styles.placeholder}></div>} width="1,120px" alt="Laptop" ></LazyLoadImage> */}
              </div>
          </div>
        </div>

        <div className={styles.timelineProject} >
          <div  className={styles.projectCount} >
            02
          </div>
          <div className={styles.projectContent}>
            <div>
              <div>
                <div className={styles.projectTitle}>
                  FLAPPYBIRD AI
                </div>
              </div>
              <div className={styles.projectRole}>
                Python • Pygame • NEAT 
              </div>
            </div>
            <div className={styles.projectDescription}>
              Flappybird AI was trained to get as far as possible in the Flappybird Game. I used NEAT {"(NeuroEvolution of Augmenting Topologies)"} to train a neural network until a bird can make it to level 100. The game was made from scratch in python using Pygame.
            </div>
          </div>
          <div className={styles.track}>
              <div className={styles.train}>
                  <video className={styles["video" + imgVisibilty]}  src="./assets/FlappyVideo1730.mp4" autoPlay loop>
                    <source src="./assets/videos/FlappyVideo.mp4"  type="video/mp4"/>
                  </video>
                  {/* <img className={styles.laptop} id="laptop"  src="" alt="Laptop" loading='lazy' /> */}
                  {  showPhoto  && <Photo style={"laptop"} url={"./assets/images/Mockup.svg"} delayImgVisibility={delayImgVisibility} visibility={imgVisibilty} ></Photo>}
                  {/* <LazyLoadImage className={styles.laptop}  src="./assets/images/Mockup.svg" effect='opacity'  placeholder={<div className={styles.placeholder}></div>} height={1120} width={1120}alt="Laptop" ></LazyLoadImage> */}
              </div>
          </div>
        </div>

        <div className={styles.timelineProject} >
          <div  className={styles.projectCount} >
            03
          </div>
          <div className={styles.projectContent}>
            <div>
              <div>
                <div className={styles.projectTitle}>
                  STUDY BUDDY
                </div>
              </div>
              <div className={styles.projectRole}>
                Flask • HTML • CSS • Typescript 
              </div>
            </div>
            <div className={styles.projectDescription}>
              Study Buddy is a project developed for a Hackathon with a team of three. This application provides an automated study group matching service for UCF students, created using CSS, JavaScript, and Python. It features an intuitive user-interface for data input, an intelligent matching algorithm for group formation, and a Python-based Discord bot for real-time alerts and user interactions. All components were developed within the Flask Framework, showcasing efficient teamwork and effective use of technology made all in under thirty-six hours.
            </div>
          </div>
          <div className={styles.track}>
              <div className={styles.train}>
                  {/* <video className={styles.video}  src="./assets/videos/PathfindingVisualizerMov.mp4" autoPlay loop></video> */}
                  {/* <img className={styles.laptop}  src="./assets/images/Mockup.svg" alt="Laptop" loading='eager'/> */}
                  {/* {  showPhoto  && <Photo style={"laptop"} url={"./assets/images/Mockup.svg"} delayImgVisibility={delayImgVisibility} visibility={imgVisibilty} ></Photo>} */}
                  {/* <LazyLoadImage className={styles.laptop}  src="./assets/images/Mockup.svg" effect='opacity'  placeholder={<div className={styles.placeholder}></div>} width="1,120px" alt="Laptop" ></LazyLoadImage> */}
              </div>
          </div>
        </div>      
      </div>
      {/* footer */}
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

export default Projects