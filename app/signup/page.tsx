import React from 'react'
import Signup from '../components/Signup'

export default function Page() {
  return (
    <div className='absolute h-full w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-drip-expand'>
      <Signup />
    </div>
  )
}
