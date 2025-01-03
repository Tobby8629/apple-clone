import React, { useEffect, useState } from 'react'

const useResize = () => {
  const [mobile, setMobile] = useState(window.innerWidth < 768)
  const [desktop, setDesktop] = useState(window.innerWidth >= 768)

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setDesktop(true)
      setMobile(false)
    } else {
      setMobile(true)
      setDesktop(false)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { mobile, desktop }
}

export default useResize
