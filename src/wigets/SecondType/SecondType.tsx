import { Button } from "@mui/material"
import styles from "./SecondType.module.scss"
import Image from "next/image"
import GifImage from "@shared/gif/giphy.gif"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ClosedMail from "@shared/icons/mail.png"
import { useStore } from "@/entities/Store"
import AutoSlider from "@/features/AutoSlider/AutoSlider";

const SecondType = () => {
  const {setPage} = useStore()
  const handleYesClick = () => {
    setPage(3);
  }
  const handleNoneClick = () => {
    setPage(-1);
  }

  return (
    <div className={styles.SecondType}>
        <div>
          Точно хочешь открыть? (´｡• ω •｡`)
        </div>
        
        <div className={styles.card}>
            <div className={styles.bg}>
              <Image src={GifImage} alt="Heart Icon" fill style={{ zIndex: 99, objectFit: "cover" }}/>
            </div>
            <div className={styles.blob}></div>
        </div>
        <div className={styles.buttonGroup}>
          <Button 
            variant="contained"
            sx={{
              width: "100px",
              textAlign: "center",
              height: "50px",
              borderRadius: "10px",
              backgroundColor: "#fa3adad7",
              color: "white",
              "&:hover": {backgroundColor: "#ff00a5"}}}
              onClick={handleYesClick}>
                Да </Button>
          
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
              onClick={handleNoneClick}>
                Нет </Button>
        </div>
    </div>
  )
}

export default SecondType