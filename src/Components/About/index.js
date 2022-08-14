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
            <div style={{ background: "#D3D3D3" , width:"100%"}}>
                <Container>
                    <Row style={{ justifyContent: 'center', display:'flex' }}>
                        <Col sm={4} style={{ minWidth:"50vh" }}  className="bg-main" >
                            <Container>
                                <div style={{ marginTop: "100px" }} className="title-name title">{this.state.Name[0]}</div>
                                <div className="title-name title">{this.state.Name[1]} </div>
                                <div className="title-name title">{this.state.Name[2]} </div>
                                <div className="sub-title-name sub-title">{this.state.Title}</div>
                                <div style={{ marginTop: "50px" }}></div>
                                <hr class="half-rule" />
                                <TextComponent text={"PROFESSIONAL GOALS:"} fontSize={20} color={"#1C3B4F"} spacing={true}/>

                                <div style={{marginRight:"15vh"}}>
                                <TextComponent text={this.state.Goals} fontSize={15} />
                                </div>
                                <div style={{ marginTop: "50px" }}></div>
                                <TextComponent text={"PROFESSIONAL SKILLS:"} fontSize={20} color={"#1C3B4F"} spacing={true}/>
                                <TextComponent text={"• PHP"} fontSize={15} />
                                <TextComponent text={"• JavaScript"} fontSize={15} />
                                <TextComponent text={"• React Native"} fontSize={15} />
                                <TextComponent text={"• ASP.Net"} fontSize={15} />
                                <TextComponent text={"• Figma"} fontSize={15} />
                                <TextComponent text={"• Adobe XD"} fontSize={15} />


                                <div style={{ marginTop: "50px" }}></div>
                                <TextComponent text={"CONTACT DETAILS:"} fontSize={20} color={"#1C3B4F"} spacing={true}/>
                                <TextComponent text={"Blk 15 Lot 10 Avecilla Cor. Moran st. BFRV Las Piñas "} fontSize={15} />
                                <TextComponent text={"Cell: +63 976 103 7705"} fontSize={15} />
                                <TextComponent text={"kristopherong@yahoo.com"} fontSize={15} />
                                <div style={{ marginTop: "50px" }}></div>
                            </Container>

                        </Col>
                        <Col sm={4} style={{ background: "white", minWidth:"50vh" }}>
                            <div style={{ marginTop: "100px" }}></div>
                            <TextComponent text={"EMPLOYMENT HISTORY:"} fontSize={20} color={"#E7762B"} spacing={true}/>
                            <hr class="whole-rule" />
                            <TextComponent text={"SOFTWARE ENGINEER"} fontSize={20} color={"#1C3B4F"} spacing={true}/>
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
                            <div style={{ marginTop: "50px" }}></div>
                            <TextComponent text={"SOFTWARE DEVELOPER"} fontSize={20} color={"#1C3B4F"} spacing={true}/>
                            <TextComponent text={"Antivo technologies Inc."} fontSize={15} color={"#1C3B4F"} fontWeight={"normal"} />
                            <TextComponent text={"June 2019- Dec 2020"} fontSize={15} color={"#1C3B4F"} fontWeight={"normal"} />
                            <Container>
                                <TextComponent text={'• Modified existing applications  (risk and compliance system)'} fontSize={15} color={"#E7762B"} fontWeight={"normal"} />
                                <TextComponent text={'• Developed a travel-guide app that aims to help travelers and travelers at heart find and explore the perfect destinations and attractions that would suit their preferences.'} fontSize={15} color={"#E7762B"} fontWeight={"normal"} />
                                <div style={{ marginLeft: "20px" }}>
                                    <TextComponent text={'o Developed using ASP.net  Web forms, API.Net Web API'} fontSize={15} color={"#E7762B"} fontWeight={"normal"} />
                                    <TextComponent text={'o Database: MS SQL'} fontSize={15} color={"#E7762B"} fontWeight={"normal"} />
                                    <TextComponent text={'o Front End: Javascript, Bootstrap'} fontSize={15} color={"#E7762B"} fontWeight={"normal"} />
                                </div>
                            </Container>
                            <div style={{ marginTop: "100px" }}></div>
                            <TextComponent text={"ACADEMIC BACKGROUND:"} fontSize={20} color={"#E7762B"} spacing={true}/>
                            <hr class="whole-rule" />
                            <TextComponent text={"UNIVERSITY OF PERPETUAL HELP SYSTEM DALTA"} fontSize={20} color={"#1C3B4F"} />
                            <TextComponent text={'Class of 2019'} fontSize={15} color={"#E7762B"} fontWeight={"normal"} />
                                <TextComponent text={'Bachelor of Science in Computer Science'} fontSize={15} color={"#E7762B"} fontWeight={"normal"} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default About;


