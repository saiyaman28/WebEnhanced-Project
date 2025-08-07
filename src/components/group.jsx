import React from 'react'
import '../assets/css/components/Group.sass'

export default function Group({ children, ID, Class, Col, Wrap }) {
    return(
        <div id={ ID } className={`group ${ Col && `col` } ${ Wrap && `wrap` } ${ Class }`}>
            { children }
        </div>
    )
}