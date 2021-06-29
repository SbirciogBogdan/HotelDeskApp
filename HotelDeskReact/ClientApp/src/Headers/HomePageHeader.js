import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalUser } from '../Utils/UserContext';

import { Button, Container } from 'reactstrap';
import image from '../Img/bg6.jpg';
import '../Assets/now-ui-kit.css';


function HomePageHeader() {

    const { user } = useGlobalUser();

    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth > 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.tranform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });
    return (
        <>
            <div className="page-header page-header-small">
                <div className="page-header-image"
                    ref={pageHeader}>
                    <img src={image}/>
                </div>
                <div className="content-center">
                    <Container>
                        <h1 className="title">This is my amazing company</h1>
                        <div className="text-center">

                            {user.Auth ? (
                                <>
                                    <Link to="/hotels">
                                        <Button
                                            className="btn-round"
                                            color="info"
                                            size="lg"
                                        >
                                            Book now!
                                        </Button>
                                    </Link>
                                </>
                            ) : (
                                    <>
                                        <Link to="/login">
                                            <Button
                                                className="btn-round"
                                                color="info"
                                                size="lg"
                                            >
                                                Login
                                            </Button>
                                        </Link>
                                        <Link to="/register">
                                            <Button
                                                className="btn-round"
                                                color="info"
                                                size="lg"
                                            >
                                                Register
                                            </Button>
                                        </Link>
                                    </>
                                )}
                        </div>
                    </Container>
                </div>
            </div>
        </>)
}

export default HomePageHeader;