import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalUser } from '../Utils/UserContext';


function Home() {

    const { user } = useGlobalUser();


    return (
    <>  <div className="container" >
        <div className="jumbotron" style={{ backgroundColor: "#d5dfe7" }} >

            <h1 className="display-3">Welcome to Rentify!</h1>
            <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>

            {user.Auth ? (
                <>
                    <br></br>
                    <Link to="/posts">
                        <button type="button" style={{ width: "200px" }} className="btn btn-success">See the newest Offers </button>
                    </Link>

                </>

            ) : (
                    <>
                        <Link to="/login">
                            <button type="button" style={{ width: "150px", marginBottom: "15px" }} className="btn btn-success">Login </button>
                        </Link>

                        <br></br>
                        <Link to="/register">
                            <button type="button" style={{ width: "200px" }} className="btn btn-primary">Sign up </button>
                        </Link>

                        <br></br>
                        <Link to="/posts">
                            <button type="button" style={{ width: "200px", float: 'right', marginTop: "-32px" }} className="btn btn-success">See the newest Offers </button>
                        </Link>
                    </>
                )}



        </div>
        <div className="row marketing">
            <div className="col-lg-6">
                <h4>Features:</h4>
                <p>Email notification about newest rent posts.</p>
                <p>Landlords can post their properties to be seen by potential tenants.</p>

            </div>
            <div className="col-lg-6">
                <h4>Our Mission:</h4>
                <p>For landlords: to make the process of renting a property as easy as possible.</p>
                <p>For tenants: to find a place more accessible.</p>


            </div>
        </div>
    </div> {/* /container */}
        <br></br>
    </>
    );

}

export default Home;
