import React from 'react'
import CartOrder from '../../Header/CartOrder'
import { useScrollTopPage } from '../../hook/useScrollTopPage'

export default function CheckOut() {
    useScrollTopPage();
    return (
        <div>
            <CartOrder/>
        </div>
    )
}
