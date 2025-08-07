import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { readFile, writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

const PHOTOS_FILE = join(process.cwd(), 'data', 'photos.json')

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const files = formData.getAll('files') as File[]
    
    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: 'No files provided' },
        { status: 400 }
      )
    }

    const uploadedFiles: string[] = []

    for (const file of files) {
      if (!file.type.startsWith('image/')) {
        continue // Skip non-image files
      }

      // Generate unique filename
      const timestamp = Date.now()
      const randomString = Math.random().toString(36).substring(2, 15)
      const extension = file.name.split('.').pop() || 'jpg'
      const filename = `${timestamp}-${randomString}.${extension}`

      // Upload to Vercel Blob
      const blob = await put(filename, file, {
        access: 'public',
        addRandomSuffix: false,
      })
      
      uploadedFiles.push(blob.url)
    }

    // Save the new blob URLs to our photos data file
    try {
      let existingPhotos: string[] = []
      
      if (existsSync(PHOTOS_FILE)) {
        const data = await readFile(PHOTOS_FILE, 'utf-8')
        const parsed = JSON.parse(data)
        existingPhotos = parsed.photos || []
      }

      // Ensure data directory exists
      const dataDir = join(process.cwd(), 'data')
      if (!existsSync(dataDir)) {
        await mkdir(dataDir, { recursive: true })
      }

      // Add new photos to existing ones
      const updatedPhotos = [...existingPhotos, ...uploadedFiles]
      
      // Save updated photos list
      await writeFile(PHOTOS_FILE, JSON.stringify({ photos: updatedPhotos }, null, 2))
    } catch (error) {
      console.error('Error saving photos data:', error)
      // Continue even if saving fails - the uploads are still successful
    }

    return NextResponse.json({
      success: true,
      files: uploadedFiles,
      message: `${uploadedFiles.length} files uploaded successfully`
    })

  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Failed to upload files' },
      { status: 500 }
    )
  }
} 