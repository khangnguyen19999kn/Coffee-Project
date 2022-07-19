import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import { connect } from 'react-redux'
import { Modal, Button } from 'antd';
import $ from 'jquery';
import { CartContext } from '../Context/_Context/CartContext';

function ModalOrder({ item, index, styleMiniusQuantity, changeQuantity, quantity }) {

    const initialValues = {
        id: item.id,
        name: item.name,
        note: '',
        size_product: 'small'
    }
    const [totalPrice, setTotalPrice] = useState(0);
    // let totalPrice = parseInt((item.price.split('đ').join(''))) * quantity;
    let resultPrice = (totalPrice === 0 ? parseInt(item.price):totalPrice ) * quantity;
    const selectSize = (size) => {



        if (size === 'big') {

            let newPrice = parseInt(item.price) + 10000;
            setTotalPrice(newPrice)


        }
        else if (size === 'medium') {

            let newPrice = parseInt(item.price) + 6000;
            setTotalPrice(newPrice)

        }
        else setTotalPrice(parseInt(item.price))
        

    }


    const { register, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: initialValues
    });

    const countDown = () => {
        let secondsToGo = 4;
        const modal = Modal.success({
            title: 'Bạn đã đặt hàng thành công',
            content: `Chúng tôi sẽ liên hệ với bạn sớm nhất có thể`,
        });
        const timer = setInterval(() => {
            secondsToGo -= 1;

        }, 1000);
        setTimeout(() => {
            clearInterval(timer);
            modal.destroy();
        }, secondsToGo * 1000);
    }

    const onSubmitForm = (data) => {
        let infoOrder = { ...initialValues, ...data, quantity,resultPrice }
     
        let arrayOfLocal = JSON.parse(localStorage.getItem(`productOrder`)) || [];
        

        if (arrayOfLocal.length > 0) {
            //update số lượng nếu trùng 
          
            const checkExist = arrayOfLocal.find(item => item.id === data.id && item.size_product === data.size_product && item.note === data.note)

            if (checkExist) {
                checkExist.quantity += quantity;
            } else {
                arrayOfLocal = [...arrayOfLocal, infoOrder]
            }
        }
        else {
            arrayOfLocal = [infoOrder]
        }

        localStorage.setItem(`productOrder`, JSON.stringify(arrayOfLocal))

        hideModal('#exampleAddPro' + index);
        countDown();
        
    }

    // if (ArrayOfLocal.length > 1) {
    //     for (let i = 0; i < ArrayOfLocal.length; i++) {
    //         if (i === ArrayOfLocal.length - 1) {
    //             ArrayOfLocal[i] = JSON.parse(ArrayOfLocal[i])
    //         }
    //         else {
    //             ArrayOfLocal[i] += "}";
    //             ArrayOfLocal[i] = JSON.parse(ArrayOfLocal[i])
    //         }
    //     }

    // } 
    // else ArrayOfLocal[0] = JSON.parse(ArrayOfLocal[0])
    // if (ArrayOfLocal.find(element => element.id === infoOrder.id && element.size_product === infoOrder.size_product && element.note === infoOrder.note)) {
    //     for (let order of ArrayOfLocal) {
    //         if (order.id === infoOrder.id && order.size_product === infoOrder.size_product && order.note === infoOrder.note) {
    //             order.quantity = order.quantity + infoOrder.quantity

    //             localStorage.setItem(`productOrder`, (JSON.stringify(ArrayOfLocal).split('[').join('').split(']').join('')))
    //         }

    //     }

    // } else localStorage.setItem(`productOrder`, localStorage.getItem(`productOrder`) + "," + JSON.stringify(infoOrder))

    const hideModal = (modalname) => {
        window.$(modalname).modal("hide");
    };



    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <div class="modal fade" id={"exampleAddPro" + index} tabindex="-1" role="dialog" aria-labelledby="ModalCenterProduct" aria-hidden="true">
                <div style={{ paddingLeft: '4%' }} class="modal-dialog modal-dialog-centered" role="document">
                    <div style={{
                        minHeight: '580px',
                        maxWidth: '410px', borderRadius: '0.6rem'
                    }} class="modal-content">
                        <div class="modal-header">
                            <h6 className="product_modal_tittle" >Thêm món mới</h6>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="container">
                                <div style={{ paddingBottom: '20px' }} className="row">
                                    <div style={{ paddingLeft: '0px' }} className='col-4'>
                                        <img alt="" src={item.img} className="product_modal_img"></img>
                                    </div>
                                    <div style={{ paddingLeft: '30px' }} className="col-8">
                                        <div className="product_modal_info">
                                            <span className="product_modal_info_name">
                                                {item.name}
                                            </span>
                                            <p className="product_modal_info_content">
                                                {item.introduce}
                                            </p>
                                            <div className="product_modal_info_footer">
                                                <span className="product_modal_info_footer_price">
                                                    {item.price}
                                                </span>
                                                <div className="product_modal_info_footer_quantity d-flex justify-content-center">
                                                    <div style={styleMiniusQuantity} onClick={() => changeQuantity("minus")} className="product_modal_info_footer_quantity_minius d-flex justify-content-center">
                                                        <i style={{ color: 'white' }} class="fas fa-minus mt-2"></i>
                                                    </div>
                                                    <span style={{ padding: '5px 16px' }}>{quantity}</span>
                                                    <div onClick={() => changeQuantity("plus")} className="product_modal_info_footer_quantity_plus d-flex justify-content-center ">
                                                        <i style={{ color: 'white' }} class="fas fa-plus mt-2 "></i>

                                                    </div>

                                                </div>



                                            </div>

                                        </div>
                                    </div>

                                </div>





                            </div>
                            <section className="card-product-note">
                                <div className="modal_card-product-note-item">
                                    <img alt="" src="./imgNote.png" className="modal_card-product-img" ></img>
                                    <Controller
                                        name="note"
                                        control={control}
                                        render={({ field }) => <input {...field} placeholder="Ghi chú thêm cho món này" className="modal_card-product-text" />}
                                    />
                                </div>
                            </section>
                            <section className="card-product-size">
                                <div class="card-product-option">
                                    <span class="card-product-option-text">CHỌN SIZE (BẮT BUỘC)</span>
                                </div>
                                <div className="container">
                                    <div className="row size-product-row">
                                        <div style={{ paddingLeft: '12px' }} className="col-4 mt-3">
                                            <div className=" custom-control card-product-option-item custom-radio mb-0">
                                                <input onClick={() => { selectSize('small') }} type="radio"  {...register("size_product")} value="small" name="size_product" id={`Nhỏ-${index}`} className="custom-control-input" />
                                                <label htmlFor={`Nhỏ-${index}`} className="custom-control-label card-product-option-label  tch-custom-radio">
                                                    <div className="card-product-option-value">
                                                        <span className="text card-product-option-size">Nhỏ</span>
                                                        <p>+0đ</p>
                                                    </div>
                                                </label>
                                            </div>


                                        </div>
                                        <div style={{ paddingLeft: '12px' }} className="col-4 mt-3">
                                            <div className=" custom-control card-product-option-item custom-radio mb-0">
                                                <input onClick={() => { selectSize('medium') }} type="radio"  {...register("size_product")} value="normal" name="size_product" id={`Vừa-${index}`} className="custom-control-input"
                                                // onChange={onChange}
                                                />
                                                <label htmlFor={`Vừa-${index}`} className="custom-control-label card-product-option-label  tch-custom-radio">
                                                    <div className="card-product-option-value">
                                                        <span className="text card-product-option-size">Vừa</span>
                                                        <p >+6.000đ</p>
                                                    </div>
                                                </label>
                                            </div>


                                        </div>
                                        <div style={{ paddingLeft: '12px' }} className="col-4 mt-3">
                                            <div className=" custom-control card-product-option-item custom-radio mb-0">
                                                <input onClick={() => { selectSize('big') }} type="radio" {...register("size_product")} value="big" name="size_product" id={`Lon-${index}`} className="custom-control-input" />
                                                <label htmlFor={`Lon-${index}`} className="custom-control-label card-product-option-label  tch-custom-radio">
                                                    <div className="card-product-option-value">
                                                        <span className="text card-product-option-size">Lớn</span>
                                                        <p >+10.000đ</p>
                                                    </div>
                                                </label>
                                            </div>


                                        </div>


                                    </div>
                                </div>

                            </section>

                        </div>
                        <div class="modal-footer">
                            <CartContext.Consumer>
                                {({ addToCart }) =>
                                    <button type="submit" class="btn_modal_add"
                                        onClick={() => addToCart(quantity)}
                                    >
                                        {(totalPrice === 0 ? parseInt(item.price):totalPrice ) * quantity}đ -Thêm vào giỏ hàng
                                    </button>}
                            </CartContext.Consumer>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}




export default ModalOrder
