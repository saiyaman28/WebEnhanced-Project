import React from 'react'
import '../assets/css/components/Header.sass'
import { Href } from '../exporter/component_exporter'
// import { TextLogo } from '../exporter/public_exporter'

export default function Header() { 
    return(
        <header>
            <div>
                <img src={ `` } />
                <nav>
                    <Href Title={`HOME`} Redirect={`/`} />
                    <Href Title={`MERCH`} Redirect={`/merch`} />
                    <Href Title={`GALLERY`} Redirect={`/gallery`} />
                    <Href Title={`MILESTONE`} Redirect={`/milestone`} />
                    <Href Title={`ABOUT`} Redirect={`/about`} />
                </nav>
            </div>
        </header>
    )

}