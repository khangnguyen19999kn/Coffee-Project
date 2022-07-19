import React, { Component, useState, useEffect, useContext } from "react";
import "./styles.scss";
import "@fortawesome/fontawesome-free/js/all.js";
import AlgoliaPlaces from "algolia-places-react";
import ModalLogin from "./ModalLogin";
import ModalDelivery from "./ModalDelivery";
import CartOrder from "./CartOrder";
import { CartContext } from "../Context/_Context/CartContext";
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Header() {
  let addressLocal = localStorage.getItem('address');
  const [address, setAddress] = useState(!addressLocal ? "" : addressLocal)
  const [token, setToken] = useState(0);
  const { checkToken } = useContext(CartContext);

  // let headerLogin = null;

  // useEffect(() => {
  //   headerLogin = checkToken?.();



  // }, []);

  let styleOfShoppingcart = {
    float: 'right',
    borderRadius: '100%',
    background: 'red',
    minWidth: '22px',
    position: 'relative',
    right: '30px',
    top: '1px',
    display: 'none'

  }
  let activeStyle = {
    textDecoration: "underline"
  };




  return (
    <div style={{ marginBottom: '55px' }}>




      {/* <img src={'./coffee-house-logo-CED27E67C8-seeklogo.com.png'} className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="kkj" /> */}
      <nav
        style={{ background: "#fda22f" }}
        className="navbar fixed-top navbar-expand-lg navbar-light   text-secondary"
      >
        <NavLink
      
          className="navbar-brand text-secondary logo-header "
          to="/"
        >
          <img
            style={{ height: "14px", width: "170px" }}
            src={"./logo.174bdfd.png"}
            alt="logo"
          ></img>
        </NavLink>
        {/* //Thanh địa chỉ */}
        <div
      
          data-toggle="modal"
          data-target="#ModalAddress"
        className="open-address-modal"
        >
          <div className="container__panel">
            <div className="container__panel__logo">
              <img
                // style={{height:'40px'}}
                src={"./Delivery2.png"}
                alt="logo"
              ></img>
            </div>
            <div className="container__panel__content">
              <span className="font-weight-bold">Giao Hàng</span>
              <span data-toggle="tooltip" data-placement="bottom" title={!address ? "Nhập địa chỉ giao hàng" : address}>Tại: {!address ? "Nhập địa chỉ giao hàng" : address.length > 20 ? address.slice(0, 22) + "..." : address}</span>
            </div>
          </div>
        </div>

        <div
          className="collapse navbar-collapse pl-5 "
          id="navbarSupportedContent"
        >
          <ul style={{ fontWeight: "600" }} className="navbar-nav mr-auto ">
            <li className="nav-item  pl-2 ">
              <NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
              } className="nav-link text-white " to="/list-product">
                Đặt hàng
              </NavLink>
            </li>
            <li className="nav-item pl-2">
              <NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
              } className="nav-link text-white" to="/news">
                Tin tức
              </NavLink>
            </li>
            <li className="nav-item pl-2">
              <NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
              } className="nav-link text-white" to="/store">
                Cửa hàng
              </NavLink>
            </li>
            <li className="nav-item pl-2 ">
              <a className="nav-link text-white" href="#">
                Khuyến mãi
              </a>
            </li>
            <li className="nav-item pl-2 ">
              <a className="nav-link text-white" target="_blank" href="https://hr.thecoffeehouse.com/">
                Tuyển dụng
              </a>
            </li>
          </ul>
        </div>
        <div
          className="collapse navbar-collapse pl-5 "
          id="navbarSupportedContent"
        >
          <CartContext.Consumer>
            {({ quantity }) =>
              <ul className="navbar-nav mr-auto ">
                {checkToken()}

                <li className="nav-item ">

                  <NavLink
                    style={{ paddingLeft: "0px" }}
                    className="nav-link text-white  "
                    to={quantity > 0 ? "/checkout" : "/list-product"}
                  >
                    <img
                      style={{ width: "72px", height: "65px" }}
                      src={"./Carticon.373916c.png"}
                      alt="shopping"
                    ></img>

                    <div style={styleOfShoppingcart} class={quantity > 0 ? 'd-flex justify-content-center' : 'justify-content-center'}>
                      <span>{quantity}</span>

                    </div>
                  </NavLink>

                </li>

              </ul>
            }
          </CartContext.Consumer>
        </div>
      </nav>
      {/* ModalLogin */}
      <ModalLogin />
      <ModalDelivery changeAddress={setAddress} />

      {/* Modal */}

    </div>

  )
}

