import React, { useState } from "react";

const Contact = (props) => {
    const [name, setName] = useState(props.name);
    const [updatedName, setUpdatedName] = useState(name);

    const handleChange = (e) => {
        setName(e.target.value);
        console.log(name);
    }
    
    const handleClick = () => {
        setUpdatedName(name);
        console.log(`Updated name: ${updatedName}`);
    }

    return (<div>
        <p>
            Contato teste
        </p>
        <input id="name" onChange={handleChange} defaultValue={props.name} />
        <button onClick={handleClick}>Click here!</button>
    </div>);
}

export { Contact };