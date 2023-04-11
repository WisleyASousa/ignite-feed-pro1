import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src='https://github.com/wisleyasousa.png' />
          <div className={styles.authorInfo}>
            <strong>Wisley A. Sousa</strong>
            <span>Dev Front-End</span>
          </div>
        </div>

        <time 
          title='10 de abril as 10:50'
          dateTime='2023-04-10'>
            Publicado há 1h
        </time>
      </header>

      <div  className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href='#'>jane.design/doctorcare</a></p>
        <p className={styles.tags}>
          <a href='#'>#novoprojeto</a> 
          <a href='#'>#nlw</a> 
          <a href='#'>#rocketseat</a>
        </p>
      </div>
    </article>
  )
}