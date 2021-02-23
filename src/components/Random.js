
import React from 'react'

export default function Random(props) {
    const max = props.max
    return (
        <div>
        <h2>Random</h2>
            <p>Random value between {props.min} and {props.max} <span>=></span> {Math.floor(Math.random()* max)}</p>
        </div>
    )
}
