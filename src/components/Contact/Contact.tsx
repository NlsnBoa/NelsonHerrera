import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.link}>
        <a target='_blank' href="https://github.com/NlsnBoa"><img className={styles.linkImg} src="src/assets/SocialMedia/github_line.svg" alt="" /></a>
      </div>
      <div className={styles.link}>
        <a target='_blank' href="https://www.linkedin.com/in/nelson-herrera-swe/"><img className={styles.linkImg} src="src/assets/SocialMedia/linkedin_fill.svg" alt="" /></a>
      </div>
      <div className={styles.link}>
        <a target='_blank' href="ndanielherrera@icloud.com"><img className={styles.linkImg} src="src/assets/SocialMedia/mail_fill.svg" alt="" /></a>
      </div>

      <div className={styles.link}>

      </div>
    </div>
  )
}

export default Contact