import React from 'react'
import { useRouteMatch, useParams } from 'react-router-dom'

import { useGlobal } from "../store/mainStore";

export default function Team() {
    let { path, url } = useRouteMatch()
    let { team } = useParams()

    const [store, actions] = useGlobal();

    React.useEffect(() => {
        function setBreadcrumbs(){
          actions.setBreadcrumb(["Home","Teams",team])
        }
        setBreadcrumbs()
      }, [team])

    return (
        <div>
            <h2>Team {team} </h2>
            <div>{path}</div>
            <div>{url}</div>
        </div>
    )
}
