import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobalUser } from '../Utils/UserContext';
import swal2 from 'sweetalert2';



function Login() {

    const LoginAPI = "https://localhost:44368/api/Authenticate/login";

    const { login } = useGlobalUser();

    const history = useHistory();

    const callAPI = (email, password) => {
        let sentData = {
            Email: email,
            Password: password
        }
        fetch(LoginAPI, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                sentData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.toekn) {
                    parseJwt(data.token);
                }
                else {
                    const warning = document.getElementById("wrning");
                    warning.textContent = "Email or Password invalid!";
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    const getInputs = () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        callAPI(email, password);
    }

    function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        console.log(jsonPayload);
        document.cookie = "name=test";

        const loginData = {
            Id: JSON.parse(jsonPayload).id,
            Name: JSON.parse(jsonPayload)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
            Email: JSON.parse(jsonPayload)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
            Role: JSON.parse(jsonPayload)["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
        };
        login(loginData);
        swal2
            .fire({
                title: "Good job!",
                text: "Your user was logged in",
                icon: "success",
            }).then(function () {

                history.push("/");
            });

    };


    return (
        <>
            <div className="content">
                <container>
                    <col className="ml-auto mr-auto" md="4">
                        <card className="card-login card-plain">
                            <form action="" className="form" method="">
                                <cardbody>
                                    <inputgroup
                                        className="no-border input-lg" >
                                        <input
                                            placeholder="Email"
                                            type="email"
                                            name="email"
                                            id="email" />
                                        <input
                                            placeholder="Password"
                                            type="password"
                                            name="password"
                                            id="password"/>
                                    </inputgroup>
                                </cardbody>
                            </form>
                        </card>
                    </col>
                </container>
            </div>
        </>

            )
}

export default Login;