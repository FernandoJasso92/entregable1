import React from 'react'
import "./styles/Button.css"

const Button = ({onChange}) => {
    return <button className='button' onClick={onChange} >Quiero una frase</button>
}

export default Button