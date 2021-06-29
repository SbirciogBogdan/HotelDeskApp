import React from 'react';
import { Container } from 'reactstrap';

function Footer() {


    return (

        <footer className="footer footer-default">
            <Container>
                <ul>
                    <li>
                        <a href="https://codecool.com/ro/?utm_source=google&utm_medium=ppc&utm_campaign=RO-smart-campaign">
                            CodeCool
                        </a>
                    </li>
                    <li>
                        <a href="">
                            About Me
                        </a>
                    </li>
                </ul>
                <div className="copyright" id="copyright">
                    @ {new Date().getFullYear()}, Coded by{" "}
                    <a href="https://github.com/SbirciogBogdan">
                        Sbirciog Bogdan-Ovidiu
                    </a>
                </div>
            </Container>
        </footer>

    );

}

export default Footer;