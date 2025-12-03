import { useEffect, useState } from 'react'

export function useScrollProgress(): number {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollPx = document.documentElement.scrollTop
            const winHeightPx =
                document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrolled = (scrollPx / winHeightPx) * 100

            setScrollProgress(scrolled)
        }

        // Update on mount
        updateScrollProgress()

        // Update on scroll with throttling
        let ticking = false
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateScrollProgress()
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return scrollProgress
}
