import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import data from "../Data/dataNews.json";

export default class News extends Component {
    state={
        type:'8'

    }
    styling = {}
    changeStateType =(type)=>{
        this.setState({type:type})

    }
    renderNews=()=>{
        let listNews = data.map((news)=>{
            return (
                <div style={{padding:'15px' }} className="col-6 col-sm-6 col-md-4 ccol-lg-3 col-xl-3 mt-4">
                <NavLink to={`/news/${news.id}`}>
                 
                <div
                    className="card"
                    style={{
                        // width: "279px",
                        // height: "272px",
                        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                        borderRadius: "4%"
                    }}
                >
                    <div className="news_center_image">
                        <img
                            className="news_card-img-top"
                            src={news.imgHeader}
                            alt="Card image cap"
                        />
                    </div>
                    <div className="card-body card-body-news">
                        <span style={{ fontWeight: 650 }} className="card-title">
                        {news.header}
                        </span>
                        <button class=" d-inline-block btn btn--orange align-items-center btn--radius-100 float-right button-read-continue"
                         
                        >
                            <a>
                                <span class="text-read-continue">ĐỌC TIẾP</span>
                            </a>
                        </button>

                    </div>
                </div>
                </NavLink>  
            </div>

            )

        })
        if(this.state.type==="8"){
            this.styling={}
            
            return listNews.slice(0,8)
          }else{
            this.styling={display:'none'}
            return listNews;
      
          }
    }





    render() {
        return (
            <div style={{marginTop:'85px'}}>
                <div
                    style={{ marginTop: "30px" }}
                    class="tch-box__header tch-box__header-spacing"
                >
                    <div
                        data-v-5abbf04c=""
                        class="
              tch-box__title
              d-flex
            justify-content-center
              align-items-center
            "
                    >
                        <div data-v-5abbf04c="">
                            <span style={{ color: "#faa515" }} class="icon">
                                <i class="far fa-newspaper fa-2x "></i>
                            </span>{" "}
                            <span data-v-5abbf04c="" className="news_text_content_header">
                                &nbsp;Tin Tức
                            </span>
                        </div>
                    </div>
                </div>

                {/* Item list */}
                <div className="container">
                    <div  className="row">
                        {this.renderNews()}
                        

                    </div>
                </div>
                <div style={{ paddingTop: '50px',paddingBottom:'20px' }} class="d-flex justify-content-center ">

                    <a style={this.styling} onClick={() => {
                        this.changeStateType("all")
                    }}>
                        <span style={{ fontWeight: 600, fontSize: '16px' }} className="text-warning"  >Xem tất cả</span>&nbsp;&nbsp;
                        <span >
                            <i

                                aria-hidden="true"
                                class="fa fa-arrow-right text-warning"
                            ></i>
                        </span>
                    </a>

                </div>

            </div>
        )
    }
}
