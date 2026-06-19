import { useEffect, useMemo, useRef, useState } from 'react'

const LEAF_COLORS = ['#5FA351', '#6BA85C', '#4B7C3F']

function seededRandom(seed) {
  let value = seed
  return () => {
    value = (value * 9301 + 49297) % 233280
    return value / 233280
  }
}

function generateLeaves(count, seed, along) {
  const random = seededRandom(seed)
  const leaves = []
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1)
    const jitter = (random() - 0.5) * 0.06
    const position = Math.min(1, Math.max(0, t + jitter))
    const { x, y } = along(position)
    leaves.push({
      id: `${seed}-${i}`,
      x,
      y,
      size: 8 + random() * 10,
      rotation: random() * 360,
      color: LEAF_COLORS[Math.floor(random() * LEAF_COLORS.length)],
      flip: random() > 0.5 ? -1 : 1,
      delay: random() * 4,
    })
  }
  return leaves
}

function Leaf({ x, y, size, rotation, color, flip, delay }) {
  return (
    <g transform={`translate(${x}, ${y}) rotate(${rotation}) scale(${flip}, 1)`}>
      <g className="vine-leaf" style={{ animationDelay: `${delay}s` }}>
        <path
          d={`M0,0 C ${-size * 0.9},${-size * 0.8} ${-size * 0.9},${size * 0.8} 0,${size * 1.7}
              C ${size * 0.9},${size * 0.8} ${size * 0.9},${-size * 0.8} 0,0 Z`}
          fill={color}
          opacity="0.9"
        />
        <line x1="0" y1="0" x2="0" y2={size * 1.6} stroke="#3A5C30" strokeWidth="0.6" opacity="0.6" />
        <line x1="0" y1={size * 0.6} x2={size * 0.35} y2={size * 1.0} stroke="#3A5C30" strokeWidth="0.4" opacity="0.5" />
        <line x1="0" y1={size * 0.6} x2={-size * 0.35} y2={size * 1.0} stroke="#3A5C30" strokeWidth="0.4" opacity="0.5" />
      </g>
    </g>
  )
}

function VineBorder({ orientation, leaves, stemPath, intensity }) {
  const getDimensions = () => {
    switch (orientation) {
      case 'top': return { width: '100%', height: '80px' }
      case 'bottom': return { width: '100%', height: '80px' }
      case 'left': return { width: '80px', height: '100vh' }
      case 'right': return { width: '80px', height: '100vh' }
      default: return { width: '100%', height: '80px' }
    }
  }
  const getPosition = () => {
    switch (orientation) {
      case 'top': return { position: 'fixed', top: 0, left: 0, zIndex: 10 }
      case 'bottom': return { position: 'fixed', bottom: 0, left: 0, zIndex: 10 }
      case 'left': return { position: 'fixed', top: 0, left: 0, zIndex: 10 }
      case 'right': return { position: 'fixed', top: 0, right: 0, zIndex: 10 }
      default: return { position: 'fixed', top: 0, left: 0, zIndex: 10 }
    }
  }
  const dims = getDimensions()
  const pos = getPosition()
  return (
    <svg
      className="vine-border"
      style={{
        ...pos,
        ...dims,
        overflow: 'visible',
        pointerEvents: 'none',
        filter: `brightness(${1 - intensity * 0.1})`,
        '--vine-intensity': intensity,
      }}
      viewBox={orientation === 'top' || orientation === 'bottom' ? '0 0 1200 80' : '0 0 80 1200'}
    >
      <path d={stemPath} stroke="#3A5C30" strokeWidth="1.5" fill="none" opacity="0.6" />
      {leaves.map((leaf) => (
        <Leaf key={leaf.id} {...leaf} />
      ))}
    </svg>
  )
}

function VineAnimation({ children }) {
  const [intensity, setIntensity] = useState(0)
  const lastScrollY = useRef(0)
  const decayTimeout = useRef(null)

  useEffect(() => {
    lastScrollY.current = window.scrollY
    function handleScroll() {
      const currentScrollY = window.scrollY
      const delta = Math.abs(currentScrollY - lastScrollY.current)
      lastScrollY.current = currentScrollY
      const newIntensity = Math.min(1, delta / 40)
      setIntensity((prev) => Math.max(prev, newIntensity))
      if (decayTimeout.current) clearTimeout(decayTimeout.current)
      decayTimeout.current = setTimeout(() => setIntensity(0), 350)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (decayTimeout.current) clearTimeout(decayTimeout.current)
    }
  }, [])

  const topLeaves = useMemo(
    () => generateLeaves(26, 1, (t) => ({ x: t * 1200, y: 18 + Math.sin(t * Math.PI * 6) * 10 })),
    []
  )
  const bottomLeaves = useMemo(
    () => generateLeaves(26, 2, (t) => ({ x: t * 1200, y: 52 + Math.sin(t * Math.PI * 6 + 1) * 10 })),
    []
  )
  const leftLeaves = useMemo(
    () => generateLeaves(24, 3, (t) => ({ x: 18 + Math.sin(t * Math.PI * 8) * 10, y: t * 1200 })),
    []
  )
  const rightLeaves = useMemo(
    () => generateLeaves(24, 4, (t) => ({ x: 52 + Math.sin(t * Math.PI * 8 + 1) * 10, y: t * 1200 })),
    []
  )

  const topStem = `M0,18 ${Array.from({ length: 13 }, (_, i) => {
    const x = (i / 12) * 1200
    const y = 18 + Math.sin((i / 12) * Math.PI * 6) * 10
    return `L${x},${y}`
  }).join(' ')}`

  const bottomStem = `M0,52 ${Array.from({ length: 13 }, (_, i) => {
    const x = (i / 12) * 1200
    const y = 52 + Math.sin((i / 12) * Math.PI * 6 + 1) * 10
    return `L${x},${y}`
  }).join(' ')}`

  const leftStem = `M18,0 ${Array.from({ length: 13 }, (_, i) => {
    const y = (i / 12) * 1200
    const x = 18 + Math.sin((i / 12) * Math.PI * 8) * 10
    return `L${x},${y}`
  }).join(' ')}`

  const rightStem = `M52,0 ${Array.from({ length: 13 }, (_, i) => {
    const y = (i / 12) * 1200
    const x = 52 + Math.sin((i / 12) * Math.PI * 8 + 1) * 10
    return `L${x},${y}`
  }).join(' ')}`

  return (
    <>
      <style>{`
        .vine-leaf {
          transform-origin: 0 0;
          animation: vine-sway 3.5s ease-in-out infinite;
        }
        .vine-border {
          transition: filter 0.2s ease;
        }
        @keyframes vine-sway {
          0%, 100% {
            transform: rotate(calc(var(--vine-intensity, 0) * -6deg));
          }
          50% {
            transform: rotate(calc(var(--vine-intensity, 0) * 6deg));
          }
        }
      `}</style>
      <VineBorder orientation="top" leaves={topLeaves} stemPath={topStem} intensity={intensity} />
      <VineBorder orientation="bottom" leaves={bottomLeaves} stemPath={bottomStem} intensity={intensity} />
      <VineBorder orientation="left" leaves={leftLeaves} stemPath={leftStem} intensity={intensity} />
      <VineBorder orientation="right" leaves={rightLeaves} stemPath={rightStem} intensity={intensity} />
      <div style={{ position: 'relative', zIndex: 20, width: '100%' }}>
        {children}
      </div>
    </>
  )
}

export default VineAnimation
