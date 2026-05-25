import { useEffect, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  duration?: number
  decimals?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function AnimatedCounter({
  value,
  duration = 1.2,
  decimals = 0,
  suffix = '',
  prefix = '',
  className = '',
}: AnimatedCounterProps) {
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 })
  const display = useTransform(spring, (v) =>
    `${prefix}${v.toFixed(decimals)}${suffix}`,
  )
  const [text, setText] = useState(`${prefix}0${suffix}`)

  useEffect(() => {
    spring.set(value)
    const unsub = display.on('change', setText)
    return unsub
  }, [value, spring, display, prefix, suffix])

  return (
    <motion.span className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {text}
    </motion.span>
  )
}
