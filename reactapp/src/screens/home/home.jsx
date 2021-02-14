import React from 'react';

import Layout from '../layout'
import Menu from '../navbar';
const Header = ()=><Menu title={"Selection"}/>
const Footer = ()=><div>footer</div>
const Body = ()=><div>body</div>
const Home = props=>{
    return (<Layout
        header={Header}
        body={Body}
        footer={Footer}
    />)
}

export default Home
