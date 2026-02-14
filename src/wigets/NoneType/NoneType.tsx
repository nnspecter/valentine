import React from 'react'
import styles from "./NoneType.module.scss"
import Image from 'next/image'
import GifImage from "@shared/gif/sad.gif"
import { Button } from '@mui/material'
import { useStore } from '@/entities/Store'
const NoneType = () => {
  const {setPage} = useStore()
  return (
    <div className={styles.NoneType}>
        <div className={styles.card}>
            <div className={styles.bg}>
              <Image src={GifImage} alt="Heart Icon" fill style={{ zIndex: 99, objectFit: "cover" }}/>
            </div>
            <div className={styles.blob}></div>
        </div>
        <div></div>
        <div className={styles.text}>
            Ну и ладно (´｡• ω •｡`) 
        </div>
        <div className={styles.text}>
            Подумаешь письмо не открыто, зато ты в безопасности от его содержимого!
        </div>
        
        <Button 
            variant="contained"
            sx={{
                width: "100px",
                textAlign: "center",
                height: "50px",
                borderRadius: "10px",
                backgroundColor: "#fa3adad7",
                color: "white",
                "&:hover": {backgroundColor: "#b90279"}}}
                onClick={() => setPage(1)}>
                Вернуться</Button>
    </div>
  )
}

export default NoneType