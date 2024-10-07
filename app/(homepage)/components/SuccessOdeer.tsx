import React from 'react'
import { Frame } from 'lucide-react'
interface MobilePreviewProps {
  url: string
}
export default function Component({ url }: MobilePreviewProps = { url: 'https://champb.vercel.app/iframe' }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative w-[320px] h-[640px] bg-white rounded-[40px] shadow-xl overflow-hidden border-8 border-gray-800">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-2xl"></div>
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-600 rounded-full"></div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-600 rounded-full"></div>
        <iframe
          src={url}
          className="w-full h-full"
          style={{ border: 'none' }}
          title="Mobile Preview"
        />
        {!url && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <Frame className="w-16 h-16 text-gray-400" />
          </div>
        )}
      </div>
    </div>
  )
}