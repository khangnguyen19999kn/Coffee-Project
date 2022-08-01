
import React from 'react'
import Footer from '../../Header/Footer'
import Header from '../../Header/Header'
import ModalFooter from '../../Header/ModalFooter'
import Product from '../../Header/Product'
import Slide from '../../Header/Slide'
import News from '../../Header/News'
import { useScrollTopPage } from '../../hook/useScrollTopPage'
export default function Home() {
    useScrollTopPage();
    return (
        <div>
            <Slide/>
            <Product/>
            <News/>
        </div>
    )
}
