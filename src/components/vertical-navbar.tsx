"use client"

import { useState, useEffect } from "react"

interface NavItem {
  id: string
  label: string
}

const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Edu & Exp" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact Me" },
]

export default function VerticalNavbar() {
  const [activeItem, setActiveItem] = useState("about")
  const [ballPosition, setBallPosition] = useState(0)
  const [lineHeight, setLineHeight] = useState(0)

  // Calculate dimensions based on number of items
  useEffect(() => {
    const itemCount = navItems.length
    const activeIndex = navItems.findIndex((item) => item.id === activeItem)
    const percentage = activeIndex >= 0 ? (activeIndex / (itemCount - 1)) * 100 : 0
    setBallPosition(percentage)
    
    // Calculate line height based on number of sections
    const calculatedHeight = (itemCount - 1) * 60
    setLineHeight(calculatedHeight)
  }, [activeItem])

  // Handle scroll to section
  const handleNavClick = (id: string) => {
    setActiveItem(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveItem(navItems[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-8 right-8 z-50">
      <div className="flex gap-6 items-start">
        {/* Timeline Line Container */}
        <div className="relative top-6 flex flex-col items-center">
          {/* Glassy Background for Active Section */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl transition-all duration-500 ease-out backdrop-blur-md bg-white/10 border border-white/20 shadow-lg"
            style={{
              top: `calc(${ballPosition}% - 20px)`,
            }}
          />
          
          {/* Animated Ball */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full transition-all duration-500 ease-out z-10 bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg"
            style={{
              top: `calc(${ballPosition}% - 10px)`,
            }}
          >
            {/* Inner highlight for ball */}
            <div className="absolute inset-0.5 bg-white/30 rounded-full" />
          </div>

          {/* Dynamic Timeline Line */}
          <div 
            className="w-0.5 bg-gradient-to-b from-blue-400/60 to-purple-500/60 rounded-full transition-all duration-300"
            style={{ 
              height: `${lineHeight}px`,
            }} 
          />
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-1 pt-2">
          {navItems.map((item) => (
            <div key={item.id} className="font-audiowide flex items-center h-12 relative">
              <button
                onClick={() => handleNavClick(item.id)}
                className={`text-left transition-all duration-300 whitespace-nowrap px-3 py-2 rounded-lg ${
                  activeItem === item.id
                    ? "font-audiowide text-white font-semibold text-sm transform translate-x-1 bg-black/10 backdrop-blur-sm"
                    : "text-white/60 hover:text-white/80 font-regular text-xs hover:translate-x-1"
                }`}
              >
                {item.label}
              </button>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}