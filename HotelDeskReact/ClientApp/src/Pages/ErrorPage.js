import React from 'react';
import { Link } from 'react-router-dom';
import image from '../Img/error.jpg';
import '../Assets/now-ui-kit.css';
import { Button } from 'reactstrap';

function ErrorPage() {



    return (
        <>
            <div className="container">
                <div className="body-style">
                    <div style={{ width: '40%' }}>
                        <img src={image} style={{ float: 'right' }} alt='notFoundImage' />
                    </div>
                    <div style={{ width: '45%', float: 'left', marginLeft: '600px', marginTop: "-240px" }}>
                        <h1>Page Not Found</h1>
                        <div>
                            <Button color="info" size="lg" className="btn-round" justify="center">
                                <Link to="/" className="button-style">Return to HomePage</Link>
                            </Button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default ErrorPage;
