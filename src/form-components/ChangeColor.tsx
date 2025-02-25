import React, { useState } from "react";
import { Form } from "react-bootstrap";

const STANDARD_COLORS = [
    "white",
    "grey",
    "black",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(STANDARD_COLORS[0]);
    function UpdateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h2>ChangeColor</h2>
            <div>
                Chosen color:{" "}
                {
                    <span
                        data-testid={"colored-box"}
                        style={{ backgroundColor: color }}
                    >
                        {color}
                    </span>
                }
            </div>
            <div>
                {STANDARD_COLORS.map((x: string) => (
                    <Form.Check
                        inline
                        key={x}
                        name="colors"
                        onChange={UpdateColor}
                        type="radio"
                        value={x}
                    />
                ))}
            </div>
        </div>
    );
}
