import React from 'react'
import "../App.css"

function Footer() {
  return (
    <footer className="bg-blue-300 text-black w-full mt-12 p-4 flex flex-col items-center">
    <div className="flex items-center space-x-4 mb-2">
      <span className="text-2xl font-bold">Word Counter</span>
    </div>
    <div className="flex space-x-4 mb-2">
      <a href="https://wa.me/+923468494751" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-[1.4vw]">
      <i class="ri-whatsapp-line"></i>
      </a>
    </div>
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Developer Adnan. All rights reserved.
    </p>
  </footer>
  )
}

export default Footer