import React from 'react'

const ValidationComponent = (props) =>
{
    return (
            <p>{props.textLength < 3? 'Text too short': props.textLength >5? 'Text too long': 'Text is the right length'}</p>
            );
}

export default ValidationComponent;