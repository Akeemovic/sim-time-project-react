import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const App : React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12 sm:col-span-6 md:col-span-3">
            <div class="rounded-lg bg-white p-4 shadow-md">
              Content here
            </div>
          </div>
          <div class="col-span-12 sm:col-span-6 md:col-span-3">
            <div class="rounded-lg bg-white p-4 shadow-md">
              Content here
            </div>
          </div>
          <div class="col-span-12 sm:col-span-6 md:col-span-3">
            <div class="rounded-lg bg-white p-4 shadow-md">
              Content here
            </div>
          </div>
          <div class="col-span-12 sm:col-span-6 md:col-span-3">
            <div class="rounded-lg bg-white p-4 shadow-md">
              Content here
            </div>
          </div>
        </div>
      </div>

      <div className="mb-2"/>

      <div class="container mx-auto">
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-3 sm:col-span-2 md:col-span-1">
            <div class="rounded-lg bg-white p-4 shadow-md">
              Content here
            </div>
          </div>
          <div class="col-span-3 sm:col-span-2 md:col-span-1">
            <div class="rounded-lg bg-white p-4 shadow-md">
              Content here
            </div>
          </div>
          <div class="col-span-3 sm:col-span-2 md:col-span-1">
            <div class="rounded-lg bg-white p-4 shadow-md">
              Content here
            </div>
          </div>
          <div class="col-span-3 sm:col-span-2 md:col-span-1">
            <div class="rounded-lg bg-white p-4 shadow-md">
              Content here
            </div>
          </div>
          <div class="col-span-3 sm:col-span-2 md:col-span-1">
            <div class="rounded-lg bg-white p-4 shadow-md">
              Content here
            </div>
          </div>    
        </div>
      </div>
    </>
  )
}

export default App
