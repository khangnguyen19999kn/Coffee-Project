import React, { Component, useState } from "react";
import "./styles.scss";
import "@fortawesome/fontawesome-free/js/all.js";
import AlgoliaPlaces from "algolia-places-react";
import ModalLogin from "./ModalLogin";
import ModalDelivery from "./ModalDelivery";
import CartOrder from "./CartOrder";
import { CartContext } from "../Context/_Context/CartContext";
import {NavLink} from 'react-router-dom'



export default function Header() {
  let addressLocal = localStorage.getItem('address');
  const [address, setAddress] = useState(!addressLocal ? "" : addressLocal)

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
    <div style={{marginBottom:'55px'}}>




      {/* <img src={'./coffee-house-logo-CED27E67C8-seeklogo.com.png'} className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="kkj" /> */}
      <nav
        style={{ background: "#fda22f" }}
        className="navbar fixed-top navbar-expand-lg navbar-light   text-secondary"
      >
        <NavLink
          style={{ paddingLeft: "140px" }}
          className="navbar-brand text-secondary "
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
          style={{
            width: "268px",
            borderRadius: "30px",
            background: "rgba(238,139,29,1)",
            marginLeft: "40px",
          }}
          data-toggle="modal"
          data-target="#ModalAddress"
        // className="container"
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
            }className="nav-link text-white" to="/store">
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
          <ul className="navbar-nav mr-auto ">
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

            <li className="nav-item ">
            <CartContext.Consumer>
                    {({ quantity }) => 
              <NavLink
                style={{ paddingLeft: "0px" }}
                className="nav-link text-white  "
                to={quantity>0?"/checkout":"/list-product"}
              >
                <img
                  style={{ width: "72px", height: "65px" }}
                  src={"./Carticon.373916c.png"}
                  alt="shopping"
                ></img>
               
                <div style={styleOfShoppingcart} class={quantity>0?'d-flex justify-content-center':'justify-content-center'}>
                      <span>{quantity}</span> 

                </div>
              </NavLink>}
              </CartContext.Consumer>

            </li>

          </ul>
        </div>
      </nav>
      {/* ModalLogin */}
      <ModalLogin />
      <ModalDelivery changeAddress={setAddress} />

      {/* Modal */}

    </div>

  )
}

