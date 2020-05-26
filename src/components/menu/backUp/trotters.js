import React from 'react'
import '../items.scss';
import MenuItemFormat from '../components/components'


const trotter = () => {
    return (
    <div style={{
        fontFamily: 'East Sea Dokdo, cursive',
        fontWeight: 'bold',
        display: 'flex',
        flexDirection:'column',
        flex: 1,
        alignItems:'center'
      }}> 
      <MenuItemFormat formatValue={1}/>
       
    </div>
    )
}

export default trotter;
