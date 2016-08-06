import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { StyleSheetServer } from 'aphrodite'

// Beard
import neckbeard from './neckbeard'

const settings = {
    ...neckbeard.defaultSettings
    // ...Overwrites here
}

// Compose Beard Style Object
const b = neckbeard.create(neckbeard.all(), settings)
const bstatic = neckbeard.static(neckbeard.all(), settings)
console.log(bstatic)

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={ logo } className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className={ b.css('pv2 md-pv4 only-sm-xpv') }>
                    Spacing
                </p>
                <p className={ b.css('ft3 md-ft6 lg-ft8') }>
                    Fonts
                </p>
                <p className={ b.css('brdr2 br4') }>
                    Border with Radius
                </p>
                <p className={ b.css('dn lg-db only-sm-db') }>
                    Display None until large
                </p>
                <p className={ b.css('dib') }>
                    Display Inline Block
                </p>
                <p className={ b.css('bgg10 tc1') }>
                    Colors Inline Block
                </p>
                <div>
                    <div className={ b.css('flex aic jcc only-md-jcfe') }>Flex Stuff</div>
                </div>
            </div>
        )
    }
}

export default App
