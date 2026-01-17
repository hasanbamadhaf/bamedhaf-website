// ScrollToTop.jsx - Scrolls to top when navigating between pages

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo(0, 0)

    // Also ensure document element scrolls to top
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // Small delay to ensure it works after page renders
    setTimeout(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
