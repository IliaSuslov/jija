import React, { useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import Layout from '../layout';
import Header from '../navbar';
import { useStoreon } from 'storeon/react';


const Row = items => (name, i) => {
    const values = items.map(v => (v.params ? v.params.map(v => (v.name === name ? v.value : "")) : null))
    return (
        <tr key={`row-${i}`}>
            <td>{name}</td>
            {values.map((v, i) => <td key={`value-${i}`} >{v}</td>)}
        </tr >
    )
}

function CompareTab() {
    const { dispatch, compare } = useStoreon('compare');
    const { items, names } = compare;
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th style={{ width: '5%' }}>Name</th>
                    {items.map((v, i) => <th key={i}>{v.name}
                        <Button
                            variant="outline-danger"
                            onClick={() => { dispatch('add/compare', v) }}>
                            Delete
                        </Button></th>)}
                </tr>
            </thead>
            <tbody>
                {items.length !== 0 ? Object.keys(names).map(Row(items)) : <tr><td>No resin for comparison</td></tr>}
            </tbody>
        </Table>
    )
}

const Compare = () => {
    return (<Layout
        header={() => <Header title={"Compare"} />}
        body={CompareTab}
    />)
}
export default Compare