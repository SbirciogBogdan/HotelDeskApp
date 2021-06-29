import React from 'react';
import { useGlobalUser } from '../Utils/UserContext';
import HomePageHeader from '../Headers/HomePageHeader';


function Home() {

    const { user } = useGlobalUser();


    return (
        <>
            <HomePageHeader />
        </>

    )
}

export default Home;
