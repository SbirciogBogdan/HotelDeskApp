import React from 'react';
import { useGlobalUser } from '../Utils/UserContext';
import ProfilePageHeader from '../Headers/ProfilePageHeader';
import {
    Container,
    Button,
    UncontrolledTooltip
} from 'reactstrap';

function ProfilePage() {

    const { user } = useGlobalUser();


    return (
        <>
            <ProfilePageHeader />
            <div className="wrapper">
                <ProfilePageHeader />
                <div className="section">
                    <Container>
                        <div className="button-container">
                            <Button className="btn-round" color="info" size="lg">
                                Follow
              </Button>
                            <Button
                                className="btn-round btn-icon"
                                color="default"
                                id="tooltip515203352"
                                size="lg"
                            >
                                <i className="fab fa-twitter"></i>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip515203352">
                                Follow me on Twitter
              </UncontrolledTooltip>
                            <Button
                                className="btn-round btn-icon"
                                color="default"
                                id="tooltip340339231"
                                size="lg"
                            >
                                <i className="fab fa-instagram"></i>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip340339231">
                                Follow me on Instagram
              </UncontrolledTooltip>
                        </div>
                        <h3 className="title">About me</h3>
                        <h5 className="description">
                            An artist of considerable range, Ryan — the name taken by
                            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                            and records all of his own music, giving it a warm, intimate feel
                            with a solid groove structure. An artist of considerable range.
            </h5>
                    </Container>
                </div>
            </div>
        </>

    )
}

export default ProfilePage;
