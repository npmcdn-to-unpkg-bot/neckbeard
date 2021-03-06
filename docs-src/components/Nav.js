import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'
import H3 from "../components/elements/H3"

/**
 * Nav
 */
const NavItem = ({ children, to }) => {
    return (
        <li className={ nb("db brdr1--bottom bcg10") }>
            <Link
                className={ nb("db tc5 pv1 xtd h-tc1") }
                to={ to }
            >
            { children }
            </Link>
        </li>
    )
}


const Nav = () => (
    <nav>
        <ul className={ nb("sans") }>
            <H3>Getting Started</H3>
            <NavItem to="/">Overview</NavItem>
            <NavItem to="/installation">Installation</NavItem>
            <NavItem to="/usage">Usage</NavItem>

            <div className={ nb("mt2") }>
                <H3>Helpers</H3>
            </div>
            <NavItem to="/border">Border</NavItem>
            <NavItem to="/border-radius">Border Radius</NavItem>
            <NavItem to="/colors">Colors</NavItem>
            <NavItem to="/display">Display</NavItem>
            <NavItem to="/flexbox">Flexbox</NavItem>
            <NavItem to="/float">Float</NavItem>
            <NavItem to="/fonts">Font Size</NavItem>
            <NavItem to="/grid">Grid</NavItem>
            <NavItem to="/letter-spacing">Letter Spacing</NavItem>
            <NavItem to="/line-height">Line Height</NavItem>
            <NavItem to="/misc">Misc</NavItem>
            <NavItem to="/overflow">Overflow</NavItem>
            <NavItem to="/position">Position</NavItem>
            <NavItem to="/spacing">Spacing</NavItem>
            <NavItem to="/text-alignment">Text Alignment</NavItem>
            <NavItem to="/text-decoration">Text Decoration</NavItem>
        </ul>
    </nav>
)

export default Nav
