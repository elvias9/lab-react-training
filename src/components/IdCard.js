import React from 'react'

function IdCard(props) {
    const card = {
       

    }
    return (
        
        <div>
        <h1>IdCard</h1>
        <h3>First name: {props.firstName}</h3>
        <h3>Last Name: {props.lastName}</h3>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Date of birth: {props.birth.toLocaleDateString()}</p>
        <img src={props.picture} />
        <p></p>
        </div>
    )
}

export default IdCard;