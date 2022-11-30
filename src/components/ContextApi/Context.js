import React, { createContext, useEffect, useState } from 'react';
import useFirebase from '../Firebase/useFirebase';

export const contextApi = createContext()

const Context = ({ children }) => {
    const [store, setStore] = useState({});
    const [isMounted, setMounted] = useState(true);
    const firebase = useFirebase();

    useEffect(() => {
        window.localStorage.setItem('store', JSON.stringify(store))
    }, [store])

    useEffect(() => {
        const store = window.localStorage.getItem('store');
        if (isMounted) {
            setStore(JSON.parse(store))
        }
        return (() => {
            setMounted(false)
        })
    }, [store]);

    return (
        <contextApi.Provider value={{ store, setStore, firebase }}>
            {children}
        </contextApi.Provider>
    );
};

export default Context;