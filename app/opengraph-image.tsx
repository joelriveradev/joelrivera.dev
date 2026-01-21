import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Joel Rivera - AI Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: '#171717',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 50
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <span style={{ color: '#d4d4d4', fontSize: 32 }}>Joel Rivera</span>
        <span style={{ color: '#a3a3a3', fontSize: 32 }}>
          AI Software Engineer
        </span>
      </div>
    </div>,
    { ...size }
  )
}
