import React from 'react';
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
    const navigate = useNavigate();
    return(
        <>
        <h1>home</h1>
        <button onClick={()=>{
            navigate('/profile')
        }}>Go to profile</button>
    </>
    )
};

export default Home;