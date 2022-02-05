import React from 'react';

const profile = (props) => (
    <>
        <h1>Profile</h1>
        <button onClick={()=>{
            navigate('/profile')
        }}>Go to profile</button>
    </>
    );

export default profile;