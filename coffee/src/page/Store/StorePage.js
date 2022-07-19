import React from 'react'
import Store from '../../Header/Store'
import { useScrollTopPage } from '../../hook/useScrollTopPage'

export default function StorePage() {
    useScrollTopPage();

    return (
        <div>
            <Store/>
        </div>
    )
}
