import React, { Component, useState, useEffect } from 'react'

import { useForm, Controller } from "react-hook-form";
import { Modal, Button } from 'antd';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'
import Axios from 'axios'

import * as yup from "yup";
import $ from 'jquery';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputField } from '../FormFields/InputField';
import ModalRegister from './ModalRegister';
import { useCookies } from 'react-cookie';
import { CartContext } from "../Context/_Context/CartContext";




export default function ModalLogin() {
  const hideModal = (modalname) => {
    window.$(modalname).modal("hide");
  };
const [isModalVisible, setIsModalVisible] = useState(false);

const showModal = () => {
  setIsModalVisible(true);
};
const handleCancel = () => {
  setIsModalVisible(false);
};
const whenSubmit = () => {
    setIsModalVisible(false)
  }

  


  // const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(schema) });
  const { register,setError, handleSubmit, control, formState: { errors } } = useForm({
    // defaultValues: initialValues,
    mode: 'all',


  });
  const [cookies, setCookie,removeCookie] = useCookies(['token']);
 
  const onSubmit = (data) =>{
   
    Axios({
      url: 'https://api-coffee-phen.herokuapp.com/api/v1/users/login',
      method: 'POST',
      data: { ...data,level:"Client"}
      

    }).catch((err) => {
      console.log(err);
     

    }).then((res) => {
      
      if(res) {
        console.log("Thành công")
        setCookie('token', res.data.token, { path: '/' });
        // console.log(cookies.token)
        
        hideModal("#ModalLogin")
      }else console.log("Thất bại")



    });
  }



  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="modal fade" id="ModalLogin" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div
            style={{
              minHeight: "calc(90% - (2.5rem * 2))",
              maxWidth: "450px",
            }}
            className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div style={{ padding: '0px' }} className="modal-header">
                <h5 style={{ width: '100%' }} className="modal-title" id="exampleModalLongTitle"><img className='Modal_login_img_top' src="./thumbnail-login-pop-up.e10d0dd.png" alt=""></img></h5>


              </div>
              <div className="modal-body d-flex justify-content-center">
                <div class="d-flex flex-column ">
                  <div className="Modal_Body_Welcome">Chào mừng bạn đến với</div>

                  <img className="Modal_Body_img_logo" src='./ModalLoginLogo.png'></img>
                  <div className="Modal_Body_cover-input_phoneNumber d-flex align-items-center">
                    <div className="Modal_Body_region-code_phoneNumber">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDI0LjM2NTdDMTguNjI3NCAyNC4zNjU3IDI0IDE4Ljk5MzEgMjQgMTIuMzY1N0MyNCA1LjczODMxIDE4LjYyNzQgMC4zNjU3MjMgMTIgMC4zNjU3MjNDNS4zNzI1OCAwLjM2NTcyMyAwIDUuNzM4MzEgMCAxMi4zNjU3QzAgMTguOTkzMSA1LjM3MjU4IDI0LjM2NTcgMTIgMjQuMzY1N1oiIGZpbGw9IiNGNTIyMkQiLz4KPHBhdGggZD0iTTEyLjAwMTYgMTUuMTY1OEwxNS45NjE2IDE3Ljk2NThMMTQuNDgxNiAxMy40MDU4TDE4LjQwMTYgMTAuNDQ1OEgxMy41MjE2TDEyLjAwMTYgNS45NjU4MkwxMC41MjE2IDEwLjQ0NThINS42MDE1Nkw5LjUyMTU2IDEzLjQwNThMOC4wNDE1NiAxNy45NjU4TDEyLjAwMTYgMTUuMTY1OFoiIGZpbGw9IiNGRkU2MkUiLz4KPC9zdmc+Cg==" alt />
                      <span > +84</span>
                    </div>
                    <input type="text" pattern="[0-9]{10}" oninput="0" {...register('phoneNumber')} placeholder="Nhập số điện thoại" autofocus="autofocus" class="phone-input"></input>
                  </div>

                  <div className="Modal_Body_cover-input_password d-flex align-items-center">
                    <div className="Modal_Body_region-code_password">
                      <i style={{ width: '1.875em', color: 'rgb(65 63 63 / 85%)' }} class="fas fa-key fa-2x"></i>
                    </div>
                    <input type="password"{...register('password')} placeholder="Nhập PassWord" autofocus="autofocus" class="phone-input"></input>
                  </div>



                </div>
              </div>
              <div className="modal-footer">
                <div style={{ width: '100%' }} className="modal-footer d-flex justify-content-center">
                  <div style={{ width: '100%' }} class="d-flex flex-column ">
                    <div class="Modal_footer_register" onClick={() => { hideModal("#ModalLogin"); showModal() }} >
                      <a>Đăng ký</a>
                    </div>


                    <CartContext.Consumer>
                    {({ changeToken }) =>
                    <button type="submit" onClick={()=>{changeToken(cookies.token);}} className="Modal_footer_btn_Login">Đăng nhập</button>
                  }
                  </CartContext.Consumer>



                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        </form>

        {/* Modal Register */}
        <ModalRegister isModalVisible={isModalVisible} showModal={showModal} handleCancel={handleCancel} whenSubmit={whenSubmit} />
       
      </div>
    </div>
  )
}




