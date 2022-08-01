import React, { useCallback, useRef, useState } from "react";
import _ from "lodash";
import dataRegion from '../Data/dataVung.json';
import dataStore from '../Data/dataStore.json';

export default function Store() {
    const [active, setActive] = useState(0);
    const [maVung, setMaVung] = useState('HCM');

    const [input, setInput] = useState('');

    const refInput = useRef(null);


    const filterData = () => {
        let listDataFilter;
        if (input === '') {
            listDataFilter = dataStore.filter(
                (store) => (store.maVung === maVung)
            );

        } else listDataFilter = dataStore.filter(
            (store) => (store.address.toLowerCase().includes(input.toLowerCase()) && store.maVung === maVung)
        );
        return listDataFilter
    }
    const handleClick = (active, maVung) => {
        setActive(active);
        setMaVung(maVung)
    };
    const QuantityByAreaCode = (maVung) => {
        let listDataFilter = dataStore.filter(
            (store) => store.maVung === maVung
        );
        return listDataFilter.length

    }
    let quantitySearch = filterData().length;
    //Debounce 
    const onChangeSearch = (event) => {
        if (refInput.current) {
            clearTimeout();
        }

        refInput.current = setTimeout(() => {

            setInput(event.target.value)
        }, 900)
    }

    const listRegion = dataRegion.map((region, index) => {
        let className = 'store_list_region_name'


        return (
            <li onClick={() => { handleClick(index, region.maVung) }} className={active === index ? className += ' active' : className}>
                {`${region.tenVUng} (${QuantityByAreaCode(region.maVung)})`}
            </li>
        )
    });

    const renderFilter = () => {

        const listStore = filterData().map((store, index) => {
            return (
                <div className='col-12 col-md-12 col-lg-6 col-xl-6 '>
                    <div className="card_store_item">

                        <div class="d-flex flex-row">
                            <img src={store.img} alt="" className='store_item'></img>
                            <div style={{ marginLeft: '16px' }} class="d-flex flex-column ">
                                <p class="store-info-item store-trademark">THE COFFEE HOUSE</p>
                                <p class="store-info-item  store-address">{store.address}</p>
                                <p class="store-info-item  store-distance">Cách đây 0.5km</p>
                                <div class="store-view-link">
                                    <span class="store-view-map">Xem bản đồ</span>
                                    <span class="store-view-detail">Chi tiết cửa hàng </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return listStore

    }



    return (
        <div className="p-3">
            <div class="container-lg container-fluid">

                <div className="store_title">
                    <img src="./StorePic/store-icon.eb4e4fc.png" />
                    <span className="store_title_text">Hệ thống cửa hàng The Coffee House</span>
                </div>
                <div className='store_list'>
                    <ul className='store_list_region d-flex align-items-center'>
                        {listRegion}
                    </ul>

                </div>
                <div className='store_input_search'>
                    <div className="store_searchbar">
                        <input ref={refInput} onChange={(event) => onChangeSearch(event)} className="store_search_input" type="text" name placeholder="Nhập tên đường, quận huyện, tỉnh thành" />
                        <a href="#" className="store_search_icon"><i className="fas fa-search" /></a>
                    </div>
                </div>
                <h5 style={{ marginLeft: '12%', marginBottom: '1.5%' }}>{`Tìm Thấy ${quantitySearch} cửa hàng`}</h5>
                <div className='row store_list_item'>
                    {renderFilter()}


                </div>


            </div>
        </div>
    )
}
