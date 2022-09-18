import { useState, useEffect } from 'react';
import constants from '../data/api.js';
import axios from 'axios';

const useAllTimes = () => {
    const [allTimes, setAllTimes] = useState(null);
    const {API_URL, NAME, LAST_NAME} = constants;
    const fetchAllTimes = async () => {

        axios.get(`${API_URL}?sort=date&page[number]=1&page[size]=500&filter=resultable[license].profile.first_name:${NAME},resultable[license].profile.last_name:${LAST_NAME},!resultable[license].id:null,style.discipline.id:38,official:true,value>0`).then((response) => {
            setAllTimes(response.data);
          });
        console.log("Llamada AllTimes")

    };

    useEffect(() => {
        fetchAllTimes();
    }, []);

    return { allTimes }
}

export default useAllTimes;