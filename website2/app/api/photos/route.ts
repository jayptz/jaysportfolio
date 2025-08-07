import { NextRequest, NextResponse } from 'next/server'
import { readFile, writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

const PHOTOS_FILE = join(process.cwd(), 'data', 'photos.json')

export async function GET() {
  try {
    // Check if photos data file exists
    if (!existsSync(PHOTOS_FILE)) {
      return NextResponse.json({ photos: [] })
    }

    // Read the photos data file
    const data = await readFile(PHOTOS_FILE, 'utf-8')
    const { photos = [] } = JSON.parse(data)

    // Sort by upload time (newest first)
    const sortedPhotos = photos.sort((a: string, b: string) => {
      const aTime = parseInt(a.split('/').pop()?.split('-')[0] || '0')
      const bTime = parseInt(b.split('/').pop()?.split('-')[0] || '0')
      return bTime - aTime
    })

    return NextResponse.json({ photos: sortedPhotos })
  } catch (error) {
    console.error('Error reading photos:', error)
    return NextResponse.json(
      { error: 'Failed to fetch photos' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { photos } = await request.json()
    
    // Ensure data directory exists
    const dataDir = join(process.cwd(), 'data')
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true })
    }

    // Save photos to JSON file
    await writeFile(PHOTOS_FILE, JSON.stringify({ photos }, null, 2))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving photos:', error)
    return NextResponse.json(
      { error: 'Failed to save photos' },
      { status: 500 }
    )
  }
} 