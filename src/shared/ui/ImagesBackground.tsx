"use client"

import { useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"
import styles from "./ImagesBackground.module.scss"
import Pony from "@shared/lastImg/pony.png"
import Pony2 from "@shared/lastImg/pony2.png"
import Pony3 from "@shared/lastImg/pony3.png"
import Pony4 from "@shared/lastImg/pony4.png"
import Pony5 from "@shared/lastImg/pony5.png"
import Pony6 from "@shared/lastImg/pony6.png"

interface Item {
  id: number
  left: number
  size: number
  duration: number
  image: StaticImageData
}

const images = [Pony, Pony2, Pony3, Pony4, Pony5, Pony6]

const ImagesBackground = () => {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newItem: Item = {
        id: Date.now(),
        left: Math.random() * 100,
        size: Math.random() * 40 + 40,
        duration: Math.random() * 7 + 8,
        image: images[Math.floor(Math.random() * images.length)], // ✅ сохраняем картинку
      }

      setItems((prev) => [...prev, newItem])

      setTimeout(() => {
        setItems((prev) => prev.filter((item) => item.id !== newItem.id))
      }, newItem.duration * 1000)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <div
          key={item.id}
          className={styles.item}
          style={{
            left: `${item.left}vw`,
            animationDuration: `${item.duration}s`,
            width: item.size,
            height: item.size,
          }}
        >
          <Image
            src={item.image} // ✅ теперь берём из state
            alt="floating image"
            fill
            sizes="100px"
            style={{ objectFit: "contain" }}
          />
        </div>
      ))}
    </div>
  )
}

export default ImagesBackground
