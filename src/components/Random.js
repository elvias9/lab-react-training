
import React from 'react'

export default function Random(props) {
    return (
        <div>
            <p>Random value between {props.min} and {props.max} <span>=></span> {Math.floor(Math.random()* 6)}</p>
        </div>
    )
}
