import React, { Component } from 'react'
import { Collapse } from 'antd';

const { Panel } = Collapse;

export default class extends Component {
    render() {
        return (
            <div>
            <div className="footer_background_all">
                <div className="container">
                    <div className="row">
                        <div className="col-2 mt-5 ">
                            <img src="./logo-footer.72c86fc.png">
                            </img>
                        </div>
                        <div className="col-2">
                            <Collapse defaultActiveKey={['2']} ghost>
                                <Panel header={<span className="footer_header_collapse">Thông tin web</span>} key="1">
                                    <li className="footer_collapse_list">
                                        <a href="https://www.thegioididong.com/" className="footer_collapse_list" > <i style={{ fontSize: '6px', marginBottom: '2px' }} class="fas fa-circle "></i> Trang chủ</a>
                                    </li>
                                    <li className="footer_collapse_list">
                                        <a className="footer_collapse_list" ><i style={{ fontSize: '6px', marginBottom: '2px' }} class="fas fa-circle "></i> Đặt hàng</a>
                                    </li>
                                    <li className="footer_collapse_list">
                                        <a className="footer_collapse_list" ><i style={{ fontSize: '6px', marginBottom: '2px' }} class="fas fa-circle "></i> Tin tức</a>
                                    </li>
                                    <li className="footer_collapse_list">
                                        <a className="footer_collapse_list" ><i style={{ fontSize: '6px', marginBottom: '2px' }} class="fas fa-circle "></i> Tuyển dụng</a>
                                    </li>
                                    <li className="footer_collapse_list">
                                        <a className="footer_collapse_list" ><i style={{ fontSize: '6px', marginBottom: '2px' }} class="fas fa-circle "></i> Khuyến mãi</a>
                                    </li>

                                </Panel>

                            </Collapse>


                        </div>
                        <div className="col-2 ">
                        <Collapse defaultActiveKey={['2']} ghost>
                                <Panel header={<span className="footer_header_collapse">Hotline</span>} key="1">
                                    <li className="footer_collapse_list">
                                        <span className="footer_collapse_list" > <i style={{ fontSize: '6px', marginBottom: '2px' }} class="fas fa-circle "></i> Đặt hàng &ensp;1800 6936 (07:00-21:00)</span>
                                    </li>
                                    <li className="footer_collapse_list">
                                        <span className="footer_collapse_list" ><i style={{ fontSize: '6px', marginBottom: '2px' }} class="fas fa-circle "></i> Hỗ trợ 028.71.087.088 (07:00-21:00)</span>
                                    </li>
                                </Panel>
                            </Collapse>

                        </div>
                        <div style={{maxWidth:'23%'}} className="col-3">
                            <Collapse defaultActiveKey={['2']} ghost>
                                <Panel header={<span className="footer_header_collapse">Điều khoản sử dụng</span>} key="1">
                                    <li className="footer_collapse_list">
                                        <a className="footer_collapse_list" > <i style={{ fontSize: '6px', marginBottom: '2px' }} class="fas fa-circle "></i> Quy chế website</a>
                                    </li>
                                    <li className="footer_collapse_list">
                                        <a className="footer_collapse_list" ><i style={{ fontSize: '6px', marginBottom: '2px' }} class="fas fa-circle "></i> Bảo mật thông tin</a>
                                    </li>
                                </Panel>
                            </Collapse>


                        </div>
                      
                        <div  className="col-3">
                        <Collapse defaultActiveKey={['2']} ghost>
                                <Panel header={<span className="footer_header_collapse">Liên hệ</span>} key="1">
                                    <li className="footer_collapse_list">
                                        <span className="footer_collapse_list" > <i style={{ fontSize: '6px', marginBottom: '2px' }} class="fas fa-circle "></i> Office:51/1 Thái Bình, Xã Trung Chánh, huyện Hóc Môn, Tp Hồ Chí Minh</span>
                                    </li>
                                    <li className="footer_collapse_list">
                                        <span className="footer_collapse_list" ><i style={{ fontSize: '6px', marginBottom: '2px' }} class="fas fa-circle "></i> Email: khang.nguyen19999kn@gmail.com</span>
                                    </li>
                                    <li className="footer_collapse_list">
                                        <span className="footer_collapse_list" ><i style={{ fontSize: '6px', marginBottom: '2px' }} class="fas fa-circle "></i> +84 334146207</span>
                                    </li>
                                </Panel>
                            </Collapse>

                        </div>
                    </div>

                </div>
              
               
            </div>
            <div className="footer_of_footer">
            <div className="container">
                    <div className="row">
                        <div className="col-10 pt-4"> 
                       
                            <span>Copyright © 2021 The Coffee House. All rights reserved.</span>
                        </div>
                        <div className="col-2 pt-2">
                            <a href="http://online.gov.vn/Home/WebDetails/48042" target="_blank" style={{targetNew:'tab'}}>
                                <img src="./active.4cba64f.png" alt="Đã cấp phép">
                                </img>
                            </a>

                        </div>

                    </div>
                 </div>

            </div>
        </div>
        )
    }
}
