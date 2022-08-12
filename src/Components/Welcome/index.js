import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';
import TextComponent from '../Text';
import React from 'react';


class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Title: 'Software Engineer',
            Name: ['Jared', 'Kristopher', 'Ong'],
            Goals: 'To work in a company where I can utilize, expand and share my knowledge and ability to a challenging position in office where I can achieve professional growth for the best interest of the company.'
        };
    }

    render() {



        return (
            <div>
                <Container>
                    <div className='d-flex aligh-items-center justify-content-center customHeight'>
                        <Row>
                            {/* <Col sm={12}>
                    </Col> */}
                            <TextComponent text={"Hey there!"} fontSize={35} color={"#1C3B4F"} />
                        </Row>

                    </div>

                </Container>
            </div>
        );
    }
}
export default Welcome;

