import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import image from '../../images/notfound.png';

function NotFound() {



    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <div className="container">
                <div className="body-style">
                    <div style={{ width: '40%' }}>
                        <img src={image} style={{ float: 'right' }} alt='notFoundImage' />
                    </div>
                    <div style={{ width: '45%', float: 'left', marginLeft: '600px', marginTop: "-240px" }}>
                        <h1 style={{ fontWeight: 'bold', fontSize: '34px' }}>Page Not Found</h1>
                        <div style={{ fontSize: '25px', textAlign: 'left' }}>We can't find the page you're looking for.You can either return to the previous page,visit our homepage or contact our support team.</div>
                        <div>
                            <br />
                            <Button variant="outlined" color="primary">
                                <Link to="/" className="button-style">Return to HomePage</Link>
                            </Button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default NotFound;
