import React from 'react';
import { useStoreon } from 'storeon/react';

const Json = () => {
    const { resin } = useStoreon('resin');
    return <pre>{JSON.stringify({resin}, null, "  ")}</pre>
}
export default Json;
