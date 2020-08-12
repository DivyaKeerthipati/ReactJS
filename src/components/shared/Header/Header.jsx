import React from 'react'
import { Row, Col } from 'reactstrap'

import Nav from '../Nav/Nav.jsx'

const Header = (props) => {
    return (
        <>
            <Row>
                <Col>
                    <h1>Task Manager</h1>
                </Col>

                <Col>
                    <Nav />
                </Col>
            </Row>

            <hr />
        </>
    )
}

export default Header