import React from 'react'
import HistoryBuy from '../../Header/HistoryBuy'
import { useScrollTopPage } from '../../hook/useScrollTopPage'

export default function PageHistoryBuy() {
  useScrollTopPage();
  return (
    <div>
        <HistoryBuy/>
    </div>
  )
}
