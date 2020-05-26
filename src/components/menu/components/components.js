import React from 'react'
import Jokbal from '../menuitems/jokbal'
import { Paper } from '@material-ui/core'
import Bossam from '../menuitems/bossam'
import '../items.scss'

const MenuItemFormat = (props) =>{
    console.log(props)
    const { formatValue } = props
    return(
        <div style={{
            fontFamily: 'East Sea Dokdo, cursive',
            fontWeight: 'bold',
            display: 'flex',
            flexDirection:'column',
            flex: 1,
            alignItems:'center'
          }} >
        {formatValue === 1 && Jokbal.map((element, index) => {
            return ( 
            <React.Fragment key={index}>
            <Paper style={{display:'flex', flexDirection:'row',margin:'20px', width:'70%'}}>
             <img className="pic" src={element.img}></img>
             <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
             <p style={{fontSize:'250%', fontFamily:'Yeon Sung, cursive'}}>{element.name}</p>
             <p className="largefont">Small: ${element.priceS}</p>
             <p className="largefont">Medium: ${element.priceM}</p>
             <p className="largefont">Large: ${element.priceL}</p>
             <p className="smallfont">{element.description}</p>
             </div>
             </Paper>
             </React.Fragment>
             )
         })}
         {formatValue === 2 && Bossam.map((element, index) => {
            return ( 
            <React.Fragment key={index}>
            <Paper style={{display:'flex', flexDirection:'row',margin:'20px', width:'70%'}}>
             <img className="pic" src={element.img}></img>
             <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
             <p>{element.name}</p>
             <p>Small: ${element.priceSmall}</p>
             <p>{element.description}</p>
             </div>
             </Paper>
             </React.Fragment>
             )
         })}
         {formatValue === 3 && Jokbal.map((element, index) => {
            return ( 
            <React.Fragment key={index}>
            <Paper style={{display:'flex', flexDirection:'row',margin:'20px', width:'70%'}}>
             <img className="pic" src={element.img}></img>
             <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
             <p>{element.name}</p>
             <p>Small: ${element.priceSmall}</p>
             <p>{element.description}</p>
             </div>
             </Paper>
             </React.Fragment>
             )
         })}
         {formatValue === 4 && Jokbal.map((element, index) => {
            return ( 
            <React.Fragment key={index}>
            <Paper style={{display:'flex', flexDirection:'row',margin:'20px', width:'70%'}}>
             <img className="pic" src={element.img}></img>
             <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
             <p>{element.name}</p>
             <p>Small: ${element.priceSmall}</p>
             <p>{element.description}</p>
             </div>
             </Paper>
             </React.Fragment>
             )
         })}
    </div>)
}

export default MenuItemFormat;