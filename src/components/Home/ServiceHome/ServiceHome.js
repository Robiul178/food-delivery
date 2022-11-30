// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import useFood from '../../hooks/useFood';
import Product from '../../Product/Product';
import { Spinner } from 'react-spinners-css'

const ServiceHome = () => {

    const [food, setFood] = useFood();


    const serviceHome = food.slice(1, 7);


    return (
        <div>
            <div>
                <h1 className='text-center md:text-4xl text-4xl py-10 lg:text-6xl font-bold text-primary'>Our Product</h1>
                {
                    food.length > 1 ?
                        <div className='grid lg:grid-cols-3 justify-items-center md:grid-cols-2 grid-cols-1 gap-8 p-8'>
                            {
                                serviceHome.map(pd => <Product key={pd._id} product={pd}>
                                </Product>)
                            }
                        </div>
                        :
                        <div className="flex justify-center">
                            <Spinner color='#70a21a' />
                        </div>
                }
            </div>
        </div>
    );
};

export default ServiceHome;