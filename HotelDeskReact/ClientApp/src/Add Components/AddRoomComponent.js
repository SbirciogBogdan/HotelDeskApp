import React, { useState } from 'react';
import { useEffect } from 'react';
import Select from 'react';
import { Modal, Button } from 'reactstrap';
import { useGlobalUser } from '../Utils/UserContext';
import swal2 from 'sweetalert2';
import { useHistory } from 'react-router-dom';


function AddRoomComponent(props) {
    const [show, setShow] = useState(false);
    const { user } = useGlobalUser();
    const history = useHistory();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [hotels, setHotels] = useState([]);

    useEffect(() => {

        setHotels(props.hotels);

    }, [props]);

    const getInputs = () => {

        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        const price = document.getElementById("price").value;

        callAPI(name, description, price);
    };

    const callAPI = (name, desc, price) => {
        const hotelRoomAPI = "https://localhost:44322/api/Hotel/Rooms";

        let sentData = {
            Name: name,
            Description: desc,
            Price: price,
            UserId: user.Id,
            HotelId: hotels.Id
        };

        console.log(sentData);

        fetch(hotelRoomAPI, {
            method: 'POST',
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

    const verify = (name, desc, price) => {
        const warning = document.getElementById("warning");
        if (name === "" || desc === "" || price === "" ) {
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
                    history.push("/rooms");
                });
            return;
        }
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add a new room
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Room</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <article className="card-body">
                        <form>

                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Title" name="title" id="title" />

                            </div>


                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" className="form-control" placeholder="Description" name="description" id="description" />
                            </div>

                            <div className="form-group">
                                <label>Price</label>
                                <input className="form-control" type="number" name="price" id="price" placeholder="Price" />

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

export default AddRoomComponent;