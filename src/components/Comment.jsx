import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({ content, onDeleteComment }) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
  });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/wisleyasousa.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Wisley A. Sousa</strong>
              <time
                title='10 de abril as 10:50'
                dateTime='2023-04-10'>
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>
            {content}
          </p>
        </div>

        <footer>
          <button onClick={handleLikeComment} >
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}