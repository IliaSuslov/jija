import React from 'react';
import Form from 'react-bootstrap/Form';
import trn from '../translation/toolmach';

const FormInput = props => {
    return (<Form.Group controlId={`for${props.name}`}>
        <Form.Label>{trn(props.label)}</Form.Label>
        <Form.Control
            placeholder={trn(props.placeholder)}
            autoComplete="off"
            name={props.name}
            defaultValue={props.value}
            onChange={props.onChange}
        />
        <Form.Text className="text-muted">
            {trn(props.desc)}
        </Form.Text>
    </Form.Group>)
}

export default FormInput;
