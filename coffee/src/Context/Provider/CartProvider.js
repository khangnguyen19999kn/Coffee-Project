import React, { useState } from 'react'
import { CartContext } from '../_Context/CartContext'

export const CartProvider = (props) => {
    const quantityLocal = JSON.parse(localStorage.getItem('productOrder')) || []
   const totalItemInCart = (quantityLocal)=>{
    let QuantityCart = quantityLocal.reduce((order1, order2) => {
        return order1 + order2.quantity
        
    }, 0)
    return QuantityCart
   }
   
    const [quantity, setQuantity] = useState(totalItemInCart(quantityLocal));
    const [address,setAddress]= useState(localStorage.getItem('address'))

    const addToCart = (_quantity) => {
        const newValue = quantity + _quantity
        setQuantity(newValue)
    }
    const DeleteInCart = (newQuantitylocal) => {
        if(newQuantitylocal===[]){
            setQuantity(0)
        }else
        setQuantity(totalItemInCart(newQuantitylocal))
    }
    const setDeliveryAddress =(_address)=>{
        setAddress(_address)
    }

    return (
        <CartContext.Provider value={{ quantity, addToCart,address,setDeliveryAddress,DeleteInCart}}>
            {props.children}
        </CartContext.Provider>
    )
}
