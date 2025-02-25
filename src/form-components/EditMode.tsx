import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isStudent, setStudent] = useState<boolean>(true);
    const [inEditMode, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    function UpdateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function UpdateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }
    function UpdateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <h2>EditMode</h2>
            <Form.Check
                checked={inEditMode}
                id="in-edit-check"
                label="edit"
                onChange={UpdateEdit}
                type="switch"
            />
            {!inEditMode && (
                <div>
                    {name} is {isStudent ? "a" : "not a"} student.
                </div>
            )}
            {inEditMode && (
                <Form.Group controlId="formStudentName">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control onChange={UpdateName} value={name} />
                </Form.Group>
            )}
            {inEditMode && (
                <Form.Check
                    checked={isStudent}
                    id="is-student-check"
                    label="student"
                    onChange={UpdateStudent}
                    type="checkbox"
                />
            )}
        </div>
    );
}
