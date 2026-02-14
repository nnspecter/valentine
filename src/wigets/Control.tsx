"use client"

import { useStore } from "@/entities/Store"
import FirstType from "./FirstType/FirstType"
import SecondType from "./SecondType/SecondType"
import HeartsBackground from "@/shared/ui/HeartsBackground"

import { motion, AnimatePresence } from "framer-motion"
import NoneType from "./NoneType/NoneType"
import { LastType } from "./LastType/LastType"
import ImagesBackground from "@/shared/ui/ImagesBackground"

const Control = () => {
  const { page } = useStore()

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      {page===3 &&<ImagesBackground />}

      <AnimatePresence mode="wait">
        {page === 1 && (
          <motion.div
            key="first"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <FirstType />
          </motion.div>
        )}

        {page === 2 && (
          <motion.div
            key="second"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <SecondType />
          </motion.div>
        )}

        {page === -1 && (
          <motion.div
            key="no"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <NoneType />
          </motion.div>
        )}

        {page === 3 && (
          <motion.div
            key="yes"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <LastType/>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}

export default Control
