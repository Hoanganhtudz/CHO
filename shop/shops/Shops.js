import style from "./Shops.module.css"
import classNames from "classnames/bind";
import * as productService from "../../../../Services/productService";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import bannerShop from '../../../../img/bannerShop.jpg';
import NavShop from "../navShop/NavShop";

const cx = classNames.bind(style)

function Shops() {
    const [apiData, setapiData] = useState([]);
    let { id } = useParams();

    const getApiData = () => {
        const getData = async () => {
            const data = await productService.findByCate_id(id)
            setapiData(data)
        }
        getData()
    }

    useEffect(() => {
        getApiData()
        // window.scrollTo(0, 0)
    }, [id])


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
                        <div className={cx('row')}>
                            {
                                apiData.map((items, index) => {
                                    return (
                                        <div className={cx('col-lg-4')} key={index}>
                                            <img className={cx('w-100', 'mt-3')} src={items.image} />
                                            <div className={cx('name-pro')}>

                                                <Link className={cx('pok', 'text-decoration-none')} to={`/product/${items.id}`}>{items.productName}</Link>
                                                <p>${items.price}.00</p>
                                            </div>

                                        </div>

                                    )
                                })
                            }
                        </div >
                    </div>
                </div>

            </div>
           

        </>
    );
}

export default Shops;