import React from 'react';
import './card.css';

const Card = (props) => {
    return (
        <div className='card'>
            <img src={`https://robohash.org/${props.monster.id}.png?set=set2&size=150x150`} alt={props.monster.name}/>
            <div className='App'>{props.monster.name}</div>
            <div className='App'>{props.monster.email}</div>
        </div>
    ) 
}

export default Card;