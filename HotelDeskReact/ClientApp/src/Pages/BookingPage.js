import React, { useState } from 'react';
import Select from 'react';
import { useEffect } from 'react';
import AddHotelComponent from '../Add Components/AddHotelComponent';
import { useGlobalUser } from '../Utils/UserContext';


function BookingPage() {
    const citiesAPI = 'linku';
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

    const fetchHotelsByCity = (id) => {
        const hotelsByCityAPI = 'city';

        fetch(hotelsByCityAPI + id)
            .then(response => response.json())
            .then(data => {
                setHotels(data);
                setAllHotels(data);
                setLocation(data);
            })
            .catch(err => console.log(err))
    };

    const handleCityChange = (event) => {
        fetchHotelsByCity(event.value);
    };

    const searchByLocation = () => {
        const searchVal = document.getElementById("searchLocation").value;

        if (searchVal === "") {
            setHotels(allHotels);
            setLocation(allHotels);
            return;
        }

    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">


                                <section className="booking-block block-intro">
                                    <div className="row">
                                        <div style={{ width: "250px" }} >
                                            <Select id="selectCityBar" options={CitiesList.selectOptions} onChange={handleCityChange} />
                                        </div>
                                        <br></br>

                                        <div className="input-group mb-3" style={{ width: "300px", marginLeft: "15px" }}>
                                            <input type="text" className="form-control" id="searchLocation" placeholder="Search by Location" aria-label="SearchBar" aria-describedby="basic-addon2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-secondary" type="button" onClick={searchByLocation}>Search</button>
                                            </div>
                                        </div>


                                        <div style={{ float: "right", marginLeft: "350px" }} >
                                            {user.Auth ? (
                                                <AddHotelComponent cities={cities}></AddHotelComponent>
                                            ) : (<></>)}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div style={{ width: "250px" }}>
                                            <div className="panel panel-default">
                                                <div className="panel-body">





                                                </div>
                                            </div>
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

export default BookingPage;