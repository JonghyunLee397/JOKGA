import React from 'react'
import { Paper } from '@material-ui/core'
import './items.scss';
import Spicy from './spicyJokbal.jpg'

const trotter = () => {
    return (
    <div style={{
        display: 'flex',
        flex: 1,
        fontFamily: 'monospace',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '50%',
      }}> 
        <Paper style={{width:'30%'}}>
            <img className="pic" src={Spicy}></img>
            <p className="name">Spicy Trotter</p>
        </Paper>
        <Paper style={{margin:'30px'}}>
            <img className="pic" src={Spicy}></img>
            <p className="name">Spicy Trotter</p>
        </Paper>
        <Paper style={{margin:'30px'}}>
            <img className="pic" src={Spicy}></img>
            <p className="name">Spicy Trotter</p>
        </Paper>
        <Paper style={{margin:'30px'}}>
            <img className="pic" src={Spicy}></img>
            <p className="name">Spicy Trotter</p>
        </Paper>
        <Paper style={{margin:'30px'}}>
            <img className="pic" src={Spicy}></img>
            <p className="name">Spicy Trotter</p>
        </Paper>
        <Paper style={{margin:'30px'}}>
            <img className="pic" src={Spicy}></img>
            <p className="name">Spicy Trotter</p>
        </Paper>
        <Paper style={{margin:'30px'}}>
            <img className="pic" src={Spicy}></img>
            <p className="name">Spicy Trotter</p>
        </Paper>
        <Paper style={{margin:'30px'}}>
            <img className="pic" src={Spicy}></img>
            <p className="name">Spicy Trotter</p>
        </Paper>
        <Paper style={{margin:'30px'}}>
            <img className="pic" src={Spicy}></img>
            <p className="name">Spicy Trotter</p>
        </Paper>
        <Paper style={{margin:'30px'}}>
            <img className="pic" src={Spicy}></img>
            <p className="name">Spicy Trotter</p>
        </Paper>

    </div>
    )
}

export default trotter;
