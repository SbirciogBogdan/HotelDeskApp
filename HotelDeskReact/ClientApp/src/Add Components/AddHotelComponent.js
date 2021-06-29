import React, { useState } from 'react';
import { useEffect } from 'react';
import Select from 'react';
import { Modal, Button } from 'reactstrap';
import { useGlobalUser } from '../Utils/UserContext';
import swal2 from 'sweetalert2';
import { useHistory } from 'react-router-dom';


function AddHotelComponent(props) {
    const [show, setShow] = useState(false);
    const { user } = useGlobalUser();
    const history = useHistory();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [cities, setCities] = useState([]);

    useEffect(() => {

        setCities(props.cities);

    }, [props]);

    const getInputs = () => {

        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        const location = document.getElementById("location").value;
        const phoneNumber = document.getElementById("phoneNumber").value;

        callAPI(name, description, location, phoneNumber);
    };

    const callAPI = (name, desc, loc, phone) => {
        const hotelAPI = "https://localhost:44322/api/Hotel";

        let sentData = {
            Name: name,
            Description: desc,
            Location: loc,
            PhoneNumber: phone,
            UserId: user.Id,
            CityId: cityId,
        };

        console.log(sentData);

        fetch(hotelAPI, {
            methid: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                sentData)
        })
            .then(response => {
                console.log(response);
                validateStatus(response.status);
            })
            .catch(err => console.log(err))
    }

    const verify = (name, desc, loc, phone) => {
        const warning = document.getElementById("warning");
        if (name === "" || desc === "" || loc === "" || phone === "" || cityId === 0) {
            warning.textContent = "Please complete all fields!";
            return false;
        }
        warning.textContent = "";
        return true;
    }

    const validateStatus = (status) => {
        if (status == 201) {
            swal2
                .fire({
                    title: "Done!",
                    icon: "success",
                }).then(function () {
                    handleClose();
                    history.push("/");
                    history.push("sa vad cum numesc ruta");
                });
            return;
        }
    }

    let cityId = 0;
    const changeCity = (event) => {
        cityId = event.value;
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add a new hotel
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Hotel</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <article className="card-body">
                        <form>

                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control" placeholder="Title" name="title" id="title" />

                            </div>


                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" className="form-control" placeholder="Description" name="description" id="description" />
                            </div>


                            <div className="form-group">
                                <label>City</label>
                                <Select id="selectCityBar" options={cities} onChange={changeCity} />
                            </div>


                            <div className="form-group">
                                <label>Location</label>
                                <input type="text" className="form-control" id="location" name="location" placeholder="Location" />
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input className="form-control" type="phoneNumber" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" />

                            </div>



                            <p id="warning" style={{ color: 'red' }}></p>


                        </form>
                    </article>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                    <Button variant="primary" onClick={getInputs}>
                        Save
                 </Button>
                </Modal.Footer>
            </Modal>
        </>
        )
}

export default AddHotelComponent;