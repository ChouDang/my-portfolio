import React, { Fragment, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    const [loppNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState("");
    const [delta, SetDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {

        })
    })


    return (
        <Fragment>
            <section className="banner" id="home">
                <Container>
                    <Row className="align-item-center">
                        <Col xs={12} md={6} xl={7}>
                            <span className="tagline">Welcome my portfolio</span>
                            <h1>{"Hi I'm webdecoded"} <span className="wrap">Web developer</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa numquam optio voluptatem, vel itaque. Fugit eos quod error tempora.</p>
                            <button onCanPlay={() => {
                                console.log("connect")
                            }}>Let's connect <ArrowRightCircle size={25} /> </button>
                        </Col>
                        <Col xs={12} md={6} xl={7}>
                            <img src={headerImg} alt="Header Img" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    )
}
