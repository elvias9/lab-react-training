import React from 'react'

export default function BoxColor(props) {
    const color = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
    }
    
    return (
        <div>
         <div style={color}>
            <p>test test test</p>
            </div>
        </div>
    )
}
