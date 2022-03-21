import React from 'react'
import { useParams } from 'react-router-dom'

export default function TestDetail(props) {
    const { id } = useParams()
    return (
        <div>
            Lấy thử params:{id}
        </div>
    )
}
