import style from "./NavShop.module.css";
import className from 'classnames/bind';
import { Link } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';
import Accessories from "./Accessories";
import * as productService from "../../../../Services/productService";
import BoxSearch from '../boxSearch/BoxSearch';
import React, { useEffect, useState } from 'react';


const cx = className.bind(style);

function NavShop() {

    const [keyWord,setKeyWord] = useState ('');
    const [showProducts, setShowProducts] = useState([]);
    const reset = () => {
        setKeyWord('')
    }
    useEffect(() => {
        const filterByKeyName = async (keyWord) =>{
            const data = await productService.filterByKeyName(keyWord);
            setShowProducts(data);
        }
        const timeOut = setTimeout(() => {
            filterByKeyName(keyWord); 
        },700);
        return () => clearTimeout(timeOut);
    },[keyWord])

    return (
        <>
            <div className={cx('nav')}>
                <h3 className="mb-4">PRODUCT CATEGORIES</h3>
                <div>
                    <Accessories />
                    {/* <div className={cx('nav-but')}>
                        <button>Bowls</button>
                    </div>
                    <div className={cx('nav-but')}>
                        <button>Dinnerware Sets</button>
                    </div>
                    <div className={cx('nav-but')}>
                        <button>Explore Dinnerware</button>
                    </div>
                    <div className={cx('nav-but')}>
                        <button>Mugs & Cups</button>
                    </div>
                    <div className={cx('nav-but')}>
                        <button>Plates</button>
                    </div>
                    <div className={cx('nav-but')}>
                        <button>Uncategorized</button>
                    </div> */}
                </div>


                <h3 className="mt-5 mb-4">COLOR</h3>
                <div className="d-flex w-100">
                    <div className={cx('black', 'color')}>
                        <button></button>
                    </div>
                    <div className={cx('gold', 'color')}>
                        <button></button>
                    </div>
                    <div className={cx('brown', 'color')}>
                        <button></button>
                    </div>
                    <div className={cx('pink', 'color')}>
                        <button></button>
                    </div>
                    <div className={cx('blue', 'color')}>
                        <button></button>
                    </div>
                    <div className={cx('silver', 'color')}>
                        <button></button>
                    </div>
                </div>

                <h3 className="mt-5 mb-4">TAGS</h3>

                <div className="d-flex">
                    <div className={cx('tags', 'mr-1', 'mb-1')}>
                        <Link className={cx('item', 'text-decoration-none')} to={'/shop'}>Casual</Link>
                    </div>
                    <div className={cx('tags', 'mr-1', 'mb-1')}>
                        <Link className={cx('item', 'text-decoration-none')} to={'/shop'} >Classic</Link>
                    </div>
                    <div className={cx('tags', 'mr-1', 'mb-1')}>
                        <Link className={cx('item', 'text-decoration-none')} to={'/shop'} >Creative</Link>
                    </div>
                </div>
                <div className="d-flex">
                    <div className={cx('tags', 'mr-1', 'mb-1')}>
                        <Link className={cx('item', 'text-decoration-none')} to={'/shop'}>Elegant</Link>
                    </div>
                    <div className={cx('tags', 'mr-1', 'mb-1')}>
                        <Link className={cx('item', 'text-decoration-none')} to={'/shop'} >Gadgets</Link>
                    </div>
                    <div className={cx('tags', 'mr-1', 'mb-1')}>
                        <Link className={cx('item', 'text-decoration-none')} to={'/shop'} >Lifestyle</Link>
                    </div>
                </div>
                <div className="d-flex">
                    <div className={cx('tags', 'mr-1', 'mb-1')}>
                        <Link className={cx('item', 'text-decoration-none')} to={'/shop'}>Minimal</Link>
                    </div>
                    <div className={cx('tags', 'mr-1', 'mb-1')}>
                        <Link className={cx('item', 'text-decoration-none')} to={'/shop'} >Minimalistic</Link>
                    </div>
                    <div className={cx('tags', 'mr-1', 'mb-1')}>
                        <Link className={cx('item', 'text-decoration-none')} to={'/shop'} >Modern</Link>
                    </div>
                </div>
                <div className="d-flex">
                    <div className={cx('tags', 'mr-1', 'mb-1')}>
                        <Link className={cx('item', 'text-decoration-none')} to={'/shop'}>Style</Link>
                    </div>

                </div>


            </div>
            

            <div className="mt-5">     
                <input type="text" placeholder="Search product..." className={cx('search')} onChange = {(e) => setKeyWord(e.target.value.trim())} />
                    {keyWord !== '' && <BoxSearch keyWord={keyWord} data={showProducts} reset={reset} />}
                <BsSearch className={cx('icon')} />
            </div>
        </>
    );
}

export default NavShop;