'use client';
import Link from 'next/link'
import { ArrowLeft, Camera } from 'lucide-react'
import { motion } from '@/lib/motion'
import { useState, useEffect } from 'react'

function PhotoGallery() {
  const [photos, setPhotos] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // For now, we'll use a simple approach to get uploaded photos
    // In a real app, you'd fetch from a database or API
    const fetchPhotos = async () => {
      try {
        // This is a placeholder - in production you'd fetch from your backend
        // For now, we'll show a message that photos will appear here
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }

    fetchPhotos()
  }, [])

  if (loading) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-gray-300">Loading photos...</p>
        </div>
      </div>
    )
  }

  if (photos.length === 0) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
        <div className="text-center">
          <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No Photos Yet</h3>
          <p className="text-gray-300 mb-4">
            Upload your first photo through the admin panel to see it here!
          </p>
          <Link 
            href="/admin/upload" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Upload Photos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
      <h3 className="text-xl font-semibold text-white mb-6">Gallery</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function PhotosPage() {
  return (
    <main 
      className="relative min-h-screen bg-black overflow-hidden"
    >
      <div className="absolute inset-0 flex justify-around opacity-20 -z-10">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="w-1 bg-white rounded-lg h-full animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/about"
            className="inline-flex items-center px-4 py-2 rounded-full border border-white bg-black text-white hover:bg-white hover:text-black transition font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            back to about
          </Link>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-white mb-12 text-center">
            photography
          </h1>
          
          <div className="space-y-8 text-lg text-gray-300">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">My Photography</h2>
              <p className="leading-relaxed">
                From street photography to nature shots, I love capturing moments that tell stories. 
                Here are some of my favorite shots and the stories behind them.
              </p>
              <p className="leading-relaxed mt-4">
                Photography has taught me so much about composition, lighting, and the art of seeing the world differently. 
                It's amazing how a single frame can capture an entire moment in time.
              </p>
            </div>
            
            {/* Photo Gallery */}
            <PhotoGallery />
          </div>
        </div>
      </div>
    </main>
  )
} 