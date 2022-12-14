import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../App.css";
import TextComponent from "../Text";
import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

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
        }}
      >
        <Container>
          <div style={{ fontSize: "10vh" }}>
            {this.state.random.toFixed(2) + " " + this.state.text}
          </div>
          <div className="mb-2">
            <Button
              variant={this.state.selected ? "primary" : "secondary"}
              onClick={() => this.setState({ selected: !this.state.selected })}
              size="lg"
            >
              Hi
            </Button>{" "}
            <Button
              variant={this.state.selected ? "secondary" : "primary"}
              onClick={() => this.setState({ selected: !this.state.selected })}
              size="lg"
            >
              Lo
            </Button>
          </div>
          <Col>
            <Col xs={3}>
              <InputGroup className="m-3">
                <InputGroup.Text>$</InputGroup.Text>
                <InputGroup.Text>Place bet</InputGroup.Text>
                <Form.Control
                  aria-label="Dollar amount (with dot and two decimal places)"
                  value={this.state.inputValue}
                  onChange={(event) => this.updateInputValue(event)}
                />
              </InputGroup>
            </Col>
            <Col xs={7}>
              <Col>
                <Col>
                  <Button
                    style={{ margin: "5px" }}
                    variant="outline-primary"
                    value="50"
                    onClick={(e) => this.handleInput(e, "value")}
                  >
                    50
                  </Button>{" "}
                  <Button
                    style={{ margin: "5px" }}
                    variant="outline-primary"
                    value="100"
                    onClick={(e) => this.handleInput(e, "value")}
                  >
                    100
                  </Button>{" "}
                  <Button
                    style={{ margin: "5px" }}
                    variant="outline-primary"
                    value="200"
                    onClick={(e) => this.handleInput(e, "value")}
                  >
                    200
                  </Button>{" "}
                </Col>
                <Col>
                  <Button
                    style={{ margin: "5px" }}
                    variant="outline-primary"
                    value="500"
                    onClick={(e) => this.handleInput(e, "value")}
                  >
                    500
                  </Button>{" "}
                  <Button
                    style={{ margin: "5px" }}
                    variant="outline-primary"
                    value={this.state.balance}
                    onClick={(e) => this.handleInput(e, "value")}
                  >
                    All-in
                  </Button>{" "}
                </Col>
              </Col>
            </Col>
            <div style={{ fontSize: "5vh" }}>
              {"Balance:" + " " + this.state.balance}
            </div>
          </Col>
          <Button onClick={this.handleClick.bind(this)}>Roll</Button>
        </Container>
      </div>
    );
  }
}
export default Playground;
