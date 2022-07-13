import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/react-logo.png";
import meter2 from "../assets/img/front-end.png";
import meter3 from "../assets/img/bootstrap-logo.png";
import meter4 from "../assets/img/clipart2918729.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Try to Be Better.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider" >
                                <div className="item">
                                    <img style={{ height: 160, width: 320 }} src={meter1} alt="Image" />
                                    <h5>ReactJS</h5>
                                </div>

                                <div className="item">
                                    <img src={meter4} alt="Image" />
                                    <h5>Ant Design</h5>
                                </div>

                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Bootstrap</h5>
                                </div>

                                <div className="item">
                                    <img style={{ height: 160 }} src={meter2} alt="Image" />
                                    <h5>HTML/CSS/JS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}
