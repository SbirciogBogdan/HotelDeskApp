import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import swal2 from "sweetalert2";
import '../Assets/now-ui-kit.css';
import { Button } from 'reactstrap';

function Register() {


    const registerAPI = "https://localhost:44322/api/Authenticate/register";



    const history = useHistory();


    const callAPI = (username, email, phone, password) => {

        let sentData = {
            UserName: username,
            Email: email,
            PhoneNumber: phone,
            Password: password
        }
        fetch(registerAPI, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                sentData)
        })
            .then(response => {

                validateStatus(response.status);

            })

            .catch(error => {
                console.log(error)
            })

    }

    const validateStatus = (status) => {

        if (status === 200) {

            swal2
                .fire({
                    title: "Success",
                    text: "Account created!",
                    icon: "success",
                }).then(function () {
                    history.push("/login");
                });
            return;
        }
        const warning = document.getElementById("warning");
        warning.textContent = "Email is already in use or Password is invalid!"

    }


    const getInputs = () => {

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPass").value;
        const warning = document.getElementById("warning");

        if (!verifyPass(password, confirmPassword)) {
            warning.textContent = "Password and Confrim Password must be the same!"
            return;
        }
        


        callAPI(username, email, phone, password);

    }



    const verifyPass = (firstPass, secondPass) => {

        if (firstPass === secondPass) {
            return true;
        }
        return false;

    }

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <header className="card-header">

                            <h4 className="text-center">Register</h4>
                        </header>
                        <article className="card-body">
                            <form>

                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" className="form-control" placeholder="Username" name="username" id="username" />

                                </div>


                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Email" name="email" id="email" />
                                </div>


                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <br></br>
                                    <input className="form-control" type="tel" id="phone" name="phone" placeholder="Phone Number" style={{
                                        width: "500px",
                                        height: "38px"
                                    }} pattern="[0-9]+" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input className="form-control" type="password" name="password" id="password" placeholder="Password" />
                                </div>

                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input className="form-control" type="password" name="confirmPass" id="confirmPass" placeholder="Confirm Password" />
                                </div>
                                <div>
                                    <Button color="info" size="lg" className="btn-round" justify="center" onClick={getInputs}> Register</Button>
                                </div>
                            </form>
                        </article>
                        <div className="border-top card-body text-center"><Link to="/login" className="link">Have an account? </Link></div>
                    </div>
                </div>
            </div>

            <br></br>

        </>

    );

}

export default Register;