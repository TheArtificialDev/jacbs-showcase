'use client'
import * as React from 'react'
import { useEffect, useRef } from 'react'
import { createNoise2D } from 'simplex-noise'

interface Point {
    x: number
    y: number
    wave: { x: number; y: number }
    cursor: {
        x: number
        y: number
        vx: number
        vy: number
    }
}

interface WavesProps {
    className?: string
    strokeColor?: string
    backgroundColor?: string
    pointerSize?: number
}

export function Waves({
    className = "",
    strokeColor = "#ffffff",  // White lines
    backgroundColor = "#000000",  // Black background
    pointerSize = 0.5
}: WavesProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const svgRef = useRef<SVGSVGElement>(null)
    const mouseRef = useRef({
        x: -10,
        y: 0,
        lx: 0,
        ly: 0,
        sx: 0,
        sy: 0,
        v: 0,
        vs: 0,
        a: 0,
        set: false,
    })
    const pathsRef = useRef<SVGPathElement[]>([])
    const linesRef = useRef<Point[][]>([])
    const noiseRef = useRef<((x: number, y: number) => number) | null>(null)
    const rafRef = useRef<number | null>(null)
    const boundingRef = useRef<DOMRect | null>(null)

    // Initialization
    useEffect(() => {
        if (!containerRef.current || !svgRef.current) return

        // Initialize noise generator
        noiseRef.current = createNoise2D()

        // Set SVG size
        const setSize = () => {
            if (!containerRef.current || !svgRef.current) return

            boundingRef.current = containerRef.current.getBoundingClientRect()
            const { width, height } = boundingRef.current

            svgRef.current.style.width = `${width}px`
            svgRef.current.style.height = `${height}px`
        }

        // Setup lines - more points for smoother curves
        const setLines = () => {
            if (!svgRef.current) return

            linesRef.current = []
            pathsRef.current = []

            // Clear existing paths
            svgRef.current.innerHTML = ''

            const numberOfLines = 12
            const svgWidth = svgRef.current.clientWidth
            const svgHeight = svgRef.current.clientHeight

            for (let i = 0; i < numberOfLines; i++) {
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                path.setAttribute('stroke', strokeColor)
                path.setAttribute('stroke-width', '1')
                path.setAttribute('fill', 'none')
                path.setAttribute('opacity', `${0.1 + i * 0.05}`)

                svgRef.current.appendChild(path)
                pathsRef.current.push(path)

                const points: Point[] = []
                const pointSpacing = svgWidth / 40 // More points for smoother curves

                for (let x = 0; x <= svgWidth + pointSpacing; x += pointSpacing) {
                    points.push({
                        x,
                        y: svgHeight / 2 + (i - numberOfLines / 2) * 15,
                        wave: { x: 0, y: 0 },
                        cursor: { x: 0, y: 0, vx: 0, vy: 0 }
                    })
                }

                linesRef.current.push(points)
            }
        }

        const onMouseMove = (e: MouseEvent) => {
            if (!boundingRef.current) return
            mouseRef.current.lx = mouseRef.current.x
            mouseRef.current.ly = mouseRef.current.y
            mouseRef.current.x = e.clientX - boundingRef.current.left
            mouseRef.current.y = e.clientY - boundingRef.current.top
            mouseRef.current.set = true
        }

        const onTouchMove = (e: TouchEvent) => {
            e.preventDefault()
            if (!boundingRef.current || !e.touches[0]) return
            mouseRef.current.lx = mouseRef.current.x
            mouseRef.current.ly = mouseRef.current.y
            mouseRef.current.x = e.touches[0].clientX - boundingRef.current.left
            mouseRef.current.y = e.touches[0].clientY - boundingRef.current.top
            mouseRef.current.set = true
        }

        const onResize = () => {
            setSize()
            setLines()
        }

        const tick = () => {
            if (!noiseRef.current) return

            const mouse = mouseRef.current
            const time = Date.now() * 0.0005

            // Mouse physics
            if (mouse.set) {
                const dx = mouse.x - mouse.lx
                const dy = mouse.y - mouse.ly
                mouse.v = Math.sqrt(dx * dx + dy * dy)
                mouse.vs = Math.min(mouse.v * 0.1, 2)
                mouse.a = Math.atan2(dy, dx)
                mouse.set = false
            } else {
                mouse.vs *= 0.95
            }

            // Update each line
            linesRef.current.forEach((line, lineIndex) => {
                const path = pathsRef.current[lineIndex]
                if (!path) return

                let pathData = ''

                line.forEach((point, pointIndex) => {
                    // Wave motion
                    const waveX = noiseRef.current!(point.x * 0.01 + time, lineIndex * 0.5) * 30
                    const waveY = noiseRef.current!(point.x * 0.008 + time * 0.8, lineIndex * 0.3 + 100) * 25

                    point.wave.x = waveX
                    point.wave.y = waveY

                    // Mouse interaction
                    const dx = mouse.x - point.x
                    const dy = mouse.y - point.y
                    const distance = Math.sqrt(dx * dx + dy * dy)
                    const maxDistance = 150

                    if (distance < maxDistance) {
                        const force = (1 - distance / maxDistance) * mouse.vs * pointerSize
                        const angle = Math.atan2(dy, dx)
                        point.cursor.vx += Math.cos(angle) * force * 0.3
                        point.cursor.vy += Math.sin(angle) * force * 0.3
                    }

                    // Apply damping
                    point.cursor.vx *= 0.85
                    point.cursor.vy *= 0.85

                    // Update cursor position
                    point.cursor.x += point.cursor.vx
                    point.cursor.y += point.cursor.vy

                    // Apply more damping to cursor position
                    point.cursor.x *= 0.92
                    point.cursor.y *= 0.92

                    // Calculate final position
                    const finalY = point.y + point.wave.y + point.cursor.y

                    if (pointIndex === 0) {
                        pathData += `M ${point.x} ${finalY}`
                    } else {
                        // Create smooth curves using quadratic Bézier curves
                        const prevPoint = line[pointIndex - 1]
                        const prevFinalY = prevPoint.y + prevPoint.wave.y + prevPoint.cursor.y
                        const midX = (prevPoint.x + point.x) / 2
                        const midY = (prevFinalY + finalY) / 2

                        pathData += ` Q ${prevPoint.x} ${prevFinalY} ${midX} ${midY}`

                        if (pointIndex === line.length - 1) {
                            pathData += ` Q ${point.x} ${finalY} ${point.x} ${finalY}`
                        }
                    }
                })

                path.setAttribute('d', pathData)
            })

            rafRef.current = requestAnimationFrame(tick)
        }

        // Initialize size and lines
        setSize()
        setLines()

        // Bind events
        window.addEventListener('resize', onResize)
        window.addEventListener('mousemove', onMouseMove)
        const container = containerRef.current
        container.addEventListener('touchmove', onTouchMove, { passive: false })

        // Start animation
        rafRef.current = requestAnimationFrame(tick)

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            window.removeEventListener('resize', onResize)
            window.removeEventListener('mousemove', onMouseMove)
            container?.removeEventListener('touchmove', onTouchMove)
        }
    }, [strokeColor, backgroundColor, pointerSize])

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${className}`}
            style={{ backgroundColor }}
        >
            <svg
                ref={svgRef}
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: 1 }}
            />
        </div>
    )
}
