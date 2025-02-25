import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoubleHalfProps {
    dhValue: number;
    setDhValue: (newValue: number) => void;
}

function Halve({ dhValue, setDhValue }: DoubleHalfProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(dhValue * 0.5);
            }}
        >
            Halve
        </Button>
    );
}

function Double({ dhValue, setDhValue }: DoubleHalfProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(dhValue * 2);
            }}
        >
            Double
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h2>DoubleHalf</h2>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Halve dhValue={dhValue} setDhValue={setDhValue}></Halve>
            <Double dhValue={dhValue} setDhValue={setDhValue}></Double>
        </div>
    );
}
