import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useGlobalUser } from '../Utils/UserContext';
import swal2 from 'sweetalert2';
import {
    Button,
    Form,
    Input,
    Header
} from 'reactstrap';
import '../Assets/now-ui-kit.css';
import image1 from '../Img/login.jpg';



function Login() {

    const LoginAPI = "https://localhost:44322/api/Authenticate/login";

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
                if (data.token) {
                    parseJwt(data.token);
                }
                else {
                    const warning = document.getElementById("warning");
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
                title: "Success!",
                text: "User logged in",
                icon: "success",
            }).then(function () {

                history.push("/");
            });

    };


    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <header className="card-header">

                            <h4 className="text-center">Login</h4>
                        </header>
                        <article className="card-body">
                            <Form>


                                <div className="form-group">
                                    <label>Email address</label>
                                    <Input type="email" className="form-control" placeholder="Email" name="email" id="email" />
                                </div>


                                <div className="form-group">
                                    <label>Password</label>
                                    <Input className="form-control" type="password" name="password" id="password" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <Button color="info" size="lg" className="btn-round" justify="center" onClick={getInputs}> Login</Button>
                                </div>
                                <div className="pull-left">
                                    <h6>
                                        <a
                                            className="link"
                                        ><Link to="/register">
                                                Create Account
                                                </Link>
                                                </a>
                                    </h6>
                                </div>
                            </Form>
                        </article>
                    </div>
                </div>
            </div>
        </>

            )
}

export default Login;