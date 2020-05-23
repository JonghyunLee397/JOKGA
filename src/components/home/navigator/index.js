import React from 'react'
import { Button } from 'react-bootstrap';
import { IoMdArrowForward } from 'react-icons/io'
import { useHistory } from 'react-router-dom';
import menuImage from '../images/menu.jpg';
import locationImage from '../images/location.jpg';
import handshakeImage from '../images/handshake.jpg';
import './style.scss'

const Navigator = () => {
  const history = useHistory();

  const routeChange = (pathName) => {
    let path = ``;
    if (pathName === 'menu') { path = `/menu` }
    else if (pathName === 'franchise') { path = `/franshise` }
    else { path = `/` }
    history.push(path);
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <div
        className='picture-container'
      >
        <img
          alt='find location'
          src={locationImage}
        />
        <div className='picture-overlay text'>매장 찾기</div>
        <Button variant='secondary' className='picture-overlay button'>
          <div className='button-text'>
            가자 <IoMdArrowForward />
          </div>
        </Button>
      </div>
      <div
        className='picture-container'
      >
        <img
          alt='find location'
          src={menuImage}
        />
        <div className='picture-overlay text'>매뉴 보기</div>
        <Button variant='secondary' className='picture-overlay button' onClick={() => routeChange('menu')}>
          <div className='button-text'>
            okay, 고 <IoMdArrowForward />
          </div>
        </Button>
      </div>
      <div
        className='picture-container'
      >
        <img
          alt='find location'
          src={handshakeImage}
        />
        <div className='picture-overlay text'>창업 안내</div>
        <Button variant='secondary' className='picture-overlay button' onClick={() => routeChange('franchise')}>
          <div className='button-text'>
            돈좀 벌자! <IoMdArrowForward />
          </div>
        </Button>
      </div>
    </div>
  )
}

export default Navigator