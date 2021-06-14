import React from 'react';


function Footer() {

    const footerStyle = {
        marginTop: "13%",
        position: "absolute",
        height: "60px",
        lineHeight: "60px",
        width: "100%"
    };

    return (

        <footer className="footer footer-default" style={footerStyle}>
            {/* Grid container */}

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2021 Copyright:
                <a className="text-dark" href=""> </a>
            </div>
            {/* Copyright */}
        </footer>

    );

}

export default Footer;