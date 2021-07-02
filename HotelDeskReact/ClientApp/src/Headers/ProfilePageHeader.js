import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalUser } from '../Utils/UserContext';
import { useState } from 'react';
import { Button, Container } from 'reactstrap';
import image from '../Img/bg6.jpg';
import '../Assets/now-ui-kit.css';


function HomePageHeader(props) {

    const { user } = useGlobalUser();
    const [userId, setUserId] = useState();

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

    React.useEffect(() => {
        setUserId(props.userId);
    }, [props]);

    return (
            <>
                <div
                    className="page-header clear-filter page-header-small"
                    filter-color="blue"
                >
                    <div
                        className="page-header-image"

                        ref={pageHeader}
                    ></div>
                    <Container>
                    <div className="photo-container">
                        <img alt="..." src={image}></img>
                        </div>
                    <h3 className="title">{ props.userData.User}</h3>
                        <p className="category">Photographer</p>
                        <div className="content">
                            <div className="social-description">
                                <h2>26</h2>
                                <p>Comments</p>
                            </div>
                            <div className="social-description">
                                <h2>26</h2>
                                <p>Comments</p>
                            </div>
                            <div className="social-description">
                                <h2>48</h2>
                                <p>Bookmarks</p>
                            </div>
                        </div>
                    </Container>
                </div>
            </>
            )
}

export default HomePageHeader;