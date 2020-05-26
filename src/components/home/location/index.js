import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { IoMdCopy } from 'react-icons/io';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './style.scss'

const Location = () => {
  const [copyOpen, setCopyOpen] = useState(false);
  
  const handleClick = () => {
    setCopyOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      setCopyOpen(false)
    }

    setCopyOpen(false);
   }

  return (
    <div className='location-container'>
      <h1>매장 위치</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexFlow: 'wrap'
        }}
      >
        <div
          style={{
            display: 'flex',
          }}
        >
          <Jumbotron>
            <div
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <h2>둘루스</h2>
              <p className='address'>3751 Satellite Blvd Ste 600</p>
              <p>Duluth, GA 30096 
                <CopyToClipboard text='3751 Satellite Blvd Ste 600, Duluth, GA 30096'>
                  <IoMdCopy className='copy-icon' onClick={handleClick}/>
                </CopyToClipboard>
              </p>
              <p>(470) 299-6150</p>
              <ul>
                <li>일-수</li>
                <li>3:00 pm - 11:00 pm</li>
                <li>목-토</li>
                <li>3:00 pm - 12:00 am</li>
              </ul>
            </div>
          </Jumbotron>
          <iframe 
            title='Duluth Store' 
            width="400" 
            height="510" 
            style={{ border: 0, frameBorder: 0 }} 
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJgzfC6wij9YgR0YMj13aa_qo&key=AIzaSyB6kRigVd359z4Xgl8MJvs5Kaw2GJn5c_4" 
            allowFullScreen 
          />
        </div>
        <div
          style={{
            display: 'flex'
          }}
        >
          <Jumbotron>
            <div
              style={{
                flexDirection: 'column',
                justifyItems: 'center'
              }}
            >
              <div>
                <h2>스와니</h2>
                <p className='address'>1291 Old Peachtree Rd NW #202,</p>
                <p>Suwanee, GA 30024 
                  <CopyToClipboard text='1291 Old Peachtree Rd NW #202, Suwanee, GA 30024'>
                    <IoMdCopy className='copy-icon' onClick={handleClick}/>
                  </CopyToClipboard>
                </p>
                <p>(470) 294-1228</p>
                <ul>
                  <li>일-수</li>
                  <li>3:00 pm - 11:00 pm</li>
                  <li>목-토</li>
                  <li>3:00 pm - 12:00 am</li>
                </ul>
              </div>
            </div>
          </Jumbotron>
          <iframe 
            title='Suwanee Store' 
            width="400" 
            height="510" 
            style={{ border: 0, frameBorder: 0}} 
            src="https://www.google.com/maps/embed/v1/place?q=1291%20Old%20Peachtree%20Rd%20NW%20%23202%2C%20Suwanee%2C%20GA%2030024&key=AIzaSyB6kRigVd359z4Xgl8MJvs5Kaw2GJn5c_4" 
            allowFullScreen 
          />
        </div>
      </div>
      <Snackbar open={copyOpen} autoHideDuration={2000} onClose={handleClose}>
        <Alert variant='filled' elevation={6} onClose={handleClose} severity='success'>
          Copied!
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Location