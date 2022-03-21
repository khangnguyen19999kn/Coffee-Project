import React from 'react'
import AlgoliaPlaces from "algolia-places-react";
import { CartContext } from '../Context/_Context/CartContext';

export default function ModalDelivery({ changeAddress }) {
  return (
    <div>

      <div
        className="modal fade"
        id="ModalAddress"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden='true'
      >
        <div
          style={{
            minHeight: "calc(55% - (1.75rem * 2))",
            maxWidth: "700px",
          }}
          className="modal-dialog modal-dialog-centered"
          role="document"
        >
          <div style={{ borderRadius: "1.3rem" }} className="modal-content">
            <div
              style={{ minHeight: "40px", padding: "0rem" }}
              className="modal-header"
            >
              <div className="header_body">
                <div className="header_body_content">
                  <img
                    // style={{height:'40px'}}
                    src={"./Delivery2.png"}
                    alt="logo"
                  ></img>
                  <span className="font-weight-bold text-white">
                    Giao hàng
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >

              </button>
            </div>
            <div className="modal-body">
              <CartContext.Consumer>
                {({ setDeliveryAddress }) =>
                  <AlgoliaPlaces
                    className="modal_input_address"
                    placeholder=" Vui lòng nhập địa chỉ"


                    onChange={({ suggestion }) => {

                      localStorage.setItem('address', suggestion.value);

                      setDeliveryAddress(localStorage.getItem('address'))
                    
                      changeAddress(localStorage.getItem('address'))
                                         
                                         
                                         
                                         
                                       }}
                                       
                                       
                                       
                  />}
              </CartContext.Consumer>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
