import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';
import TextComponent from '../Text';
import React from 'react';
import Sidebar from './sidebar';
import './Dashboard.css';

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Title: 'Software Engineer',
            Name: ['Jared', 'Kristopher', 'Ong'],
        };
    }

    render() {
        return (
            <div>
                <Container>
                    <div className='d-flex aligh-items-center justify-content-center customHeight header'>
                        <Row>
                            <Col sm={12}>
                            <TextComponent text={"Hey there!"} color={"#1C3B4F"} />
                            <TextComponent text={"I'm " + this.state.Name[0]} color={"#1C3B4F"} />

                            </Col>
                        </Row>

                    </div>

                </Container>
            </div>
        );
    }
}
export default Welcome;

