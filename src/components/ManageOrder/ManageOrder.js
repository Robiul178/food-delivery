import React, { useEffect, useState } from 'react';
import useApi from '../ContextApi/useApi';
import empty from '../../img/empty.svg';
import Footer from '../Footer/Footer';

const ManageOrder = () => {

    const [product, setProduct] = useState([]);

    const { store, setStore } = useApi();

    useEffect(() => {
        if (!store?.items) {
            return;
        }

        fetch('https://pacific-cove-53174.herokuapp.com/food/cart', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ ids: Object.keys(store.items) })
        })
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
            .catch(error => {
                console.log(error.message)
            })

    }, [store])

    const quantity = (id) => {
        return store.items[id];
    }

    const increment = (id) => {
        const existQut = store.items[id];
        const _store = { ...store };
        _store.items[id] = existQut + 1;
        setStore(_store);
    }

    const dicrement = (id) => {
        const existQut = store.items[id];
        if (existQut === 1) {
            return;
        }
        const _store = { ...store };
        _store.items[id] = existQut - 1;
        setStore(_store);
    }
    let total = 0;

    const sum = (id, price) => {
        const sumation = price * quantity(id);
        total += sumation;
        return sumation
    }

    const handleDelete = (id) => {
        const _store = { ...store };
        const qut = _store.items[id];
        delete _store.items[id];
        _store.totalItems -= qut;
        setStore(_store);
        setProduct(product.filter(product => product._id !== id))

    }

    const handleOrder = () => {
        alert("Order successfully");
        setProduct([]);
        setStore({});
    }


    return (
        <div className="lg:pt-20 md:pt-20 pt-20">
            {
                product.length ?
                    <div className='lg:flex lg:flex-row md:flex-row  flex flex-col md:flex lg:w-5/6 md:w-5/6 w-full mx-auto  justify-around'>
                        <div className='lg:w-1/2 md:w-1/2 w-full lg:order-1 md:order-1 order-2 flex lg:justify-start  justify-center items-center'>
                            <div className='p-4'>
                                <h1 className='lg:text-4xl md:text-4xl text-2xl text-dark font-bold py-4'>Edit Delivery Details</h1>
                                <form className='py-4'>
                                    <input type="email" className='border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-primary focus:border-none mb-4' placeholder='enter your email address' required name="" id="" />
                                    <br />
                                    <input type="text" className='border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-primary focus:border-none mb-4' placeholder='Road No' required />
                                    <br />
                                    <input type="text" className='border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-primary focus:border-none mb-4' placeholder='Flat of Floor' required />
                                    <br />
                                    <input type="text" className='border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-primary focus:border-none mb-4' placeholder='Business Name' required />
                                    <br />
                                    <textarea placeholder='Address' className='border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-primary focus:border-none mb-4' id="" cols="30" required rows="4"></textarea>
                                    <br />
                                    <input className='bg-primary text-white  px-4 py-1 rounded w-full font-bold cursor-pointer ' type="submit" value="Submit" />
                                </form>
                            </div>
                        </div>

                        <div className='lg:w-1/2 md:w-1/2 lg:order-2 md:order-2 order-1 w-full flex justify-center'>
                            <div className='p-4 mt-4 w-full'>
                                <h1 className='text-3xl  text-dark'>Form <span className='font-bold'>fitmeal food delivery</span></h1>
                                <h2 className='text-2xl   text-dark'>Arriving in 20-30 min</h2>
                                <h2 className='text-2xl  text-dark'>107 Rd No 9</h2>
                                <br />
                                <br />
                                {
                                    product.map(pd => {
                                        return (
                                            <div className='flex justify-between rounded items-center m-lg shadow-lg p-4'>
                                                <div>
                                                    <img width='100px' src={pd.img} alt="" />

                                                </div>
                                                <div className='text-center'>
                                                    <button onClick={() => increment(pd._id)} className="bg-primary px-4 py-2 rounded-full leading-none">+</button>

                                                    <b className='px-4'>{quantity(pd._id)}</b>

                                                    <button onClick={() => dicrement(pd._id)} className="bg-primary px-4 py-2 rounded-full leading-none">-</button>
                                                    <br />
                                                    <b >${sum(pd._id, pd.price)}</b>
                                                </div>
                                                <div>
                                                    <button className='bg-primary px-4 py-2 text-white rounded-full' onClick={() => handleDelete(pd._id)}>Delete</button>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <br />
                                <br />
                                <p className='flex justify-between text-lg text-dark'><span>Sub total:</span> <span>${Math.round(total)}</span></p>
                                <p className='flex justify-between text-lg text-dark'><span>Tex: 5%</span> <span>${Math.round(total * 0.05)}</span></p>
                                <p className='flex justify-between text-2xl font-bold'><span>Total:</span> <span>${Math.round(Math.round(total * 0.05) + total)}</span></p>
                                <button onClick={handleOrder} className='bg-lightgray mt-4 text-white bg-primary  px-4 py-1 rounded w-full font-bold cursor-pointer '>PlaceOrder</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='w-1/2 mx-auto'>
                        <img src={empty} alt="" />
                    </div>
            }


            <Footer></Footer>


        </div>
    );
};

export default ManageOrder;