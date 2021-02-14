import React, {useEffect, useState} from 'react';
import {useStoreon} from 'storeon/react';
import {useParams} from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import trn from '../../translation/toolmach';
import FormInput from '../../components/form_input';

const ResinForm = props => {
    let {id} = useParams();
    const {dispatch, resin} = useStoreon('resin');
    const State = id !== 'new' ? resin.items[id]:{}
    const [item, setItem] = useState(State)

    const onChange = name => e => {
        const {value}=e.target;
        item[name]=value
        setItem(item)
    }

    const onSubmit = e => {
        e.preventDefault();
        dispatch("resin/submit", {id, item});
    }

    const def = item => name =>({
        name,
        value: item[name],
        onChange: onChange(name),
    });

    const defaultInput=def(State);

    const inputs=[
        {
            ...defaultInput("name"),
            label:"Name",
            placeholder:"Enter Name",
            desc:"manufacturer name",
        },
        {
            ...defaultInput("description"),
            label:"Description",
            placeholder:"Enter Description",
        },
        {
            ...defaultInput("manufacturer"),
            label:"Manufacturer",
            placeholder:"Enter Manufacturer",
        },
        {
            ...defaultInput("site"),
            label:"Site",
            placeholder:"Enter Site",
        },
        {
            ...defaultInput("image"),
            label:"Image",
            placeholder:"Enter Image",
        },
        {
            ...defaultInput("characteristics"),
            label:"Characteristics",
            placeholder:"Enter Characteristics",
        },
        {
            ...defaultInput("tags"),
            label:"Tags",
            placeholder:"Enter Tags",
        },
    ].map((v,i)=>({...v, key:`input-${i}`}));

    return (<Form onSubmit={onSubmit}>
        {inputs.map( v => (<FormInput {...v} />))}
        <Button variant="primary" type="submit">
            {id === "new" ? trn`Add` : trn`Update`}
        </Button>

    </Form>)
}

export default ResinForm
