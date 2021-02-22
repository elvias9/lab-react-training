import React from 'react'

export default function Greetings(props) {
    return (
        <div>
            <h1>Greetings</h1>
            <p>{props.lang} {props.children}</p>
        </div>
    )
}
