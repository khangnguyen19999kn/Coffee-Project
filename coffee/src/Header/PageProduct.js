import React, { useEffect, useContext, useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import { useParams } from 'react-router-dom'
import { PageProductContext } from '../Context/_Context/PageProductContext';
import { CartContext } from '../Context/_Context/CartContext';
import Axios from 'axios'
import { Modal, Button } from 'antd';
// import { post } from 'jquery';

export default function PageProduct(props) {
    const { id } = useParams()

  
    const [posts, setPosts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [img,setImg] = useState("")


    // const onSubmit = data => {
    //     console.log(data);

    // };
    
   
    useEffect(() => {
        let promise = Axios({
            url: `https://api-coffee-phen.herokuapp.com/api/v1/product/${id}`,

            method: 'GET',

        });
        promise.catch((err) => {
            console.log(err);
            console.log('Lấy dữ liệu thất bại')
        })
        promise.then((result) => {
            console.log('Lấy dữ liệu thành công')
            setImg(result.data.img.slice(1))
            

           


            setPosts(result.data);



        });



    }, []);
   
    const value = useContext(PageProductContext);
    let quantity = value.quantity;
    let resultPrice = (totalPrice === 0 ? parseInt(posts.price):totalPrice ) * value.quantity;
    const initialValues = {
        id: posts.id,
        name: posts.name,
        note: '',
        size_product: 'small'
    }
    // console.log(initialValues)
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            note: '',
            size_product: 'small'
        }
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
        let infoOrder = { ...initialValues,...data, quantity,resultPrice }
        console.log(infoOrder);
        console.log(data)
      
        let arrayOfLocal = JSON.parse(localStorage.getItem(`productOrder`)) || [];
        

        if (arrayOfLocal.length > 0) {
            //update số lượng nếu trùng 
          
            const checkExist = arrayOfLocal.find(item => item.id === infoOrder.id && item.size_product === infoOrder.size_product && item.note === infoOrder.note)

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

        
        countDown();
        
    }
 









    const selectSize = (size) => {



        if (size === 'big') {

            let newPrice = parseInt(posts.price) + 10000;
            setTotalPrice(newPrice)


        }
        else if (size === 'medium') {

            let newPrice = parseInt(posts.price) + 6000;
            setTotalPrice(newPrice)

        }
        else setTotalPrice(parseInt(posts.price))
        

    }

    return (
        <div>
            <PageProductContext.Consumer>
                {({ styleMiniusQuantity, changeQuantity, quantity }) =>
                    <form style={{ marginTop: '8rem', marginBottom: '4rem' }} onSubmit={handleSubmit(onSubmitForm)}>
                        <div style={{ maxWidth: '56.25rem', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: '12px' }} className="container ">
                            <div style={{ padding: '20px 15px' }} className="row">
                                <div className="col-5">
                                    {/* <img src={posts.img} className="Product_page_big_img" alt="">

                                    </img> */}
                                    <img alt="" className="Product_page_big_img" src={window.location.origin+img} />
                                    <p className="Product_page_content">{posts.introduce}</p>
                                </div>
                                <div className="col-7">
                                    <h2>{posts.name}</h2>
                                    <div className="product_page_price_quantity">
                                        <span className="product_page_price">
                                            {posts.price}
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
                                    <section className="card-product-note mt-4">
                                        <div className="page_card-product-note-item">
                                            <img alt="" src="./imgNote.png" className="modal_card-product-img" />
                                            <Controller
                                                name="note"
                                                control={control}
                                                render={({ field }) => <input {...field} placeholder="Ghi chú thêm cho món này" className="page_card-product-text" />}
                                            />
                                        </div>
                                    </section>
                                    <section className="card-product-size">
                                        <div class="page_card-product-option">
                                            <span class="card-product-option-text">CHỌN SIZE (BẮT BUỘC)</span>
                                        </div>
                                        <div className="container">
                                            <div className="row">
                                                <div style={{ paddingLeft: '12px' }} className="col-4 mt-3">
                                                    <div className=" custom-control card-product-option-item custom-radio mb-0">
                                                        <input onClick={() => { selectSize('small') }} type="radio"  {...register("size_product")} value="small" id={`Nhỏ`} className="custom-control-input" />
                                                        <label htmlFor={`Nhỏ`} className="custom-control-label card-product-option-label  tch-custom-radio">
                                                            <div className="card-product-option-value">
                                                                <span className="text card-product-option-size">Nhỏ</span>
                                                                <p>+ 0đ</p>
                                                            </div>
                                                        </label>
                                                    </div>


                                                </div>
                                                <div style={{ paddingLeft: '12px' }} className="col-4 mt-3">
                                                    <div className=" custom-control card-product-option-item custom-radio mb-0">
                                                        <input onClick={() => { selectSize('medium') }} type="radio"  {...register("size_product")} value="normal" name="size_product" id={`Vừa`} className="custom-control-input"
                                                        // onChange={onChange}
                                                        />
                                                        <label htmlFor={`Vừa`} className="custom-control-label card-product-option-label  tch-custom-radio">
                                                            <div className="card-product-option-value">
                                                                <span className="text card-product-option-size">Vừa</span>
                                                                <p >+ 6.000đ</p>
                                                            </div>
                                                        </label>
                                                    </div>


                                                </div>
                                                <div style={{ paddingLeft: '12px' }} className="col-4 mt-3">
                                                    <div className=" custom-control card-product-option-item custom-radio mb-0">
                                                        <input onClick={() => { selectSize('big') }} type="radio" {...register("size_product")} value="big" name="size_product" id={`Lớn`} className="custom-control-input" />
                                                        <label htmlFor={`Lớn`} className="custom-control-label card-product-option-label  tch-custom-radio">
                                                            <div className="card-product-option-value">
                                                                <span className="text card-product-option-size">Lớn</span>
                                                                <p >+ 10.000đ</p>
                                                            </div>
                                                        </label>
                                                    </div>


                                                </div>


                                            </div>
                                        </div>

                                    </section>
                                    <CartContext.Consumer>
                                        {({ addToCart }) =>
                                    <button type="submit" class="btn_page_add"  onClick={() => addToCart(quantity)} >
                                        {resultPrice.toLocaleString()}đ -Thêm vào giỏ hàng 
                                        </button>
                                }
                                     </CartContext.Consumer>
                                </div>
                            </div>
                        </div>
                    </form>
                }

            </PageProductContext.Consumer>

        </div>
    )
}
