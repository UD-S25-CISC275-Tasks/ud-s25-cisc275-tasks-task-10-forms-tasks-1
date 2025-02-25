import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [neededAttempts, setReqAttemps] = useState<string>("0");
    return (
        <div>
            <h2>GiveAttempts</h2>
            <div>Remaining attempts: {attempts}</div>
            <Form.Group controlId="formAttemps">
                <Form.Label>Attempts: </Form.Label>
                <Form.Control
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setReqAttemps(event.target.value);
                    }}
                    type="number"
                    value={neededAttempts}
                />
            </Form.Group>
            <div>
                <Button
                    onClick={() => {
                        if (
                            neededAttempts &&
                            parseInt(neededAttempts, 10) > 0
                        ) {
                            setAttempts(
                                attempts + parseInt(neededAttempts, 10),
                            );
                        }
                    }}
                >
                    gain
                </Button>
                <Button
                    disabled={attempts <= 0}
                    onClick={() => {
                        setAttempts(attempts - 1);
                    }}
                >
                    use
                </Button>
            </div>
        </div>
    );
}
