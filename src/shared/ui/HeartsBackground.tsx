"use client"
import { useEffect } from "react"
import styles from "./HeartsBackground.module.scss"

const hearts = ["💖", "💗", "💓", "❤️"]

const HeartsBackground = () => {
  useEffect(() => {
    const container = document.querySelector(`.${styles.hearts}`)
    if (!container) return

    const interval = setInterval(() => {
      const heart = document.createElement("div")
      heart.className = styles.heart
      heart.innerText = hearts[Math.floor(Math.random() * hearts.length)]

      heart.style.left = Math.random() * 100 + "vw"
      heart.style.fontSize = Math.random() * 30 + 20 + "px"
      heart.style.animationDuration = Math.random() * 7 + 8 + "s"

      container.appendChild(heart)

      setTimeout(() => {
        heart.remove()
      }, 7000)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return <div className={styles.hearts}></div>
}

export default HeartsBackground
