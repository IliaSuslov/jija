import React, {useState} from 'react';
import {useStoreon} from 'storeon/react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {useParams} from "react-router-dom";
import Button from 'react-bootstrap/Button';

import Layout from '../layout';
import Header from '../navbar';
import Form from './resin_form';
import Params from './params';
import ParamForm from './param_form';
import trn from '../../translation/toolmach';

const ResinTab = props => {
    let {id} = useParams();
    const {dispatch, resin} = useStoreon('resin');
    const [key, setKey] = useState('Main');
    const State = id !== 'new' ? resin.items[id].params:[];
    const [params, setParams] = useState(State);

    const update = e => {
        e.preventDefault();
        dispatch("resin/submit", {id, item:{params}});
    }

    const onSubmit = (paramID, param) => {
        console.log({paramID, param})
        if (paramID==="new"){
            setParams([...params, param]);
            return
        }
        params[paramID]=param;
        setParams(params);
    }

    return (<Tabs
        id="resin-tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}>
        <Tab eventKey="Main" title={trn`Main`}>
            <Form/>
        </Tab>
        <Tab eventKey="params" title={trn`Params`}>
            <Row>
                <Col>
                    <Params params={params}/>
                    <Button variant="primary" type="button" onClick={update}>
                        {trn`Update`}
                    </Button>
                </Col>
                <Col><ParamForm onSubmit={onSubmit}/></Col>
            </Row>
        </Tab>
    </Tabs>);
}

const Resin = props => {
    return (<Layout
        header={() => <Header title={"Select"}/>}
        body={ResinTab}
    />)
}

export default Resin
