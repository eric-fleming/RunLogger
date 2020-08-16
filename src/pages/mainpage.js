import React from 'react';



const MainPage = () => {
    return (
        <img
            style={{ width: 100+'%', padding:0}}
            src={process.env.PUBLIC_URL + '/images/chicago.png'}
            alt="chicago" />
    );
}

export default MainPage;