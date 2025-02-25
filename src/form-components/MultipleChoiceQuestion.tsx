import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setAnswer] = useState<string>(options[0]);
    function RefreshAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h2>MultipleChoiceQuestion</h2>
            <Form.Group controlId="answerOptions">
                <Form.Label>Select the right answer: </Form.Label>
                <Form.Select onChange={RefreshAnswer} value={givenAnswer}>
                    {options.map((x: string) => (
                        <option key={x} value={x}>
                            {x}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {givenAnswer === expectedAnswer ?
                <div>✔️</div>
            :   <div>❌</div>}
        </div>
    );
}
