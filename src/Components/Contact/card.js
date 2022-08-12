import { Button, Card } from "react-bootstrap";

function CardComponent(props) {
    return (<Card style={{ width: '50vh', maxWidth: "100%", marginBottom: "5vh" }}>
        <Card.Img variant="top" src={props.Cover} />
        <Card.Body>
            <Card.Title>{props.Title}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    )
}

export default CardComponent;

