import React, { useState } from 'react';
import { Browserouter as Router, Link } from 'react-router-dom'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Inbox,
  Drafts
} from '@material-ui/core'
import { Route } from 'react-router-dom';
import Trotters from './trotters'
const Menu1 = ({match}) => {
  return(
    <div>
    {match.params.item}
    </div>
  )
}



const Menu = () => {
  const [index, setIndex] = useState("");

  const menuclickhandler = (name) =>{
    console.log(name)
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
      <Route path="/menu/:item" component={Menu1}>
      </Route>
      </div>
      <div style={{display:'flex', flex: 1, alignItems:'center', width:'70%'}}>
        {index === 'trotters' && <Trotters/>}
        {index === 'bossam' && <div> bossam </div>}
        {index === 'set' && <div> set </div>}
        {index === 'side' && <div> side </div>}
        </div>
    </div>
  )
}
 
export default Menu