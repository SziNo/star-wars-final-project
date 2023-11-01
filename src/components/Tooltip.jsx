import { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'

export const Tooltip = ({ children, label }) => {
  const [tooltipElement, setTooltipElement] = useState(null)
  const [isHovered, setIsHovered] = useState(false)
  const parentRef = useRef(null)

  useEffect(() => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    setTooltipElement(div)

    return () => {
      document.body.removeChild(div)
    }
  }, [])

  if (!tooltipElement) {
    return null
  }

  let style = {}
  if (parentRef.current) {
    const rect = parentRef.current.getBoundingClientRect()
    style = { top: rect.top - 22, left: rect.left }
  }

  return (
    <div
      ref={parentRef}
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered &&
        createPortal(
          <div style={style} className="absolute bg-gray-700 text-white rounded px-2 py-1 text-xs">
            {label}
          </div>,
          tooltipElement
        )}
    </div>
  )
}
