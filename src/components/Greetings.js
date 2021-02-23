import React from 'react'

export default function Greetings(props) {
    let greet = () => {
        if (props.lang === 'de') {
            greet = 'Hallo'

        }
         
    }
    return (
        <div>
            <h1>Greetings</h1>
            <p>{greet} {props.children}</p>
        </div>
    )
}
