import React from 'react'
import "./styles/Button.css"

const Button = ({onChange}) => {
    return <Button className='button' onClick={onChange} >Quiero una frase</Button>
}

export default Button