import React from 'react'
import styles from "./LastType.module.scss"
import AutoSlider from '@/features/AutoSlider/AutoSlider'
import Image from 'next/image'
import GifImage from "@shared/lastImg/pony.png"
export const LastType = () => {
  return (
    <div className={styles.LastType}>
        <div className={styles.card}>
            <div className={styles.bg}>
                <div className={styles.textInside}>
                    <div className={styles.text1}>
                        Письмо!
                    </div>
                    <div className={styles.text2}>
                        Ты мое маленькое солнышко, которое я так люблю!
                        Я надеюсь, что это письмо принесет тебе столько же радости, сколько ты приносишь мне каждый день.
                        Ты заслуживаешь всего самого лучшего в этом мире, и я хочу, чтобы ты всегда помнила,
                        что я рядом, чтобы поддержать тебя во всем.
                        Люблю тебя! {`<3`}
                    </div>
                </div>
            </div>
            <div className={styles.blob}></div>
        </div>
                    <div className={styles.divider}>
                        <AutoSlider/>
                        <div className={styles.text3}>
                            💖
                        </div>
                    </div>
        
    </div>
  )
}
