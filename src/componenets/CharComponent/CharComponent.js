import React from 'react'
import  './CharComponent.css'

const CharComponent = (props) =>
{
    return (
            <div className="CharComponent" onClick={props.clicked}>
                <p>{props.char}</p>
            </div>
            );
}

export default CharComponent;