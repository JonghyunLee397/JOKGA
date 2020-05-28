import React from 'react'
import Jokbal from '../menuitems/jokbal'
import { Paper } from '@material-ui/core'
import Bossam from '../menuitems/bossam'
import sideMenu from '../menuitems/sideMenu'
import setMenu from '../menuitems/setMenu'
import '../items.scss'
import './components.scss'
import { Button } from 'react-bootstrap';
import {
    GridList,
    GridListTile,
    Modal,
    Backdrop,
    Fade
} from '@material-ui/core'

const MenuItemFormat = (props) =>{
    const { formatValue } = props
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
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
                            <Button variant='secondary' className='pic-overlay button' onClick={handleOpen}>
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
                                   <Paper elevation={3} className="paperStyle">주문하기</Paper>
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