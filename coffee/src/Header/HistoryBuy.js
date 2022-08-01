import React from 'react'

export default function () {
  return (
    <div className="content-page-history">
         <div className="listpro11">
              <div>
                <h2>Danh sách đơn hàng </h2>
                <div className="table-lst">
                  <table cellspacing="0" cellpadding="10" id="tableContenid">
                    <thead>
                      <tr style={{background: "#d6b9b9"}}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Hướng dẫn</th>
                        <th>Thanh toán</th>
                        <th style={{textAlign:"center"}}>Thao tác</th>
                      </tr>
                    </thead>
                    <tbody id="render-lst-here">
                      {/* {renderTable()} */}

                    </tbody>
                  </table>
                  <div style={{ display: 'flex', justifyContent: 'center',marginBottom:'80px' }}>

                    {/* <button onClick={() => { changeStatusALl() }} style={input!==""?{visibility:'hidden'}:{}} type="button" className="btn btn-primary">
                      {alls === 1 ? "Xem tất cả" : "Thu gọn"}
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}
