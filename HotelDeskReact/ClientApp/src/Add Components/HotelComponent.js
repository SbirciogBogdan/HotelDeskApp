import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../Img/error.jpg';
import { Button } from 'reactstrap';

function HotelComponent(props) {

    const [hotels, setHotels] = useState([]);

    useEffect(() => {

        setHotels(props.hotels);
    }, [props]);

    return (
        <>
            <br></br>
            <div className="row">
                {hotels.map((hotel, i) => (
                    <div className="col col-lg-3" id={hotel.id} key={i}>

                        <div className="card">
                            <img className="card-img-top" src={image} alt="notfound" />
                            <div className="card-body">
                                <h5 className="card-title">{hotel.name}</h5>
                                <p className="card-text">Location: {hotel.location}</p>
                                <p className="card-text">PhoneNumber: {hotel.phoneNumber}</p>
                                <Link to={"/hotel/" + hotel.id} className="btn btn-primary">Show Rooms.</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </>
    );

}

export default HotelComponent;
