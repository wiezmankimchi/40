import React from 'react'
import { useParams } from 'react-router-dom'

import { useGlobal } from "../store/mainStore";

export default function User() {
    const { user } = useParams()
    const [store, actions] = useGlobal();

    React.useEffect(() => {
        function setBreadcrumbs(){
          actions.setBreadcrumb(["Home","Users",user])
        }
        setBreadcrumbs()
      }, [user])

    return (
        <div>
            Main page for user {user}
        </div>
    )
}
