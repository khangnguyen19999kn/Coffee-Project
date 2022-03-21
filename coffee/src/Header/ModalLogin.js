import React, { Component, useState } from 'react'

import { useForm, Controller } from "react-hook-form";
import { Modal, Button } from 'antd';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'

import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { InputField } from '../FormFields/InputField';

const schema = yup.object().shape({
  fullname: yup.string().required("Full name is required!"),
  phone: yup.string().required("Phone is required!"),

}).required();


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


  const countDown = () => {
    // let secondsToGo = 4;
    // const modal = Modal.success({
    //   title: 'Bạn đã đăng ký thành công !!!',

    // });
    // const timer = setInterval(() => {
    //   secondsToGo -= 1;

    // }, 1000);
    // setTimeout(() => {
    //   clearInterval(timer);
    //   modal.destroy();
    // }, secondsToGo * 1000);
    Swal.fire({
      title: 'Đăng ký thành công ',

      icon: 'success',

    })
  }
  const whenSubmit = () => {
    setIsModalVisible(false)
  }
  // const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(schema) });
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    // defaultValues: initialValues,
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    console.log(data);
    whenSubmit();
    countDown();

  };


  return (
    <div>
      <div>
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
                    <input type="text" pattern="/[0-9]{10}/" placeholder="Nhập số điện thoại" autofocus="autofocus" class="phone-input"></input>
                  </div>

                  <div className="Modal_Body_cover-input_password d-flex align-items-center">
                    <div className="Modal_Body_region-code_password">
                      <i style={{ width: '1.875em', color: 'rgb(65 63 63 / 85%)' }} class="fas fa-key fa-2x"></i>
                    </div>
                    <input type="text" placeholder="Nhập PassWord" autofocus="autofocus" class="phone-input"></input>
                  </div>



                </div>
              </div>
              <div className="modal-footer">
                <div style={{ width: '100%' }} className="modal-footer d-flex justify-content-center">
                  <div style={{ width: '100%' }} class="d-flex flex-column ">
                    <div class="Modal_footer_register" onClick={() => { hideModal("#ModalLogin"); showModal() }} >
                      <a>Đăng ký</a>
                    </div>



                    <button type="button" className="Modal_footer_btn_Login">Đăng nhập</button>




                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* Modal Register */}
        <Modal title="Đăng ký" footer={null} onCancel={handleCancel} visible={isModalVisible} >
          <div className="container">

            <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal" >

              <div className="form-group">

                <div className="col-sm-12">
                  <InputField control={control} name="fullname" label="Họ và tên" />
                </div>
              </div>
              <div className="form-group">

                <div className="col-sm-12">
                  <InputField  style={{ minWidth: '100%' }} control={control} name="phone" label="Số điện thoại" />
                </div>
              </div>
              <div className="form-group">

                <div className="col-sm-12">
                <InputField  style={{ minWidth: '100%' }} type="password" control={control} name="password" label="Mật khẩu" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="birthDate" className="col-sm-4 control-label">Date of Birth</label>
                <div className="col-sm-8">
                  <input name="birthDay" {...register("birthDay")} type="date" id="birthDate" className="form-control" />
                </div>
              </div>
              {/* /.form-group */}
              <hr />


              <div className="form-group">
                <div className="col-sm-12 mt-3">
                  <button type="submit" className="btn btn-success mt-2 btn-block">Đăng ký</button>
                </div>
              </div>
            </form> {/* /form */}
          </div> {/* ./container */}

        </Modal>
      </div>
    </div>
  )
}




