import React, {useState} from 'react'
import Jokbal from '../menuitems/jokbal'
import { Paper,Fab} from '@material-ui/core'
import Bossam from '../menuitems/bossam'
import sideMenu from '../menuitems/sideMenu'
import setMenu from '../menuitems/setMenu'
import { IoIosClose, IoIosCart} from 'react-icons/io'
import '../items.scss'
import './components.scss'
import { Button , DropdownButton, Dropdown } from 'react-bootstrap';
import {
    GridList,
    GridListTile,
    Modal,
    Backdrop,
    Fade
} from '@material-ui/core'
import DropdownItem from 'react-bootstrap/DropdownItem'

const MenuItemFormat = (props) =>{
    const { formatValue } = props
    const [open, setOpen] = useState(false);
    const [productIndex, setProductIndex] = useState(0);

    const handleOpen = (i) => {
        setProductIndex(i);
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return(
        <div className="menuGrid">
        <div className="Grid">
        {formatValue === 1 && Jokbal.map((element, index) => {
            return ( 
            <React.Fragment key={index}>
                <GridList>
                    <GridListTile style={{height:'100%', width:'100%'}} key={element.img}>
                        <div className='pic-container'>
                            <img src={element.img} alt={element.name}/>
                            <div className='pic-overlay text'>{element.name}</div>
                            <div>
                            <Button variant='secondary' className='pic-overlay button' onClick={() => handleOpen(index)}>
                                 <div className='button-text'>
                                     주문하기
                                 </div>
                            </Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                  timeout: 500,
                                }}
                            >
                             <Fade in={open} className="fadeStyle">
                                    <div>
                                   <Paper elevation={3} className="paperStyle" >
                                   <IoIosClose className="xButton" onClick={() => setOpen(false)}/> 
                                       <div className="imgBox">
                                           <img src={Jokbal[productIndex].img}></img>
                                           <div className="buttons">
                                           <DropdownButton className="dropDownContainer" title="Size" variant="secondary">
                                               <DropdownItem eventKey="1">Small</DropdownItem>
                                               <DropdownItem eventKey="2">Medium</DropdownItem>
                                               <DropdownItem eventKey="3">Large</DropdownItem>
                                           </DropdownButton>
                                           <Button variant='secondary' className="cartContainer" onClick={() => setOpen(false)}>
                                            <IoIosCart className="cart" />
                                           <p className="cartText">장바구니 담기</p>
                                           </Button>
                                           </div>
                                       </div>
                                        <div className="textBox">
                                        <p style={{fontSize:'50pt'}}>{Jokbal[productIndex].name}</p>
                                        <p className="smFont">{Jokbal[productIndex].description}</p>
                                        <p className="lgFont">S: ${Jokbal[productIndex].priceS}</p>
                                        <p className="lgFont">M: ${Jokbal[productIndex].priceM}</p>
                                        <p className="lgFont">L: ${Jokbal[productIndex].priceL}</p>
                                        </div>
                                   </Paper>
                                    </div>
                                </Fade>
                            </Modal>
                            </div>
                        </div>    
                    </GridListTile>
                </GridList>
             </React.Fragment>
             )
         })}
         </div>
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
         {formatValue === 3 && Bossam.map((element, index) => {
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