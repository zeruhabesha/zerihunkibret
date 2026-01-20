"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { theme } = useTheme()
    const mousePos = useRef({ x: 0, y: 0 })
    const particles = useRef<Particle[]>([])

    class Particle {
        x: number
        y: number
        size: number
        speedX: number
        speedY: number
        opacity: number

        constructor(canvas: HTMLCanvasElement) {
            this.x = Math.random() * canvas.width
            this.y = Math.random() * canvas.height
            this.size = Math.random() * 3 + 1
            this.speedX = Math.random() * 0.5 - 0.25
            this.speedY = Math.random() * 0.5 - 0.25
            this.opacity = Math.random() * 0.5 + 0.1
        }

        update(canvas: HTMLCanvasElement, mouse: { x: number; y: number }) {
            this.x += this.speedX
            this.y += this.speedY

            // Mouse repulsion
            const dx = mouse.x - this.x
            const dy = mouse.y - this.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            if (distance < 100) {
                this.x -= dx * 0.02
                this.y -= dy * 0.02
            }

            // Wrap around edges
            if (this.x > canvas.width) this.x = 0
            if (this.x < 0) this.x = canvas.width
            if (this.y > canvas.height) this.y = 0
            if (this.y < 0) this.y = canvas.height
        }

        draw(ctx: CanvasRenderingContext2D, isDark: boolean) {
            ctx.fillStyle = isDark
                ? `rgba(59, 130, 246, ${this.opacity})`
                : `rgba(59, 130, 246, ${this.opacity * 0.4})`
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
            ctx.fill()
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        // Initialize particles
        // Initialize particles with reduced density for performance
        const width = canvas.width
        const height = canvas.height
        const density = width < 768 ? 25000 : 20000
        const particleCount = Math.min(Math.floor((width * height) / density), 50)
        particles.current = Array.from({ length: particleCount }, () => new Particle(canvas))

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY }
        }
        window.addEventListener("mousemove", handleMouseMove)

        // Animation loop
        let animationFrameId: number
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const isDark = theme === "dark"

            // Draw particles
            particles.current.forEach((particle) => {
                particle.update(canvas, mousePos.current)
                particle.draw(ctx, isDark)
            })

            // Draw connections
            for (let i = 0; i < particles.current.length; i++) {
                const particleA = particles.current[i]
                for (let j = i + 1; j < particles.current.length; j++) {
                    const particleB = particles.current[j]
                    if (Math.abs(particleA.x - particleB.x) > 120 || Math.abs(particleA.y - particleB.y) > 120) continue

                    const dx = particleA.x - particleB.x
                    const dy = particleA.y - particleB.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 120) {
                        ctx.strokeStyle = isDark
                            ? `rgba(59, 130, 246, ${0.15 * (1 - distance / 120)})`
                            : `rgba(59, 130, 246, ${0.08 * (1 - distance / 120)})`
                        ctx.lineWidth = 1
                        ctx.beginPath()
                        ctx.moveTo(particleA.x, particleA.y)
                        ctx.lineTo(particleB.x, particleB.y)
                        ctx.stroke()
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
            window.removeEventListener("mousemove", handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [theme])

    return (
        <>
            {/* Animated gradient background */}
            <div className="fixed inset-0 -z-20 bg-white dark:bg-slate-950 transition-colors duration-500" />

            {/* Gradient orbs */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob" />
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400/20 dark:bg-purple-500/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-300/20 dark:bg-pink-500/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
            </div>

            {/* Particle canvas */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 -z-10 pointer-events-none"
            />

            {/* Geometric shapes */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-32 h-32 border border-blue-300/20 dark:border-blue-400/30 rounded-lg rotate-12 animate-float" />
                <div className="absolute bottom-40 left-20 w-24 h-24 border border-blue-300/20 dark:border-purple-400/30 rounded-full animate-float animation-delay-2000" />
                <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-blue-300/20 dark:border-cyan-400/30 rotate-45 animate-float animation-delay-4000" />
            </div>
        </>
    )
}
