import React, { useState, useForm } from 'react'
import { CartContext } from '../_Context/CartContext'
import { Modal, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCookies } from 'react-cookie';
import Axios from 'axios'

export const CartProvider = (props) => {
  const quantityLocal = JSON.parse(localStorage.getItem('productOrder')) || []
  const totalItemInCart = (quantityLocal) => {
    let QuantityCart = quantityLocal.reduce((order1, order2) => {
      return order1 + order2.quantity

    }, 0)
    return QuantityCart
  }

  const [quantity, setQuantity] = useState(totalItemInCart(quantityLocal));
  const [address, setAddress] = useState(localStorage.getItem('address'));
  const [token, setToken] = useState('')
  const [cookies,setCookie,removeCookie] = useCookies(['token']);
  const [userName,setUserName]=useState('');
  const [infoUser,setInforUser]=useState({});

  const addToCart = (_quantity) => {
    const newValue = quantity + _quantity
    setQuantity(newValue)
  }
  const DeleteInCart = (newQuantitylocal) => {
    if (newQuantitylocal === []) {
      setQuantity(0)
    } else
      setQuantity(totalItemInCart(newQuantitylocal))
  }
  const setDeliveryAddress = (_address) => {
    setAddress(_address)
  }
  const changeToken = (token) => {
    setToken(token)
  }
  const logOut = ()=>{
    removeCookie("token");
    console.log('abc')
  }
  // test change token 
  const checkToken = () => {
    const { token: _token } = cookies;
 

    if (!_token) {
      return (
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              style={{
                width: "40px",
                height: "40px",
                marginTop: "10px",
                marginRight: "-15px",
              }}
              src={"./Login.70dc3d8.png"}
              alt="shopping"
            ></img>
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">
              <i class="fas fa-history fa-sm"></i> Tra cứu đơn hàng
            </a>
            <a className="dropdown-item" data-toggle="modal" data-target="#ModalLogin" href="#">
              <i class="fas fa-sign-in-alt fa-sm"></i> Đăng nhập
            </a>

          </div>
        </li>
      )
    }
    else {
      // const userName="";
      // console.log(_token)
      Axios({
        url: 'https://coffeepha.ml/api/v1/users/decode',
        method: 'POST',
        data: {token: _token }
  
  
      }).catch((err) => {
        console.log(err);
  
  
      }).then((res) => {
  
        
  
          const {name} = res.data;
          const _userName = name.split(' ')
          
          setUserName(_userName[_userName.length-1]);
          setInforUser(res.data);
          // console.log(res.data)
          

  
        
  
  
  
      });
      // console.log(userName)
      return (
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="user_login">
              {userName.toUpperCase()}

            </span>
            <FontAwesomeIcon style={{ position: 'relative', top: '20px', right: '7px' }} icon="fa-solid fa-angle-down" />
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <div className="dropdown-content">
              <a className="dropdown-item" href="#">
                <FontAwesomeIcon icon="fa-solid fa-user" /> Thông tin tài khoản
              </a>
              <hr className="line-of-dropdown-content" />
              <a className="dropdown-item" href="#">
                <FontAwesomeIcon icon="fa-solid fa-clock" />
                &nbsp;Lịch sử mua hàng
              </a>
              <hr className="line-of-dropdown-content" />
              <a onClick={()=>{logOut()}} className="dropdown-item" href="#">
                <i class="fas fa-sign-in-alt fa-sm"></i> Đăng xuất
              </a>

            </div>
          </div>
        </li>
      )
    }
  }





  return (
    <CartContext.Provider value={{ quantity, addToCart, address, setDeliveryAddress, DeleteInCart, changeToken, checkToken,infoUser }}>
      {props.children}
    </CartContext.Provider>
  )
}
