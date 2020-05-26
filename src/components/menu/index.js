import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Divider
} from '@material-ui/core'
import MenuItemFormat from './components/components'
import './items.scss'
const Menu = () => {
  const [index, setIndex] = useState("trotters");

  const menuclickhandler = (name) =>{
    setIndex(name);
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'stretch',
      width: '100%',
      height: '100%',
      flex: 1,
      minHeight: '100%',
      fontFamily: 'monospace'
    }}>
       <div>
      <List>
      <ListItem button onClick={() => menuclickhandler('trotters')}>
        <ListItemText primary="Pig's Trotters"/>
      </ListItem>
      <Divider/>
      <ListItem button onClick={() => menuclickhandler('bossam')}>
        <ListItemText primary="Boiled Pork Wrap"/>
      </ListItem>
      <Divider/>
      <ListItem button onClick={() => menuclickhandler('set')}>
        <ListItemText primary="Set Menu"/>
      </ListItem>
      <Divider/>
      <ListItem button onClick={() => menuclickhandler('side')}>
        <ListItemText primary="Side Menu"/>
      </ListItem>
      <Divider/>
      </List>
      </div>
      <div style={{display:'flex', flex: 1, flexWrap:'wrap', width:"70%"}}>
        {index === 'trotters' && <MenuItemFormat formatValue={1}/>}
        {index === 'bossam' && <MenuItemFormat formatValue={2}/>}
        {index === 'set' && <MenuItemFormat formatValue={3}/>}
        {index === 'side' && <MenuItemFormat formatValue={4}/>}
        </div>
    </div>
  )
}
 
export default Menu