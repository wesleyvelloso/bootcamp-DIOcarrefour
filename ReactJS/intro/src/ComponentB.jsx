import React from 'react'

function ComponentB (props){
    return(
        <div>Componente B
            <div> {props.children} </div>
        </div>
    )
}

export default ComponentB