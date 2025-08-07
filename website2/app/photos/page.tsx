'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

// Actual photos from uploads folder
const photos = [
  { id: 1, src: '/uploads/IMG_1477.jpeg', alt: 'Nature Photography' },
  { id: 2, src: '/uploads/IMG_1676.jpeg', alt: 'Landscape Shot' },
  { id: 3, src: '/uploads/IMG_1474.jpeg', alt: 'Urban Photography' },
  { id: 4, src: '/uploads/IMG_1478.jpeg', alt: 'Street Photography' },
  { id: 5, src: '/uploads/IMG_1483.jpeg', alt: 'Architecture' },
  { id: 6, src: '/uploads/IMG_1534.jpeg', alt: 'Portrait Photography' },
  { id: 7, src: '/uploads/IMG_1535.jpeg', alt: 'Creative Shot' },
  { id: 8, src: '/uploads/IMG_1536.jpeg', alt: 'Abstract Photography' },
  { id: 9, src: '/uploads/IMG_1537.jpeg', alt: 'Street Art' },
  { id: 10, src: '/uploads/IMG_1538.jpeg', alt: 'City Life' },
  { id: 11, src: '/uploads/1754532726657-86q6nb18nw.JPG', alt: 'Travel Photography' },
  { id: 12, src: '/uploads/BB79BF92-3A5C-4C90-B55A-56DA290BB99B.JPG', alt: 'Adventure Shot' },
  { id: 13, src: '/uploads/IMG_0552.JPEG', alt: 'Nature Beauty' },
  { id: 14, src: '/uploads/BD888507-6680-42AE-9987-4553CE6C7150.JPG', alt: 'Urban Landscape' },
  { id: 15, src: '/uploads/IMG_0699.JPEG', alt: 'Creative Composition' },
  { id: 16, src: '/uploads/IMG_0149.JPG', alt: 'Photography Art' },
]

export default function PhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null)
  const router = useRouter()

  const handlePhotoClick = (photo: typeof photos[0]) => {
    setSelectedPhoto(photo)
  }

  const closeModal = () => {
    setSelectedPhoto(null)
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-lg font-medium">Back</span>
          </button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          🐼 Jay’s bamboo lens
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          snapping peaceful moments through the eyes of a curious Panda.
          </p>
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 auto-rows-auto"
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group cursor-pointer"
              onClick={() => handlePhotoClick(photo)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-800/20 backdrop-blur-sm border border-gray-600/30">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={400}
                  height={300}
                  className="w-full h-auto transition-all duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Photo info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{photo.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state for when no photos are uploaded */}
        {photos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-300 text-lg mb-4">
              📸 No photos uploaded yet
            </div>
            <p className="text-gray-400">
              Upload your photos to the <code className="bg-gray-800/50 px-2 py-1 rounded">/public/photos</code> folder
            </p>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute -top-4 -right-4 z-10 w-10 h-10 bg-gray-800 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
              >
                ✕
              </button>
              
              {/* Image container */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              
              {/* Photo title */}
              <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-semibold">
                  {selectedPhoto.alt}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 