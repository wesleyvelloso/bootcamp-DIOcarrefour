import React from 'react'

function Button (props){

const {name, func} = props // equals to: const name = props.name; const func = props.func
    
    return(
        <button onClick={func}> {name} </button>
    )
}

export default Button