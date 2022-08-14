import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';
import TextComponent from '../Text2';
import React from 'react';
import Sidebar from './sidebar';
import './Dashboard.css';
import Cover from '../../Assets/images/jared.png';


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
                    <div className='d-flex aligh-items-center justify-content-center header' style={{marginTop:"10vh"}}>
                        <Row>
                            <Col sm={6} style={{alignSelf:"center"}}>
                            <TextComponent text={"Hello, I'm Jared,"} fontSize="3.5vh" color={"#1C3B4F"} />
                            <TextComponent text={"Product Designer"} fontSize="5vh" color={"#1C3B4F"} />
                            <TextComponent text={"Based in Philippines"} fontSize="3.5vh"  color={"#1C3B4F"} />

                            </Col>

                            <Col sm={6} style={{alignSelf:"center"}}>
                            <img variant="top" src={Cover} height="auto" width="600vh"/>
                            </Col>
                        </Row>

                    </div>

                </Container>
            </div>
        );
    }
}
export default Welcome;

