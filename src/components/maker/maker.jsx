import React from 'react';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

const Maker = ({ authService }) => {
    const navigate = useNavigate();
    const onLogout = () => {
        authService.logout();
    }
    useEffect(()=>{
        authService
        .onAuthChange(user => {
            if(!user){
                navigate('/')
            }
        })
      })

    return(
        <section>
            <Header onLogout={onLogout}></Header>
            <Footer></Footer>
        </section>
    )
};

export default Maker;