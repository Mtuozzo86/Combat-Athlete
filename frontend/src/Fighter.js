import React from "react";
import './Fighter.css'
// import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Fighter = ({image, name, style, age, height, weight, reach, win, loss, gender}) => {
    console.log(name);
    return (   
         <div className='card'>  
        <Card className='container'  >
        <Card.Img variant="top" src="data:image/jpeg;base64,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" />
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
         Fighter Info
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item>Style: {style}</Dropdown.Item>
            <Dropdown.Item>Age: {age}</Dropdown.Item>
            <Dropdown.Item>Height: {height}</Dropdown.Item>
            <Dropdown.Item>Weight: {weight}</Dropdown.Item>
            <Dropdown.Item>Reach: {reach}</Dropdown.Item>
            <Dropdown.Item>Win: {win}</Dropdown.Item>
            <Dropdown.Item>Loss: {loss}</Dropdown.Item>
            <Dropdown.Item>Gender: {gender}</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </Card.Body>
      </Card>
      </div>
    
         
    )
};





export default Fighter;

