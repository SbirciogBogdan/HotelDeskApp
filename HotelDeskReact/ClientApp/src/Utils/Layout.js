import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Footer from '../Common/Footer';
import NavMenu from '../Common/NavMenu';


export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavMenu></NavMenu>
                <Container>
                    {this.props.children}
                </Container>
                <Footer></Footer>
            </div>
        );
    }
}
