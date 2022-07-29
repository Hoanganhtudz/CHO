import * as productService from "../../../../Services/productService";
import className from 'classnames/bind';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./ProductShop.module.css";

const cx = className.bind(style)
function ProductShop() {
    const [apiData, setApiData] = useState([])

    const getApiData = () => {
        const getData = async () => {
            const data = await productService.getAll();
            setApiData(data)
        }
        getData();
    }

    useEffect(() => {
        getApiData();
    }, [])

    var _html = []

    const paginate = () => {
        for (let index = 1; index <= 3; index++) {
            _html.push(<li className="page-item" key={index}><a className="page-link" href="" onClick={(e) => getDatas(index, e)}>{index}</a></li>)
        }
    }

    paginate();

    const getDatas = (index, e) => {
        e.preventDefault();
        const getData = async () => {
            const data = await productService.getAll(index);
            setApiData(data)
        }
        getData();
        console.log(index)
    }

    return (
        <>

            <div className={cx('row')}>
                {
                    apiData.map((items, index) => {
                        return  (
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
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {
                        _html.map(items => {
                            return items;
                        })
                    }
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </>
    );
}

export default ProductShop;