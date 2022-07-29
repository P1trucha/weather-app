import React, { useState } from "react";
import axios from 'axios';
import { WeatherData } from './Interfaces/WeatherInterface';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';


export const WeatherApp = () => {
    const [data, setData] = useState<WeatherData[]>([]);
    const [location, setLocation] = useState<string>('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=0c38158b6b158d55212b2262c02aa404`;

    const searchLocation = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data);
                console.log(response.data);
                setLocation('');
            })
        }
    }

    return <>
        <Container fluid>
            <Row>
                <Col>
                     
                    <div className="input-search-weather mt-5 d-flex flex-grow justify-content-center  align-items-baseline">
                     <p className = "text-muted">Right now in </p>   
                        <input className="input-effect"
                            value={location}
                            onChange={event => setLocation(event.target.value)}
                            onKeyPress={searchLocation}
                            type="text"/>
                        <span className ="border"></span>
                        <p className ="text-muted">It's </p>
                    </div>
                </Col>

            </Row>


        </Container>





    </>





}


export default WeatherApp;