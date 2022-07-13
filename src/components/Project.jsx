import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/e-learning.png";
import projImg2 from "../assets/img/movie.png";
import projImg3 from "../assets/img/phone.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from './ProjectCard';
import "animate.css";
import TrackVisibility from 'react-on-screen';
export const Project = () => {

    const projects = [
        {
            title: "E-LEARNING",
            description: `Website: tn-elearning-app.vercel.app`,
            imgUrl: projImg1,
        },
        {
            title: "BOOKING CHAIR MOVIE",
            description: "Website: booking-movie-chair.surge.sh",
            imgUrl: projImg2,
        },
        {
            title: "CYBER PHONE",
            description: "Website: cyberphone.surge.sh",
            imgUrl: projImg3,
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Project</h2>
                                    <p>Being patientand responsible for working help me implement completely assinged tasks.</p>
                                </div>}
                        </TrackVisibility>

                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">CYBERSOFT</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">NEXT</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >
                                        NEXT
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">

                                </Tab.Pane>

                                <Tab.Pane eventKey="third">

                                </Tab.Pane>

                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}>

            </img>

        </section>
    )
}
