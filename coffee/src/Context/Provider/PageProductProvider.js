import React, { useState } from 'react'
import {PageProductContext} from '../_Context/PageProductContext'
import { Modal, Button } from 'antd';

export const PageProductProvider = (props) => {
    const [quantity, setQuantity] = useState(1);
    const [styleMiniusQuantity, setStyleMinius] = useState({
        background: '#e4e4e4',
        borderRadius: '100%',
        width: '30px',
        height: '30px',
      });
      const changeStateQuantity = (quantity) => {
        setQuantity(quantity)
      }
    
      const changeQuantity = (type) => {
    
        if (type === "plus") {
          const newValue = quantity + 1;
          changeStateQuantity(newValue);
    
    
          if (newValue > 1) {
    
            setStyleMinius({
              background: '#ff8d00',
              borderRadius: '100%',
              width: '30px',
              height: '30px',
            })
          }
        }
        else {
          const newValue = quantity - 1;
    
          changeStateQuantity(newValue);
    
          if (newValue <= 1) {
            setStyleMinius({
              background: '#e4e4e4',
              borderRadius: '100%',
              width: '30px',
              height: '30px',
            })
            changeStateQuantity(1)
    
          }
    
        }
      }
    


    return (
        <PageProductContext.Provider value={{quantity,changeQuantity,styleMiniusQuantity}}>
            {props.children}    

        </PageProductContext.Provider>
            
       
    )
}
