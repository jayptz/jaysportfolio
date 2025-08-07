import { NextResponse } from 'next/server'
import { readdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export async function GET() {
  try {
    const uploadsDir = join(process.cwd(), 'public', 'uploads')
    
    // Check if uploads directory exists
    if (!existsSync(uploadsDir)) {
      return NextResponse.json({ photos: [] })
    }

    // Read all files in the uploads directory
    const files = await readdir(uploadsDir)
    
    // Filter for image files and create URLs
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp']
    const photos = files
      .filter(file => {
        const ext = file.toLowerCase().split('.').pop()
        return ext && imageExtensions.includes(`.${ext}`)
      })
      .map(file => `/uploads/${file}`)
      .sort((a, b) => {
        // Sort by filename (newest first based on timestamp)
        const aTime = parseInt(a.split('/').pop()?.split('-')[0] || '0')
        const bTime = parseInt(b.split('/').pop()?.split('-')[0] || '0')
        return bTime - aTime
      })

    return NextResponse.json({ photos })
  } catch (error) {
    console.error('Error reading photos:', error)
    return NextResponse.json(
      { error: 'Failed to fetch photos' },
      { status: 500 }
    )
  }
} 