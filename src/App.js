import React from 'react';
import Countdown from 'react-countdown-now';
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";

function countdownRenderer(props) {
    let elems = ["days", "hours", "minutes", "seconds"].map((unit) => {
        return (
            <span key={unit}>
                <span
                    className="text-primary font-weight-bold"
                    style={{fontSize: "2.5rem"}}
                >{props[unit]}</span>
                <span>&nbsp;{unit}&nbsp;</span>
            </span>
        )
    });
    return (
        <span>
            {elems}
        </span>
    )
}

function CountdownCard(props) {
    return (
        <Card className="mt-3">
            <Card.Header>
                <span className="font-weight-bold">{props.name}</span>
                <span className="float-right">{props.date.toLocaleTimeString()} {props.date.toLocaleDateString()}</span>
            </Card.Header>
            <Card.Text className="text-center">
                <Countdown date={props.date} renderer={countdownRenderer}/>
                <br/>
                <span style={{fontSize: "5rem"}}>{props.emoji}</span>
            </Card.Text>
        </Card>
    )
}

function App() {
    return (
        <div>
            <Navbar bg="light">
                <Navbar.Brand>WhenWillBenAndNealVisit.Me?</Navbar.Brand>
            </Navbar>
            <Container>
                <CountdownCard
                    name="Ben and Neal arrive"
                    date={new Date("2019-05-25T16:11:00-07:00")}
                    emoji="🎉"
                />
                <CountdownCard
                    name="Fancy dinner"
                    date={new Date("2019-05-26T16:30:00-07:00")}
                    emoji="🍽️"
                />
                <CountdownCard
                    name="Ben and Neal depart"
                    date={new Date("2019-05-28T16:38:00-07:00")}
                    emoji="😭"
                />
            </Container>
        </div>
    );
}

export default App;
