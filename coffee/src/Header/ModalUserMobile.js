import React from 'react'
import { CartContext } from "../Context/_Context/CartContext";

export default function ModalUserMobile() {
    return (
        <CartContext.Consumer>
            {({ quantity,infoUser }) =>
                <div>

                    <div class="modal fade" id="ModalUserMobile" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">{`Xin chào ${infoUser.name}`}</h5>
                               
                                </div>
                                <div class="modal-body">
                                    <div className='content-body-modal-user-mobile'>

                                <button type="button" class="btn btn-outline-info ">Thông tin tài khoản</button>
                                <button type="button" class="btn btn-outline-info mt-2">Tra cứu đơn hàng</button>
                                <button type="button" class="btn btn-outline-danger mt-2">Đăng xuất</button>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </CartContext.Consumer>
    )
}
