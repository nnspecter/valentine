import React from 'react'
import styles from "./AutoSlider.module.scss"
const AutoSlider = () => {
  return (
    <div className={styles.card}>
      <div className={styles.loader}>
        Ты 
        <div className={styles.words}>
          <span className={styles.word}>милая</span>
          <span className={styles.word}>няшка</span>
          <span className={styles.word}>поняшка</span>
          <span className={styles.word}>стесняшка</span>
          <span className={styles.word}>космос</span>
        </div>
      </div>
    </div>
  )
}

export default AutoSlider