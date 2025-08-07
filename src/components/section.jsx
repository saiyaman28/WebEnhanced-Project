import React from 'react'
import '../assets/css/components/Section.sass'

export default function Section({ children, ID, Class, Title, UpperLeft, UpperRight }) {
    return(
        <section id={ ID } className={ Class }>
            { UpperLeft || UpperRight ? 
                <div className={`title`}>
                    <div className={`left`}>{ UpperLeft && UpperLeft }</div>
                    <h2>{ Title }</h2>
                    <div className={`right`}>{ UpperRight && UpperRight }</div>
                </div>
            : 
                Title && <h2>{ Title }</h2> 
            }
            { children }
        </section>
    )
}
