import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuItem(props) {
    const {route,name} =props
    return (
            <Link to={route+"/"+name}>{name}</Link>
    )
}
