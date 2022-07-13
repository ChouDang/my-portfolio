import React from 'react'
import { Alert, Col, Row } from 'react-bootstrap'

export const Newsletter = ({ subscribe, status, message }) => {

    const handleSubmit = () => {

    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col ls={12} md={16} xl={5} >
                        <h3>Subscribe to our NewsLetter</h3>
                        {status === "sending" && <Alert>Sending...</Alert>}
                        {status === "error" && <Alert variant="danger" >{message}</Alert>}
                        {status === "success" && <Alert variant="success"> {message} </Alert>}
                    </Col>

                    <Col lg={12} md={6} xl={5} >
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input type="email" value={email} onChange={(e) => SetMail(e.target.value)} placeholder="Email" />

                            </div>

                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}
