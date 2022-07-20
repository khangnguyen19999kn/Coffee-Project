
import React, { Component, useState, useEffect } from 'react'

import { useForm, Controller } from "react-hook-form";
import { Modal, Button } from 'antd';

import Swal from 'sweetalert2'
import Axios from 'axios'

import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { InputField } from '../FormFields/InputField';
import _  from 'lodash';
import { isValidPhoneNumber } from 'react-phone-number-input'

const phoneRegExp="[0-9]{10}";
const schema = yup.object().shape({
    fullname: yup.string().required("Full name is required!"),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Phone is required!"),
    address: yup.string().required("Address is required!"),
  
  }).required();

export default function ModalRegister({isModalVisible,showModal,handleCancel,whenSubmit}) {

      const { register,setError, handleSubmit, control, formState: { errors } } = useForm({
        // defaultValues: initialValues,
        mode: 'all',
        resolver: yupResolver(schema),
        
    
      });
      const countDown = () => {

        Swal.fire({
          title: 'Đăng ký thành công ',
    
          icon: 'success',
    
        })
      }
      const onSubmit = data => {
        let infoUser = { ...infor, ...data }
        setInfor({
          ...infor, ...data
    
        })
        
        let promise = Axios({
          url: 'https://coffeepha.ml/api/v1/users/register',
          method: 'POST',
          data: { ...infoUser, name: infoUser.fullname, phoneNumber: infoUser.phone,level:"Client" }
    
        });
        promise.catch((err) => {
          console.log(err);
    
        })
        promise.then((result) => {
          console.log(result.data)
    
    
    
        });
    
    
        whenSubmit();
        countDown();
    
      };
      const handleBlur = (e) => {
       
        Axios({
          url: 'https://coffeepha.ml/api/v1/users/checkPhone',
          method: 'POST',
          data: { phoneNumber: e.target.value }
    
        }).then((res) => {
          const { data } = res;
          if(data){
            setError("phone",{ type: 'custom', message: 'Số diện thoại đã được đăng ký!!!' });
          }
          
        });
      }
    
      const [infor, setInfor] = useState({ fullname: "", phone: "", address: "", password: "", birthDay: "" })
      
  
  return (
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
            <InputField style={{ minWidth: '100%' }}  onBlur={handleBlur} control={control} name="phone" label="Số điện thoại" />
          </div>
        </div>
        <div className="form-group">

          <div className="col-sm-12">
            <InputField  style={{ minWidth: '100%' }} control={control} rules={{validate: (value) => isValidPhoneNumber(value)}}  name="address" label="Địa chỉ" />
          </div>
        </div>
        <div className="form-group">

          <div className="col-sm-12">
            <InputField style={{ minWidth: '100%' }} type="password" control={control} name="password" label="Mật khẩu" />
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
            <button type="submit" disabled={!_.isEmpty(errors)}  className="btn btn-success mt-2 btn-block">Đăng ký</button>
          </div>
        </div>
      </form> {/* /form */}
    </div> {/* ./container */}

  </Modal>
  )
}
