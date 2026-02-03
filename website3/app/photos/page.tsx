'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowLeft } from 'lucide-react'

// Photos from /public/uploads – copy the uploads folder from website2 to website3/public to use these
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
  { id: 17, src: '/uploads/IMG_1388.jpeg', alt: 'Urban Exploration' },
  { id: 18, src: '/uploads/IMG_2005.jpeg', alt: 'City Streets' },
  { id: 19, src: '/uploads/IMG_2012.jpeg', alt: 'Architectural Detail' },
  { id: 20, src: '/uploads/IMG_2029.jpeg', alt: 'Street Scene' },
  { id: 21, src: '/uploads/IMG_5260.jpeg', alt: 'Urban Landscape' },
  { id: 22, src: '/uploads/IMG_6430.jpeg', alt: 'City Photography' },
  { id: 23, src: '/uploads/IMG_0187.jpeg', alt: 'Street Photography' },
  { id: 24, src: '/uploads/IMG_0189.jpeg', alt: 'Urban Art' },
  { id: 25, src: '/uploads/IMG_7244.jpeg', alt: 'City Life' },
  { id: 26, src: '/uploads/IMG_7245.jpeg', alt: 'Street View' },
  { id: 27, src: '/uploads/IMG_7568.jpeg', alt: 'Urban Architecture' },
  { id: 28, src: '/uploads/IMG_3672.jpeg', alt: 'City Streets' },
  { id: 29, src: '/uploads/IMG_7774.jpeg', alt: 'Street Photography' },
  { id: 30, src: '/uploads/IMG_8251.jpeg', alt: 'Urban Scene' },
  { id: 31, src: '/uploads/IMG_8578.jpeg', alt: 'City Architecture' },
  { id: 32, src: '/uploads/IMG_8657.jpeg', alt: 'Street Life' },
  { id: 33, src: '/uploads/IMG_8666.jpeg', alt: 'Urban Photography' },
  { id: 34, src: '/uploads/IMG_8836.jpeg', alt: 'City View' },
  { id: 35, src: '/uploads/IMG_0400.jpeg', alt: 'Street Art' },
  { id: 36, src: '/uploads/IMG_0404.jpeg', alt: 'Urban Landscape' },
  { id: 37, src: '/uploads/IMG_0500.jpeg', alt: 'City Photography' },
  { id: 38, src: '/uploads/IMG_0916.jpeg', alt: 'Street Scene' },
  { id: 39, src: '/uploads/IMG_0931.jpeg', alt: 'Urban Architecture' },
  { id: 40, src: '/uploads/IMG_0947.jpeg', alt: 'City Streets' },
  { id: 41, src: '/uploads/IMG_0987.jpeg', alt: 'Street Photography' },
  { id: 42, src: '/uploads/IMG_1689.jpeg', alt: 'Urban View' },
  { id: 43, src: '/uploads/IMG_7561.jpeg', alt: 'City Life' },
  { id: 44, src: '/uploads/IMG_7544.jpeg', alt: 'Street Art' },
  { id: 45, src: '/uploads/IMG_1691.jpeg', alt: 'Urban Photography' },
  { id: 46, src: '/uploads/IMG_9509.JPEG', alt: 'City Architecture' },
  { id: 47, src: '/uploads/IMG_0939.jpg', alt: 'Street Scene' },
  { id: 48, src: '/uploads/6F7B96E6-4888-48C5-933F-EDDD5E843BD5.JPG', alt: 'Urban Landscape' },
  { id: 49, src: '/uploads/BCCF24BD-DC7D-4C14-94E9-14190E4D88B3.JPG', alt: 'City Photography' },
  { id: 50, src: '/uploads/IMG_9913.jpeg', alt: 'Urban Photography' },
  { id: 51, src: '/uploads/IMG_1412.jpeg', alt: 'Street Photography' },
  { id: 52, src: '/uploads/IMG_9934.jpeg', alt: 'City Life' },
  { id: 53, src: '/uploads/IMG_9936.jpeg', alt: 'Urban Architecture' },
  { id: 54, src: '/uploads/IMG_9951.jpeg', alt: 'Street Scene' },
  { id: 55, src: '/uploads/IMG_9988.jpeg', alt: 'City Photography' },
  { id: 56, src: '/uploads/IMG_6643.jpeg', alt: 'Urban Landscape' },
  { id: 57, src: '/uploads/IMG_6634.jpeg', alt: 'Street Art' },
  { id: 58, src: '/uploads/IMG_4631.jpeg', alt: 'City Streets' },
  { id: 59, src: '/uploads/IMG_1327.jpeg', alt: 'City Streets' },
  { id: 60, src: '/uploads/IMG_2941.jpeg', alt: 'City Streets' },
  { id: 61, src: '/uploads/IMG_2949.jpeg', alt: 'City Streets' },
  { id: 62, src: '/uploads/IMG_3150.jpeg', alt: 'City Streets' },
]

export default function PhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null)

  const handlePhotoClick = (photo: typeof photos[0]) => {
    setSelectedPhoto(photo)
  }

  const closeModal = () => {
    setSelectedPhoto(null)
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
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200 group w-fit"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-lg font-medium">Back</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🐼 Jay&apos;s bamboo lens
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              Upload your photos to the <code className="bg-gray-800/50 px-2 py-1 rounded">/public/uploads</code> folder
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
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-pointer"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] w-full cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-4 -right-4 z-10 w-10 h-10 bg-gray-800 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg cursor-pointer"
              >
                ✕
              </button>

              <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl cursor-default">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
