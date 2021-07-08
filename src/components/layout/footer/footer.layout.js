import React from 'react';
import SocialsFooterComponent from './components/socialsFooter.component';

const Footer = (props) => {
    return (
        <footer className="footer">
            <h6 className="text-inverse text-center">Bryan Aguilar</h6>
            <SocialsFooterComponent/>
            <h6 className="text-inverse text-center">| Todos los derechos reservados</h6>
        </footer>
    )
}

export default Footer;
