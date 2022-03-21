import React from 'react'
import { useForm, Controller } from "react-hook-form";
import {useParams} from 'react-router-dom'

export default function PageProduct(props,{ item, index, styleMiniusQuantity, changeQuantity, quantity }) {
    const { id } = useParams()
    const testPrice =590000000;
    const { register, handleSubmit,control, setError, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    
  };
    return (
        <div>
            <form style={{marginTop:'8rem',marginBottom:'4rem'}} onSubmit={handleSubmit(onSubmit)}>
            <div style={{maxWidth:'56.25rem',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'12px'}} className="container ">
                <div style={{padding:'20px 15px'}} className="row">
                    <div className="col-5">
                        <img src="./ProductPic/bacsiu-moi_532206_400x400.jpg" className="Product_page_big_img" alt=""></img>
                        <p className="Product_page_content">Sự kết hợp hài hòa giữa trà đen mạnh mẽ, sữa ngọt thơm béo với các gia vị thảo mộc ấm nóng từ Ấn Độ, có thêm trân châu mang đến cho bạn một hương vị trà sữa đặc biệt.</p>
                    </div>
                    <div className="col-7">
                        <h2>Trà Sữa Masala Chai Trân Châu (Đá)</h2>
                        <div className="product_page_price_quantity">
                            <span className="product_page_price">
                               {testPrice.toLocaleString()+'đ'}
                            </span>
                            <div className="product_modal_info_footer_quantity d-flex justify-content-center">
                                <div style={styleMiniusQuantity} onClick={() => changeQuantity("minus")} className="product_modal_info_footer_quantity_minius d-flex justify-content-center">
                                    <i style={{ color: 'white' }} class="fas fa-minus mt-2"></i>
                                </div>
                                <span style={{ padding: '5px 16px' }}>1</span>
                                <div onClick={() => changeQuantity("plus")} className="product_modal_info_footer_quantity_plus d-flex justify-content-center ">
                                    <i style={{ color: 'white' }} class="fas fa-plus mt-2 "></i>

                                </div>

                            </div>
                        </div>
                        <section className="card-product-note mt-4">
                                <div className="page_card-product-note-item">
                                    <img alt="" src="./imgNote.png" className="modal_card-product-img" ></img>
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
                                                <input type="radio"  {...register("size-product")} value="small" id={`Nhỏ-${index}`} className="custom-control-input" />
                                                <label htmlFor={`Nhỏ-${index}`} className="custom-control-label card-product-option-label  tch-custom-radio">
                                                    <div className="card-product-option-value">
                                                        <span className="text card-product-option-size">Nhỏ</span>
                                                        <p>+ 0đ</p>
                                                    </div>
                                                </label>
                                            </div>


                                        </div>
                                        <div style={{ paddingLeft: '12px' }} className="col-4 mt-3">
                                            <div className=" custom-control card-product-option-item custom-radio mb-0">
                                                <input type="radio"  {...register("size-product")} value="normal" name="size-product" id={`Vừa-${index}`} className="custom-control-input"
                                                // onChange={onChange}
                                                />
                                                <label htmlFor={`Vừa-${index}`} className="custom-control-label card-product-option-label  tch-custom-radio">
                                                    <div className="card-product-option-value">
                                                        <span className="text card-product-option-size">Vừa</span>
                                                        <p >+ 6.000đ</p>
                                                    </div>
                                                </label>
                                            </div>


                                        </div>
                                        <div style={{ paddingLeft: '12px' }} className="col-4 mt-3">
                                            <div className=" custom-control card-product-option-item custom-radio mb-0">
                                                <input type="radio" {...register("size-product")} value="big" name="size-product" id={`Lon-${index}`} className="custom-control-input" />
                                                <label htmlFor={`Lon-${index}`} className="custom-control-label card-product-option-label  tch-custom-radio">
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
                            <button type="submit" class="btn_page_add" >đ -Thêm vào giỏ hàng </button>

                    </div>
                </div>
            </div>
            </form>

        </div>
    )
}
