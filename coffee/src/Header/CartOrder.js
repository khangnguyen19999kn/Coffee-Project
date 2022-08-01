import React, { useState } from 'react'
import { InputField } from '../FormFields/InputField';
import { useForm, Controller } from "react-hook-form";
import { CartContext } from "../Context/_Context/CartContext";
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Axios from 'axios'



export default function CartOrder() {
    const schema = yup.object().shape({
        fullname: yup.string().required("Full name is required!"),
        phone: yup.string().required("Phone is required!"),
      
      }).required();

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
        // defaultValues: initialValues,

    });
    const listOrder1 = JSON.parse(localStorage.getItem('productOrder')) || [];
    const [listOrder, setListOrder] = useState(listOrder1);
    let navigate = useNavigate();



    const moveItem = (index) => {


        let list = listOrder;
        console.log(list)
        console.log(list.length)
        if (list.length === 1) {

            navigate('/list-product', { replace: true });

        }

        list.splice(index, 1);
        localStorage.setItem('productOrder', JSON.stringify(list));
        setListOrder(JSON.parse(localStorage.getItem('productOrder')))




    }


    const moveAll = async () => {
        localStorage.removeItem('productOrder')
        await setListOrder([]);
        navigate('/list-product', { replace: true });


    }
    const totalBill = (listOrder) => {
        let totalMoney = listOrder.reduce((order1, order2) => {
            return order1 + order2.resultPrice

        }, 0)
        return totalMoney
    }
    const order = () => {
        console.log(JSON.stringify(listOrder))
        console.log(localStorage.getItem('address'))

        // const bill ={...}
    }
    const onSubmit = data =>{
        const address =localStorage.getItem('address');
       
        const infoOrder = {...data,address,listOrder};
        Axios({
            url: 'https://api-coffee-phen.herokuapp.com/api/v1/cart',
            method: 'POST',
            data: { ...infoOrder}
            
      
          }).catch((err) => {
            console.log(err);
           
      
          }).then((res) => {
            console.log(res.data)
            if(res.data){
                navigate('/list-product', { replace: true });
                moveAll()

            }
           
      
      
      
          });

        
      
    }
 



    const listItem = listOrder.map((item, index) => {

        return (
            <div style={{ marginTop: '10px' }} className="tch-order-card d-flex align-items-center justify-content-between">
                <div className="tch-order-card__left d-flex">
                    <span className="tch-order-card__icon d-flex align-items-center">
                        <i aria-hidden="true" className="fa fa-pen" />
                    </span>
                    <div className="tch-order-card__content">
                        <h5 className="tch-order-card__title mb-0">{`${item.quantity} x ${item.name} `}</h5>
                        <p className="tch-order-card__description mb-0">
                            {`${item.size_product}, ${item.quantity}  x ${item.size_product}`}
                        </p>
                        <p style={item.note === "" ? { display: 'none' } : {}}>Note:{item.note}</p>
                        <CartContext.Consumer>
                            {({ DeleteInCart }) =>

                                <p onClick={() => { moveItem(index); DeleteInCart(listOrder) }} className="tch-order-delete-item">Xóa{index}</p>

                            }

                        </CartContext.Consumer>

                    </div>
                </div>
                <div className="tch-order-card__right">
                    <p className="tch-order-card__price mb-0">{item.resultPrice.toLocaleString()}đ</p>
                </div>
            </div>
        )
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <div className='container-lg container-fluid  cart_order_all'>
                <div className='d-flex justify-content-center title_cart_order'>
                    <h4><i style={{ color: '#fa8c16' }} className='fas fa-file'></i>&nbsp;&nbsp;Xác nhận đơn hàng</h4>
                </div>

                <div className='row  justify-content-center mt-5 mb-5'>
                    <div className='col-12'>
                        <div class="d-flex flex-row">
                            {/* //Phần 1 */}
                            <div className='cart_part-1'>
                                <h5 class="cart_checkout-box__title">Giao hàng</h5>
                                <div className='d-flex flex-rowalign-items-start cart_order_address'>
                                    <div className='cart_order_address_img'>
                                        <img style={{ width: '40px' }} src={"./Delivery2.png"}></img>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-start cart_order_address_content' data-toggle="modal" data-target="#ModalAddress">
                                        <CartContext.Consumer>
                                            {({ address }) => <p>{address}</p>}
                                        </CartContext.Consumer>
                                        <span class="icon mt-2 ml-2"><i class="fa fa-chevron-right fa-lg"></i></span>
                                    </div>
                                </div>
                                <div className='d-flex flex-rowalign-items-start cart_order_time'>
                                    <div className='d-flex justify-content-between align-items-start cart_order_time_content'>
                                        <div>
                                            <h6>Nhận hàng trong ngày khoảng 15-30 phút</h6>
                                            <span>Vào lúc: càng sớm càng tốt</span>
                                        </div>

                                    </div>
                                </div>
                                
                                    <div className='cart_order_input_info'>
                                        <div className='cart_order_input_info_fullname'>
                                            <InputField inputProps={"123"} onChange={(e)=>{console.log(e.target.value)}} control={control} name="fullname" label="Họ và tên" />
                                        </div>
                                        <div className='cart_order_input_info_phoneNumber'>
                                            <InputField control={control} name="phone" label="Số điện thoại" />
                                        </div>
                                        <div className='cart_order_input_info_note'>
                                            <InputField control={control} name="HuongDan" label="Thêm hướng dẫn giao hàng" />

                                        </div>
                                    </div>

                          

                                <h5 class="cart_checkout-box__delivery">Phương thức thanh toán</h5>
                                <section>
                                    <div style={{ alignItems: 'start' }} class="d-flex flex-column justify-content-start">
                                        <div class="p-2 cart_pay money">
                                            <div className=" custom-control card-product-option-item custom-radio mb-0">
                                                <input type="radio" value="money" id={'Money'} name="pay_order_money" className="custom-control-input" />
                                                <label htmlFor={`Money`} className="custom-control-label card-cart-option-label  tch-custom-radio">
                                                    <div className="card-cart-option-value">
                                                        <span className="text card-cart-option-money">
                                                            <img style={{ height: '24px' }} src="https://minio.thecoffeehouse.com/image/tchmobileapp/1000_photo_2021-04-06_11-17-08.jpg" alt />
                                                        </span>
                                                        <span>&nbsp;Tiền mặt</span>
                                                    </div>
                                                </label>

                                            </div>
                                        </div>
                                        <div class="p-2 cart_pay momo">
                                            <div className=" custom-control card-product-option-item custom-radio mb-0">
                                                <input type="radio" value="momo" id={'momo'} name="pay_order_momo" className="custom-control-input" />
                                                <label htmlFor={`momo`} className="custom-control-label card-cart-option-label  tch-custom-radio">
                                                    <div className="card-cart-option-value">
                                                        <span className="text card-cart-option-money">
                                                            <img style={{ height: '24px' }} src="https://minio.thecoffeehouse.com/image/tchmobileapp/386_ic_momo@3x.png" alt />
                                                        </span>
                                                        <span>&nbsp;Momo</span>
                                                    </div>
                                                </label>

                                            </div>
                                        </div>
                                        <div class="p-2 cart_pay zalopay">
                                            <div className=" custom-control card-product-option-item custom-radio mb-0">
                                                <input type="radio" value="zaloPay" id={'zaloPay'} name="pay_order_zalopay" className="custom-control-input" />
                                                <label htmlFor={`zaloPay`} className="custom-control-label card-cart-option-label  tch-custom-radio">
                                                    <div className="card-cart-option-value">
                                                        <span className="text card-cart-option-money">
                                                            <img style={{ height: '24px' }} src="https://minio.thecoffeehouse.com/image/tchmobileapp/388_ic_zalo@3x.png" alt />
                                                        </span>
                                                        <span>&nbsp;ZaloPay</span>
                                                    </div>
                                                </label>

                                            </div>
                                        </div>
                                        <div className="policy">
                                            <label className="checkbox-button">
                                                <input defaultChecked="checked" disabled="disabled" type="checkbox" id="choice1-1" name="choice1" className="checkbox-button__input" />
                                                <span className="checkbox-button__control" />
                                                <span className="checkbox-button__label">Đồng ý với các <a href="https://order.thecoffeehouse.com/terms" target="_blank" className="policy-link">điều khoản và điều kiện</a> mua hàng của The Coffee House</span>
                                            </label>
                                        </div>


                                    </div>
                                </section>
                            </div>
                            <div style={{ width: '35%' }}>
                                <div className='cart_part-2'>
                                    <div class="d-flex flex-row">
                                        <h5 class="cart_checkout-box__choise">Các món đã chọn</h5>
                                        <div style={{ textDecoration: 'none', color: 'black', width: '44%' }}>

                                            <NavLink to="/list-product" >
                                                <p class="tch-checkout-box__btn-outline">Thêm món</p>
                                            </NavLink>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column cart_part-2_item_order">
                                        {/* Item order here!!! */}
                                        {/* {checkListOrder()} */}
                                        {listItem}
                                        {/* <div style={{ marginTop: '10px' }} className="tch-order-card d-flex align-items-center justify-content-between">
                                            <div className="tch-order-card__left d-flex">
                                                <span className="tch-order-card__icon d-flex align-items-center">
                                                    <i aria-hidden="true" className="fa fa-pen" />
                                                </span>
                                                <div className="tch-order-card__content">
                                                    <h5 className="tch-order-card__title mb-0">5 x Cà Phê Sữa Đá Chai Fresh 250ML</h5>
                                                    <p className="tch-order-card__description mb-0">
                                                        Vừa, 5 x Vừa
                                                    </p> 
                                                     <p className="tch-order-delete-item">Xóa</p>
                                                </div>
                                            </div>
                                            <div className="tch-order-card__right">
                                                <p className="tch-order-card__price mb-0">395.000đ</p>
                                            </div>
                                        </div> */}

                                        {/* End item order */}
                                        <div className='cart_part-2_total'>
                                            <h5 class="cart_checkout-box__total">Tổng cộng</h5>
                                        </div>
                                        <div className="tch-order-card tch-order-card--border d-flex align-items-center justify-content-between">
                                            <div className="tch-order-card__left d-flex">
                                                <p className="tch-order-card__text mb-0">Thành tiền</p>
                                            </div>
                                            <div className="tch-order-card__right">
                                                <p className="tch-order-card__price mb-0">{totalBill(listOrder).toLocaleString()} đ</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* button đặt hàng hereeee */}
                                <div className="tch-checkout-box tch-checkout-box--list-submited d-flex justify-content-between position-static w-100">
                                    <div >
                                        <p className="tch-order-card__text text-white mb-0">Thành tiền</p>
                                        <p className="tch-order-card__text text-white f-600 mb-0">{totalBill(listOrder).toLocaleString()} đ</p>
                                    </div>
                                    <button type="submit"   className="btn_order">
                                        Đặt hàng
                                    </button>
                                </div>
                               
                                {/* button xóa giỏ hàng */}
                                <CartContext.Consumer>
                                    {({ DeleteInCart }) =>
                                        <NavLink to="/list-product">
                                            <div onClick={() => { moveAll(); DeleteInCart([]) }} className="tch-checkout-box tch-checkout-box--remove-card mt-4">
                                                <p className="tch-checkout-box__text text-center mb-0">
                                                    <span className="icon mr-2">
                                                        <i aria-hidden="true" className="fa fa-trash">
                                                        </i>
                                                    </span>
                                                    <span >Xóa đơn hàng</span>
                                                </p>
                                            </div>
                                        </NavLink>}
                                </CartContext.Consumer>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
        </form>
    )
}
