import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {

    const { img, name, description, price } = props?.product;

    return (
        <div>
            <Link to='/order'>
                <div style={{ "boxShadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px" }} className='card text-center h-full rounded-lg '>
                    <div className=''>
                        <img className='mx-auto' width='70%' src={img} alt="" />
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold py-2 text-primary'>{name}</h2>
                        <p className='lg:text-xl text-md text-dark p-2'>{description}</p>
                        <div className='flex justify-between p-4 mt-auto'>
                            <p className='text-2xl font-bold  text-primary'>Price:<span className='text-red'>${price}</span></p>
                            {
                                props.children
                            }
                        </div>
                    </div>
                </div>
            </Link>
        </div >
    );
};

export default Product;