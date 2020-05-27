import React, { useState } from 'react';
import {
  Tabs,
  Tab,
} from 'react-bootstrap'
import MenuItemFormat from './components/components'
import './items.scss'
const Menu = () => {
  const [key, setKey] = useState("trotters");
  return (
    <div className='container'>
       <div className="menuBar">
      <Tabs className="myTab" id="menuTab" activeKey={key} onSelect={(k)=>setKey(k)}>
      <Tab title="Pig's Trotters" eventKey="trotters"/>
      <Tab title="Boiled Pork Wrap" eventKey="bossam"/>
      <Tab title="Set Menu" eventKey="set"/>
      <Tab title="Side Menu" eventKey="side"/>
      </Tabs>
        {key === 'trotters' && <MenuItemFormat formatValue={1}/>}
        {key === 'bossam' && <MenuItemFormat formatValue={2}/>}
        {key === 'set' && <MenuItemFormat formatValue={3}/>}
        {key === 'side' && <MenuItemFormat formatValue={4}/>}
        </div>
    </div>
  )
}
 
export default Menu