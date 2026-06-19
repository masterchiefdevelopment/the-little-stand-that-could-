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
  const isHorizontal = orientation === 'top' || orientation === 'bottom'

  const positionStyle = {
    top: { top: 0, left: 0, width: '100%', height: 70 },
    bottom: { bottom: 0, left: 0, width: '100%', height: 70 },
    left: { top: 0, left: 0, width: 70, height: '100%' },
    right: { top: 0, right: 0, width: 70, height: '100%' },
  }[orientation]

  const viewBox = isHorizontal ? '0 0 1200 70' : '0 0 70 1200'

  return (
    <svg
      className="vine-border"
      viewBox={viewBox}
      preserveAspectRatio="none"
      pointerEvents="none"
      style={{
        position: 'fixed',
        zIndex: 40,
        ...positionStyle,
        '--vine-intensity': intensity,
      }}
      aria-hidden="true"
    >
      <path d={stemPath} stroke="#4B7C3F" strokeWidth="2.5" fill="none" opacity="0.55" />
      {leaves.map((leaf) => (
        <Leaf key={leaf.id} {...leaf} />
      ))}
    </svg>
  )
}

function VineAnimation() {
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
    </>
  )
}

export default VineAnimation
