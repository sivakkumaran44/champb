'use client'

import Lottie from 'lottie-react'
import loadingAnimation from '@/components/data/Loading Animation bChamp.json'

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-200 h-200">
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          autoplay={true}
        />
      </div>
    </div>
  )
}