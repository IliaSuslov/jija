import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";
import { useStoreon } from 'storeon/react';
import { useLocation } from "react-router-dom";
import { Basket } from 'react-bootstrap-icons'
import { Form } from 'react-bootstrap'

import Layout from '../layout';
import Header from '../navbar';

const ItemRow = (Item, Index) => {
  const { dispatch, compare } = useStoreon('compare');
  const checked = name => compare.items.filter(v => (v.name === name)).length
  return (<tr key={`param-row-${Index}`}>
    <td>
      <Link to={`/resin/${Index}`}>[E]</Link>
      <Form.Check
        type="checkbox"
        label="Add to compare"
        onChange={()=>{}}
        checked={checked(Item.name)}
        onClick={() => { dispatch('add/compare', Item) }}
      />
    </td>
    <td>
      <Link to={`/resin/${Index}`}><img src={Item.image} /></Link>
    </td>
    <td>{Item.name}</td>
    <td>{Item.description}</td>
    <td>{Item.manufacturer}</td>
    <td>
      <a target={Item.manufacturer} href={Item.basket}><Basket /></a>
    </td>
  </tr>)
}
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Resins = props => {
  const { resin = {} } = useStoreon("resin");
  const { items = [] } = resin;
  const query = useQuery();
  const tag = query.get("tag");
  const f = v => tag && v.tags ? v.tags.includes(tag) : true
  return (<Table>
    {items.length !== 0 && (<thead>
      <tr>
        <th>#</th>
        <th>Photo</th>
        <th>Name</th>
        <th>Description</th>
        <th>Manufacturer</th>
        <th>Basket</th>
      </tr>
    </thead>)}
    <tbody>
      {items.filter(f).map(ItemRow)}
    </tbody>
  </Table>)
}
const Screen = props => {
  return (<Layout
    header={() => <Header title={"Select"} />}
    body={Resins}
  />)
}

export default Screen;
