import { useState } from "react";
import axios from 'axios';

export const WeatherApp = () => {
    const [data, setData] = useState<any>([]);
    const [location, setLocation] = useState<string>('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=0c38158b6b158d55212b2262c02aa404`;

    const searchLocation = (event: any) => {
        if (event.key === 'Enter'){
            axios.get(url).then((response)=>{
                setData(response.data);
                console.log(response.data);
                setLocation('');
            })
        }
    }

}
