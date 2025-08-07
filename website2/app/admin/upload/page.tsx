'use client'

import { useState, useRef } from 'react'
import { motion } from '@/lib/motion'
import { Upload, Eye, EyeOff, CheckCircle, XCircle } from 'lucide-react'

export default function AdminUploadPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const ADMIN_PASSWORD = 'admin123'

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setMessage({ type: 'success', text: 'Access granted!' })
      setTimeout(() => setMessage(null), 2000)
    } else {
      setMessage({ type: 'error', text: 'Incorrect password' })
      setTimeout(() => setMessage(null), 2000)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setSelectedFiles(files)
    
    // Create previews
    const newPreviews = files.map(file => URL.createObjectURL(file))
    setPreviews(newPreviews)
  }

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setMessage({ type: 'error', text: 'Please select files to upload' })
      return
    }

    setIsUploading(true)
    setMessage(null)

    try {
      const formData = new FormData()
      selectedFiles.forEach(file => {
        formData.append('files', file)
      })

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        const result = await response.json()
        setMessage({ type: 'success', text: `${selectedFiles.length} photos uploaded successfully! Blob URLs saved.` })
        setSelectedFiles([])
        setPreviews([])
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
      } else {
        setMessage({ type: 'error', text: 'Upload failed. Please try again.' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Upload failed. Please try again.' })
    } finally {
      setIsUploading(false)
    }
  }

  const removeFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index)
    const newPreviews = previews.filter((_, i) => i !== index)
    setSelectedFiles(newFiles)
    setPreviews(newPreviews)
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center p-4">
        <motion.div 
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h1 className="text-2xl font-bold text-white text-center mb-6">
              Admin Access
            </h1>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Login
              </button>
            </form>

            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-3 rounded-lg flex items-center gap-2 ${
                  message.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                }`}
              >
                {message.type === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
                {message.text}
              </motion.div>
            )}
          </div>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black p-4">
      <motion.div 
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <h1 className="text-2xl font-bold text-white text-center mb-2">
            Upload Photos
          </h1>
          <p className="text-gray-300 text-center mb-6">
            Upload photos to your gallery
          </p>

          {/* File Input */}
          <div className="mb-6">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="w-full bg-white/10 border-2 border-dashed border-white/30 rounded-lg p-6 text-center cursor-pointer hover:bg-white/20 transition-colors"
            >
              <Upload className="w-8 h-8 text-white mx-auto mb-2" />
              <p className="text-white font-medium">Select Photos</p>
              <p className="text-gray-400 text-sm mt-1">Tap to choose from your photo library</p>
            </label>
          </div>

          {/* Image Previews */}
          {previews.length > 0 && (
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-3">Selected Photos ({selectedFiles.length})</h3>
              <div className="grid grid-cols-2 gap-3">
                {previews.map((preview, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative group"
                  >
                    <img
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => removeFile(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <XCircle size={16} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Upload Button */}
          {selectedFiles.length > 0 && (
            <button
              onClick={handleUpload}
              disabled={isUploading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
            >
              {isUploading ? 'Uploading...' : `Upload ${selectedFiles.length} Photo${selectedFiles.length > 1 ? 's' : ''}`}
            </button>
          )}

          {/* Messages */}
          {message && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-3 rounded-lg flex items-center gap-2 ${
                message.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
              }`}
            >
              {message.type === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
              {message.text}
            </motion.div>
          )}
        </div>
      </motion.div>
    </main>
  )
} 