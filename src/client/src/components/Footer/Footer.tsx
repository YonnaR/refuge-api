import React from "react"
import { Link } from "react-router-dom";
import { StyledFooter } from "./Footer.styles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {
    return <StyledFooter>
            <Row>
                <Col md={5}>
                    <div className="text-center footer-block">
                        <h4>Naviguer:</h4>
                        <ul className="list-unstyled">
                            <li className="active">
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/gites">Gites</Link>
                            </li>
                            <li>
                                <Link to="/restaurant">Restaurant</Link>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col md={1}>
                    
                </Col>
                <Col md={5}>
                    <div className=" text-center footer-block">
                        <h4>Contact:</h4>
                    </div>
                    <div className="footer-contact-info">
                        <div>
                            <i className="fa fa-map-marker"></i>
                                Le Refuge Hulman<br/>
                                Route des sources<br/>
                                Section Saint-Charles<br/>
                                97 134 Saint-Louis de marie-Galante 
                        </div>
                        <div>
                            <a style={{color: "#fff"}} href="tel:+590590970502"><i className="fa fa-phone"></i> 05 90 97 05 02</a>
                        </div>
                        <div>
                            <a style={{color: "#fff"}} href="mailto:refugehulman@gmail.com">
                                <i className="fa fa-envelope-o"></i>
                                refugehulman[at]gmail[dot]com
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
    </StyledFooter>;
}

export default Footer;