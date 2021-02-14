import React from 'react';
import Table from 'react-bootstrap/Table'

const ParamsRow = (Param, Index)=>{
  return (<tr key={`param-row-${Index}`}>
      <td>{Index+1}</td>
      <td>{Param.name}</td>
      <td>{Param.value}</td>
    </tr>)
}

const Params = props => {
  const {params=[]}=props;
  return (<Table>
    {params.length!==0 && (<thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Value</th>
      </tr>
    </thead>)}
    <tbody>
    {params.map(ParamsRow)}
    </tbody>
  </Table>)
}

export default Params;
