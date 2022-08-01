import React from 'react'
import Product from '../../Header/Product'
import { useScrollTopPage } from '../../hook/useScrollTopPage'
export default function ListProduct() {
    useScrollTopPage();
    return (
        <div>
           <Product/> 
        </div>
    )
}
