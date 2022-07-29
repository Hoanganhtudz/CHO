import style from "./Accessories.module.css";
import className from 'classnames/bind';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as accessoriesService from "../../../../Services/accessoriesService"

const cx = className.bind(style);

function Accessories() { 
    const [accessories, setAccessories] = useState([]);
    let {id} = useParams();

    useEffect(() => {
        const getData = async () => {
            const data = await accessoriesService.getAll(id);
            setAccessories(data)
        }
        getData();
 
    }, [])
    return (
        <>
            {accessories.map((item) => {
                return (
                    <div className={cx('nav-but', 'mt-3')} key={item.id}>
                        <Link className={cx('acc', 'text-decoration-none')} to={`/shops/${item.id}`}>{item.cate_name}</Link>
                        <div className={cx('border-custom','mt-2')}></div>
                    </div>
                )

            })}

        </>
    );
}

export default Accessories;