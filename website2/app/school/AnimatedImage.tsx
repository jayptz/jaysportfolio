'use client'

import { motion } from 'framer-motion'

interface AnimatedImageProps {
  src: string
  alt: string
}

export default function AnimatedImage({ src, alt }: AnimatedImageProps) {
  return (
    <motion.div 
      className="w-full max-w-4xl h-64 md:h-80 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover object-center rounded-xl"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
      />
    </motion.div>
  )
} 