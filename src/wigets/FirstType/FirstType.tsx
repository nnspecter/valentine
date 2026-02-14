"use client"
import style from "./FirstType.module.scss"
import ClosedMail from "@shared/icons/heartMail2.png"
import Image from 'next/image'
import { Button } from '@mui/material'
import { useStore } from '@/entities/Store'
import { useState } from "react"


const FirstType = () => {
  const [clickCount, setClickCount] = useState(0);
  const {setPage} = useStore()

  const handleClick = () => {
    if (clickCount >= 999) {
      
      setPage(2);
    } else if (clickCount < 999) {
      setClickCount(prev => prev + 1);
    }
  }
  return (
    <div className={style.FirstType}>
        <Button variant='outlined' sx={{
            color: "#d173da",
            padding: "0px",
            borderRadius: "4%",
            border: "0px solid #d132a900",
            "&:hover": { boxShadow: "3px 2px 10px 2px #d132a954 inset, 0px 0px 10px 2px #d132a954"}}}
            onClick={handleClick}>
              <div className={style.card}>
              <Image src={ClosedMail} alt="Closed Mail Icon" width={300} height={220}/>
              <div className={style.overlay}>Открыть</div>
            </div>
        </Button>
        <div className={style.text}>
          У меня для тебя письмо...
        </div>
        {clickCount < 99 && <div className={style.minitext}>ЕЩЕ {99 - clickCount} кликов, чтобы открыть его (´｡• ω •｡`)</div>}
        {clickCount >= 99 && clickCount < 999 && <div className={style.minitext}>Письмо почти открыто! Осталось {979 - clickCount} кликов (´｡• ω •｡`)</div>}
        {clickCount >= 999 && <div className={style.minitext}>Письмо открыто! (´｡• ω •｡`)</div>}
    </div>
  )
}

export default FirstType