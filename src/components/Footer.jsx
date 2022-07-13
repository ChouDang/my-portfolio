import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/LOGOCHOUDANG.png";

import navIcon2 from "../assets/img/nav-icon2.svg";


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center pt-5">
                    {/* <MailchimpForm /> */}
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://fb.com/chou.dang98/" target="_blank" ><img src={navIcon2} /></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
