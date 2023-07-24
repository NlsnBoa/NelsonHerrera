import styles from './Projects.module.css'

const Projects = () => {
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
              <div className={styles.train}>
                  <video className={styles.video}  src="PathfindingVisualizerVideo.mov" autoPlay loop></video>
                  <img className={styles.laptop}  src="Mockup.svg" alt="" />
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
              Pathfinding-Visualizer is a simple program that visualizes popular pathfinding algorithms. You can place the start and target nodes, draw barrier nodes, and then run one of the implemented pathfinding algorithms: breadth first search, depth first search, Dijkstra's, and A*, with more like Bellman Ford's to be implemented.
            </div>
          </div>
          <div className={styles.track}>
              <div className={styles.train}>
                  <video className={styles.video}  src="src/assets/imgs/PathfindingVisualizerVideo.mov" autoPlay loop></video>
                  <img className={styles.laptop}  src="src/assets/imgs/Mockup.svg" alt="" />
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
                  <video className={styles.video}  src="src/assets/imgs/PathfindingVisualizerVideo.mov" autoPlay loop></video>
                  <img className={styles.laptop}  src="src/assets/imgs/Mockup.svg" alt="" />
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