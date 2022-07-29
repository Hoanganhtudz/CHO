import React from "react";
import { Link } from "react-router-dom";
import style from "./Shop.module.css";
import className from 'classnames/bind';
import bannerShop from '../../../img/bannerShop.jpg';
import { useEffect } from "react";
import NavShop from "./navShop/NavShop";
import ProductShop from "./productShop/ProductShop";

const cx = className.bind(style);

function Shop() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return ( 
        <>
            <div className={cx('product')}>
                <div className={cx('banner-shop')}>
                    <img src={bannerShop} />
                </div>
                <div className={cx('text-pro')}>
                    <h2>SHOP</h2>
                    <Link className={cx('icon-pro')} to={'/'}>Home  /</Link>
                    <span>Shop</span>
                </div>
            </div>

            <div className={cx('shop')}>
                <div className="row">
                    <div className="col-lg-3">
                        <NavShop />
                    </div>
                    <div className="col-lg-9">
                        <ProductShop />
                    </div>
                </div>

            </div>
        </>
    );
}

export default Shop;