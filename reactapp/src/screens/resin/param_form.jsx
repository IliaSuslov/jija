import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import trn from '../../translation/toolmach';
import FormInput from '../../components/form_input'

const ParamForm = props => {
    const {param = {}, id = "new", onSubmit} = props;
    const [item, setItem] = useState(param)
    const onChange = name => e => {
        const {value} = e.target;
        item[name] = value
        setItem(item)
    }
    const def = item => name => ({
        name,
        value: item[name],
        onChange: onChange(name),
    });

    const defaultInput = def(param);
    const inputs = [
        {
            ...defaultInput("name"),
            label: "Name",
            placeholder: "Enter Name",
            desc: "parameter name",
        },{
            ...defaultInput("method"),
            label: "Method",
            placeholder: "Enter Method",
            desc: "parameter method",
        },{
            ...defaultInput("value"),
            label: "Value",
            placeholder: "Enter Value",
            desc: "Value",
        },
    ].map((v, i) => ({...v, key: `input-${i}`}));

    const Submit = e => {
        e.preventDefault();
        onSubmit(id, item)
        console.log("submit")
    }

    return (<Form onSubmit={Submit}>
        {inputs.map( v => (<FormInput {...v} />))}
        <Button variant="primary" type="submit">
            {id === "new" ? trn`Add` : trn`Update`}
        </Button>
    </Form>)
}

export default ParamForm;
