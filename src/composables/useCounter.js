import { ref, onMounted, onUnmounted, watch } from 'vue'

export function useCounter(targetValue, options = {}) {
  const {
    duration = 2000,
    startOnVisible = true,
    threshold = 0.5
  } = options

  const currentValue = ref(0)
  const elementRef = ref(null)
  const hasAnimated = ref(false)
  let animationFrame = null
  let observer = null

  const animate = () => {
    if (hasAnimated.value) return

    hasAnimated.value = true
    const startTime = performance.now()
    const startValue = 0
    const endValue = targetValue

    const step = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)

      currentValue.value = Math.floor(startValue + (endValue - startValue) * easeOutQuart)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      } else {
        currentValue.value = endValue
      }
    }

    animationFrame = requestAnimationFrame(step)
  }

  onMounted(() => {
    if (!startOnVisible) {
      animate()
      return
    }

    if (!elementRef.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.value) {
            animate()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame)
    }
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    currentValue,
    elementRef
  }
}
