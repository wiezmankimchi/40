import React, { Component } from 'react'
import { Button } from 'grommet'

export default class Button2019 extends Component {
    render() {
        return (
            <Button {...this.props} className="button2019">{this.children}</Button>
        )
    }
}
