import React, { useEffect } from 'react'
import Footer from '../../Header/Footer'
import ModalFooter from '../../Header/ModalFooter'
import News from '../../Header/News'
import { useScrollTopPage } from '../../hook/useScrollTopPage'
export default function NewsPage() {
    useScrollTopPage();

    return (
        <div>
            <News />
        </div>
    )
}
