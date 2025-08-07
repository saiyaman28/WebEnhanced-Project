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
                    <Href Title={`HOME`} Redirect={`/WebEnhanced-Project/`} />
                    <Href Title={`MERCH`} Redirect={`/WebEnhanced-Project/merch`} />
                    <Href Title={`GALLERY`} Redirect={`/WebEnhanced-Project/gallery`} />
                    <Href Title={`MILESTONE`} Redirect={`/WebEnhanced-Project/milestone`} />
                    <Href Title={`ABOUT`} Redirect={`/WebEnhanced-Project/about`} />
                </nav>
            </div>
        </header>
    )

}