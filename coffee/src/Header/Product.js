import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import data from "../Data/dataProduct.json";
import ModalOrder from "./ModalOrder";
import PageProduct from "./PageProduct";
import Axios from 'axios'






const Product = () => {


  const [type, setType] = useState("Cà phê");
  const [status, setStatus] = useState("10");
  const [quantity, setQuantity] = useState(1);
  const [styleMiniusQuantity, setStyleMinius] = useState({
    background: '#e4e4e4',
    borderRadius: '100%',
    width: '30px',
    height: '30px',
  });
  const [productList, setProductList] = useState([])
  const [posts, setPosts] = useState([]);

  // lấy dữ liệu từ api bằng axios
  
    
    useEffect(() => { 
      let promise = Axios({
      url: 'http://localhost:9696/api/v1/product',
      // type: 'json',
      method: 'GET',
      // headers : { 'Access-Control-Allow-Origin' : '*','Access-Control-Allow-Headers' : '*'}
    });
    promise.catch((err) => {
      console.log(err);
      console.log('Lấy dữ liệu thất bại')
    })
     promise.then((result) => {
      console.log('Lấy dữ liệu thành công')
      setPosts(result.data) ;

    });


    
  }, []);

   
  
  let styling = {}

  const changeStateQuantity = (quantity) => {
    setQuantity(quantity)
  }

  const changeQuantity = (type) => {

    if (type === "plus") {
      const newValue = quantity + 1;
      changeStateQuantity(newValue);


      if (newValue > 1) {

        setStyleMinius({
          background: '#ff8d00',
          borderRadius: '100%',
          width: '30px',
          height: '30px',
        })
      }
    }
    else {
      const newValue = quantity - 1;

      changeStateQuantity(newValue);

      if (newValue <= 1) {
        setStyleMinius({
          background: '#e4e4e4',
          borderRadius: '100%',
          width: '30px',
          height: '30px',
        })
        changeStateQuantity(1)

      }

    }
  }

  const changeStateType = (type, status) => {
    setType(type)
    setStatus(status)
  };


  const renderTest =  () => {
    console.log(posts)
    let listDataFilter = posts.filter(
      (product) => product.type === type
    );


    let contentListProduct = listDataFilter.map((item, index) => {
      return (
        <div >
          <div style={{ marginRight: "10px" }} className="col-2 mt-4">

            <div
              className="card"
              style={{
                width: "12rem",
                height: "280px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <div className="product_center_image">
                <img
                  alt=""
                  className="card-img-top"
                  src={item.img}
                />
              </div>
              <div style={{ padding: '0.5rem 1.2rem' }} className="card-body">
                <span style={{ fontWeight: 600, color: 'black' }} className="card-title">
                  {item.name}
                </span>
                <div className="product_price">
                  <ul className="product_list-item_price">
                    <li className="product_list-item_price_1">{item.price}</li>
                    <li className="product_list-item_price_2">
                      {item.priceDefaut}
                    </li>
                    <li>
                      <a
                        onClick={() => changeStateQuantity(1)}
                        href="#1"
                        style={{
                          background: "#fa8c16",
                          borderRadius: "100%",
                          width: "29%",
                          marginLeft: "104px",
                          marginTop: "-70px",
                        }}
                        class="btn text-white"
                        data-toggle="modal"
                        data-target={"#exampleAddPro" + index}
                      >
                        <i class="fas fa-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <ModalOrder item={item} index={index} styleMiniusQuantity={styleMiniusQuantity} changeQuantity={changeQuantity} quantity={quantity} />
          {/* <PageProduct item={item} index={index} styleMiniusQuantity={styleMiniusQuantity} changeQuantity={changeQuantity} quantity={quantity}/> */}
        </div>


      );
    });
    if (status === "10") {
      styling = {}

      return contentListProduct.slice(0, 10)
    } else {
      styling = { display: 'none' }
      return contentListProduct;

    }


  };


  return (
    <div className="pt-2">
      {/* Header Of Product */}
      <div
        style={{ marginTop: "30px" }}
        class="tch-box__header tch-box__header-spacing"
      >
        <div
          data-v-5abbf04c=""
          class="
              tch-box__title
              d-flex
              justify-content-start justify-content-md-center
              align-items-center
            "
        >
          <div data-v-5abbf04c="">
            <span style={{ color: "#faa515" }} class="icon">
              <i class="fas fa-trophy fa-2x "></i>
            </span>{" "}
            <span data-v-5abbf04c="" className="product_text_content_header">
              &nbsp;Sản phẩm từ Nhà
            </span>
          </div>
        </div>
      </div>
      <ul
        style={{ listStyleType: "none" }}
        className=" tch-category-card-list tch-category-card-list--spacing
              d-flex
              justify-content-md-center
              flex-xl-wrap
              flex-lg-wrap
              border-0"
      >
        <li className="pr-4 pt-3">
          <div
            className="card border mb-3 "
            style={{
              maxWidth: "18rem",
              borderRadius: "50%",
              display: "inline-block",
              backgroundColor: "#ffe7ba",
            }}
          >
            <div className="card-body text-primary">
              <a
                href="#1"
                onClick={() =>
                  changeStateType("Cà phê", "10")
                }
              >
                <img
                  alt=""
                  style={{ maxWidth: "81px" }}
                  src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/ca-phe.png"
                ></img>
              </a>
            </div>
          </div>
        </li>
        <li className="pr-4 pt-3">
          <div
            className="card border mb-3 "
            style={{
              maxWidth: "18rem",
              borderRadius: "50%",
              display: "inline-block",
              backgroundColor: "#ffe7ba",
            }}
          >
            <div
              style={{ minWidth: "111px" }}
              className="card-body text-primary"
            >
              <a
                href="#1"
                onClick={() =>
                  changeStateType("Trà trái cây", "10")
                }
              >
                <img
                  alt=""
                  style={{ maxHeight: "55px", paddingLeft: "18px" }}
                  src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/tra-trai-cay-tra-sua.png"
                ></img>
              </a>
            </div>
          </div>
        </li >
        <li className="pr-4 pt-3">
          <div
            className="card border mb-3 "
            style={{
              maxWidth: "18rem",
              borderRadius: "50%",
              display: "inline-block",
              backgroundColor: "#ffe7ba",
            }}
          >
            <div
              style={{ minWidth: "111px" }}
              className="card-body text-primary"
            >
              <a
                href="#1"
                onClick={() =>
                  changeStateType("Đá xay", "10")
                }
              >
                <img
                  alt=""
                  style={{ maxHeight: "55px", paddingLeft: "18px" }}
                  src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/da-xa.png"
                ></img>
              </a>
            </div>
          </div>
        </li>
        <li className="pr-4 pt-3">
          <div
            className="card border mb-3 "
            style={{
              maxWidth: "18rem",
              borderRadius: "50%",
              display: "inline-block",
              backgroundColor: "#ffe7ba",
            }}
          >
            <div
              style={{ minWidth: "111px" }}
              className="card-body text-primary"
            >
              <a
                href="#1"
                onClick={() =>
                  changeStateType("Dùng tại nhà", "10")
                }
              >
                <img
                  alt=""
                  style={{ maxHeight: "55px", paddingLeft: "18px" }}
                  src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/ca-phe-goi-ca-phe-uong-lien.png"
                ></img>
              </a>
            </div>
          </div>
        </li>
        <li className="pr-4 pt-3">
          <div
            className="card border mb-3 "
            style={{
              maxWidth: "18rem",
              borderRadius: "50%",
              display: "inline-block",
              backgroundColor: "#ffe7ba",
            }}
          >
            <div
              style={{ minWidth: "111px" }}
              className="card-body text-primary"
            >
              <a
                href="#1"
                onClick={() =>
                  changeStateType("Bánh", "10")
                }
              >
                <img
                  alt=""
                  style={{ maxHeight: "55px", paddingLeft: "12px" }}
                  src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/banh-snack.png"
                ></img>
              </a>
            </div>
          </div>
        </li>
      </ul >
      {/* Item list */}
      <div div className="container" >
        <div style={{ minWidth: "1329px" }} className="row">
          {renderTest()}
        </div>
      </div>
      <div style={{ paddingTop: '50px' }} class="d-flex justify-content-center ">

        <a href="#1" style={styling} onClick={() =>
          changeStateType(type, "all")
        }>
          <span style={{ fontWeight: 600, fontSize: '16px' }} className="text-warning"  >Xem tất cả</span>&nbsp;&nbsp;
          <span >
            <i

              aria-hidden="true"
              class="fa fa-arrow-right text-warning"
            ></i>
          </span>
        </a>

      </div>

      {/* test axios */}
      {/* <div style={{ paddingTop: '50px' }} class="d-flex justify-content-center ">

        <button style={styling} onClick={() =>
          getProductList()
        }>
          <span style={{ fontWeight: 600, fontSize: '16px' }} className="text-warning"  >Xem tất cả</span>&nbsp;&nbsp;
          <span >
            <i

              aria-hidden="true"
              class="fa fa-arrow-right text-warning"
            ></i>
          </span>
        </button>

      </div> */}
      {/* modal add Product */}

    </div >
  );
}
export default Product

