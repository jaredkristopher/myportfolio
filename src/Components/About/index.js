import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';
import TextComponent from '../Text';
import React from 'react';


class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Title: 'Software Engineer',
            Name: ['Jared', 'Kristopher', 'Ong'],
            Goals: 'To work in a company where I can utilize, expand and share my knowledge and ability to a challenging position in office where I can achieve professional growth for the best interest of the company.',
        };
    }

    render() {



        return (
            <div style={{ background: "#D3D3D3" }}>
                <Container>
                    <Row style={{ justifyContent: 'center' }}>

                        <Col sm={3} className="bg-main" >
                            <Container>
                                <h1 style={{ fontSize: "50px", marginTop: "100px" }} className="title-name">{this.state.Name[0]}</h1>
                                <h1 style={{ fontSize: "50px" }} className="title-name">{this.state.Name[1]} </h1>
                                <h1 style={{ fontSize: "50px" }} className="title-name">{this.state.Name[2]} </h1>
                                <div style={{ fontSize: "25px" }} className="sub-title-name">{this.state.Title}</div>
                                <div style={{ marginTop: "50px" }}></div>
                                <hr class="half-rule" />
                                <TextComponent text={"PROFESSIONAL GOALS:"} fontSize={20} color={"#1C3B4F"} />
                                <TextComponent text={this.state.Goals} fontSize={15} />
                                <div style={{ marginTop: "50px" }}></div>
                                <TextComponent text={"PROFESSIONAL SKILLS:"} fontSize={20} color={"#1C3B4F"} />
                                <TextComponent text={"• PHP"} fontSize={15} />
                                <TextComponent text={"• JavaScript"} fontSize={15} />
                                <TextComponent text={"• React Native"} fontSize={15} />
                                <div style={{ marginTop: "50px" }}></div>
                                <TextComponent text={"CONTACT DETAILS:"} fontSize={20} color={"#1C3B4F"} />
                                <TextComponent text={"Blk 15 Lot 10 Avecilla Cor. Moran st. BFRV Las Piñas "} fontSize={15} />
                                <TextComponent text={"Cell: +63 976 103 7705"} fontSize={15} />
                                <TextComponent text={"kristopherong@yahoo.com"} fontSize={15} />
                                <div style={{ marginTop: "50px" }}></div>
                            </Container>

                        </Col>
                        <Col sm={4} style={{ background: "white", }}>
                            <div style={{ marginTop: "100px" }}></div>
                            <TextComponent text={"EMPLOYTMENT HISTORY"} fontSize={20} color={"#E7762B"} />
                            <hr class="whole-rule" />
                            <TextComponent text={"SOFTWARE ENGINEER"} fontSize={20} color={"#1C3B4F"} />
                            <TextComponent text={"Cyberland Consultancy Pte. Ltd."} fontSize={15} color={"#1C3B4F"} fontWeight={"normal"} />
                            <TextComponent text={"Dec  2020 - Present"} fontSize={15} color={"#1C3B4F"} fontWeight={"normal"} />
                            <Container>
                                <TextComponent text={'• Developed an Attendance Application for Early Childhood Education can be applicable for Higher Education also.'} fontSize={15} color={"#E7762B"} fontWeight={"normal"} />
                                <div style={{ marginLeft: "20px" }}>
                                    <TextComponent text={'o Developed using React Native in Android and IOS Version.'} fontSize={15} color={"#E7762B"} fontWeight={"normal"} />
                                    <TextComponent text={'o Database: phpMyAdmin, API Integration: PHP is used to return data in JSON.'} fontSize={15} color={"#E7762B"} fontWeight={"normal"} />
                                    <TextComponent text={'o Firebase for Background and Foreground Handler Notifications'} fontSize={15} color={"#E7762B"} fontWeight={"normal"} />
                                </div>
                                <TextComponent text={'• Being involved in front and back-end support to client organization. Maintain a database by using phpMyAdmin. Maintained codes in the server side using FTP Application such as FileZilla for Mac and WinSCP for Windows.'} fontSize={15} color={"#E7762B"} fontWeight={"normal"} />
                                <TextComponent text={'• Develop and maintain software applications.'} fontSize={15} color={"#E7762B"} fontWeight={"normal"} />
                                <TextComponent text={'• Design and Create prototypes for clients using AdobeXD and Figma.'} fontSize={15} color={"#E7762B"} fontWeight={"normal"} />
                            </Container>



                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default About;

