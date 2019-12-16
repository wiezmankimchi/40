import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const { user } = useParams()
    return (
        <div>
            Main page for user {user}
        </div>
    )
}
