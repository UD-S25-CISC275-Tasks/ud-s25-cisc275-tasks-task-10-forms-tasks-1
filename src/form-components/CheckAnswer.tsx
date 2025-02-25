import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setAnswer] = useState<string>("");
    function UpdateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h2>CheckAnswer</h2>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer: </Form.Label>
                <Form.Control onChange={UpdateAnswer} value={givenAnswer} />
            </Form.Group>
            {givenAnswer === expectedAnswer ?
                <div>✔️</div>
            :   <div>❌</div>}
        </div>
    );
}
