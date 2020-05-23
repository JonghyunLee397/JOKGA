import React, { useEffect, useState } from 'react';
import { Fab } from '@material-ui/core';
import { AiOutlineDoubleLeft as LeftIcon } from 'react-icons/ai';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './style.scss'

const FloatingAction = () => {
  const [isTop, setIsTop] = useState(false)

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position !== 0) setIsTop(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isTop === true)
      window.scrollTo(0, 0)
  }, [isTop])

  const scrollUp = (e) => {
    e.preventDefault()
    setIsTop(true)
  }

  return (
    <OverlayTrigger
      key='bottom'
      placement='bottom'
      overlay={
        <Tooltip>
          Top
        </Tooltip>
      }
    >
    <Fab
      style={{
        position: 'fixed',
        margin: 0,
        top: '80%',
        right: '3%',
        zIndex: 4,
        backgroundColor: 'white'
      }}
      onClick={(e) => scrollUp(e)}
    >
      <LeftIcon className='fab-icon' />
    </Fab>
    </OverlayTrigger>
  )
}

export default FloatingAction