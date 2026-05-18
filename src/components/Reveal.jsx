import React, { useRef, useEffect } from 'react'

function Reveal({ children, className = '', direction = 'up', rootMargin = '0px 0px -10% 0px', delay = 0 }) {
  const ref = useRef()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  const baseClass = `reveal slide-from-${direction} ${className}`.trim()

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined

  return (
    <div ref={ref} className={baseClass} style={style}>
      {children}
    </div>
  )
}

export default Reveal
