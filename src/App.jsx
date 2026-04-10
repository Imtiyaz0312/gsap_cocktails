import React from 'react'
import gsap from 'gsap'
import {ScrollTrigger, SplitText} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
  return (
    <div>
        <div className='flex-center h-[100vh]'>
            <h1 className='text-8xl'>Mocktail</h1>
        </div>
        
    </div>
  )
}

export default App