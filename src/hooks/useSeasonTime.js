import { useState, useEffect } from 'react';
import constants from '../data/api.js';
import axios from 'axios';

const useSeasonTimes = () => {
    const [seasonTimes, setSeasonTimes] = useState(null);
    const {API_URL, SWIMMER} = constants;

    const fetchSeasonTimes = async () => {
        axios.get(`${API_URL}?sort=value&page[number]=1&page[size]=500&filter=resultable[license].profile.first_name:${SWIMMER.name},resultable[license].profile.last_name:${SWIMMER.last_name},season.id:5828,!resultable[license].id:null,style.discipline.id:38,official:true,value>0`).then((response) => {
            setSeasonTimes(response.data);
          });
        console.log("Llamada SeasonTimes")
    };

    useEffect(() => {
        fetchSeasonTimes();
    }, []);

    return { seasonTimes }
}

export default useSeasonTimes;