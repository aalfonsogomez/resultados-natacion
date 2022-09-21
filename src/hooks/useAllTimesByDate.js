import { useState, useEffect } from 'react';
import constants from '../data/api.js';
import axios from 'axios';

const useAllTimesByDate = () => {
    const [allTimesByDate, setAllTimesByDate] = useState(null);
    const { API_URL, NAME, LAST_NAME } = constants;
    const fetchAllTimes = async () => {

        axios.get(`${API_URL}?sort=-date&page[number]=1&page[size]=500&filter=resultable[license].profile.first_name:${NAME},resultable[license].profile.last_name:${LAST_NAME},!resultable[license].id:null,style.discipline.id:38,official:true,value>0`).then((response) => {
            setAllTimesByDate(response.data);
        });
        console.log("Llamada AllTimes By Date")

    };

    useEffect(() => {
        fetchAllTimes();
    }, []);

    return { allTimesByDate }
}

export default useAllTimesByDate;