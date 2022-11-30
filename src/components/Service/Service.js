import React, { useEffect, useState } from 'react';
import useFood from '../hooks/useFood';
import Product from '../Product/Product';
import { Spinner } from 'react-spinners-css'
import Footer from '../Footer/Footer';
import useApi from '../ContextApi/useApi';
const Service = () => {

    const [food, setFood] = useFood();
    const { store, setStore } = useApi();

    const handleAddToCart = (e, id) => {
        e.preventDefault();

        let _store = { ...store };
        if (!_store.items) {
            _store.items = {};
        }

        if (_store.items[id]) {
            alert("This product already added");
            return;
        }
        else {
            _store.items[id] = 1;
        }

        setStore(_store);


    }


    return (
        <>
            <div className="lg:pt-10 md:pt-10 pt-20">
                <h1 className='text-center font-bold text-primary lg:text-6xl md:text-4xl text-2xl  lg:py-20 md:py-15 py-8'>All Products</h1>

                <div className='container mx-auto'>
                    {
                        food.length > 1 ?
                            <div className='grid lg:grid-cols-3 justify-items-center md:grid-cols-2 grid-cols-1 gap-8 p-8'>
                                {
                                    food.map(pd => <Product key={pd._id} product={pd}>
                                        <button onClick={(e) => handleAddToCart(e, pd._id)} className='px-4 py-2 bg-red rounded-full text-white'>Add to cart</button>
                                    </Product>)
                                }
                            </div> :
                            <div className="flex justify-center">
                                <Spinner color='#70a21a' />
                            </div>
                    }
                </div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Service;