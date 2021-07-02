import React, { useState } from 'react';
import Select from 'react-select';
import { useEffect } from 'react';
import RoomComponent from '../Add Components/RoomComponent';
import { useGlobalUser } from '../Utils/UserContext';
import AddRoomComponent from '../Add Components/AddRoomComponent';

function HotelPage() {
    const citiesAPI = 'https://localhost:44322/api/Cities';
    const hotelAPI = 'https://localhost:44322/api/Hotel';

    const [hotels, setHotels] = useState([]);
    const [allHotels, setAllHotels] = useState([]);
    const [location, setLocation] = useState([]);

    const { user } = useGlobalUser();
    const [CitiesList, setCitiesList] = useState({
        selectOptions: []
    });

    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetch(hotelAPI)
            .then(respone => respone.json())
            .then(data => {
                setHotels(data);
                setAllHotels(data);
                setLocation(data);
            })
            .catch(err => console.log(err))

        fetch(citiesAPI)
            .then(response => response.json())
            .then(data => {
                const allCitiesConst = [{ "value": 0, "label": "Cities" }];
                const options = data.map(d => ({
                    "value": d.id,
                    "label": d.name
                }))
                setCities(options);
                setCitiesList({ selectOptions: allCitiesConst.concat(options) });
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            <AddRoomComponent></AddRoomComponent>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <section className="booking-block block-intro">
                                    <div className="row">
                                        <div>
                                            {user.Auth ? (
                                                <AddRoomComponent></AddRoomComponent>
                                            ) : (<></>)}
                                        </div>
                                        <div className="container">

                                            <RoomComponent hotels={hotels}></RoomComponent>

                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotelPage;