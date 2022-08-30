import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../App.css";
import TextComponent from "../Text";
import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import Cover from "../../Assets/images/epbi.svg";

class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.reset();
    this.state = {
      random: 0,
      type: ["checkbox", "radio"],
      selected: true,
      text: "",
      balance: 500,
      inputValue: 0,
    };
  }

  handleClick() {
    if (this.state.inputValue > this.state.balance) {
      return;
    }

    if (this.state.balance != 0) {
      this.state.random = 0;
      const min = 1;
      const max = 100;
      const rand = min + Math.random() * (max - min);

      var result = rand;
      var isWin = false;
      var winnings = 0;

      if (result <= 49.5) {
        this.state.text = "Lo Wins";
        !this.state.selected ? (isWin = true) : (isWin = false);
      } else if (result >= 50.5) {
        this.state.text = "Hi Wins";
        this.state.selected ? (isWin = true) : (isWin = false);
      } else {
        this.state.text = "House Wins";
        isWin = false;
      }

      if (isWin)
        winnings = this.state.balance + parseFloat(this.state.inputValue);
      else winnings = this.state.balance - this.state.inputValue;
      this.setState({ random: result, balance: winnings });
      console.log(isWin);
    } else alert("YOU LOSE");
  }

  // reset() {
  //   // Always set the initial state in its own function, so that
  //   // you can trivially reset your components at any point.
  //   this.state = {
  //     inputValue: ''
  //   };
  // }

  updateInputValue(event) {
    const val = event.target.value;
    // ...
    console.log(val.replace(/[|&;$%@"<>()+,]/g, ""));
    this.setState({
      inputValue: val.replace(/\D/g, "", ""),
    });
  }

  handleInput(e) {
    console.log(e.target.value);
    this.state.inputValue = e.target.value;
    this.setState({});
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "#f0f2f5",
        }}
      >
        <Container>
          <Row>
            <Col style={{ backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
              <Col style={{maxWidth:"400px" }}>
                <Col sm={12} style={{ height: "106px", margin: "-28px" }}>
                  <img variant="top" src={Cover} height="auto" width="500vh" />
                </Col>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Playground;
