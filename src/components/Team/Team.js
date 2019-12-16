import React from 'react'
import { useRouteMatch, useParams } from 'react-router-dom'

export default function Team() {
    let { path, url } = useRouteMatch()
    let { team } = useParams()

    return (
        <div>
            <h2>Team {team} </h2>
            <div>{path}</div>
            <div>{url}</div>
        </div>
    )
}
