import { useState, useEffect } from 'react';
import constants from '../constants';
import axios from 'axios';

const useAllTimes = () => {
    const [allTimes, setAllTimes] = useState(null);
    const {API_URL, NAME, LAST_NAME} = constants;
    const fetchAllTimes = async () => {

        axios.get(`${API_URL}?sort=value&page[number]=1&page[size]=200&filter=resultable[license].profile.first_name:${NAME},resultable[license].profile.last_name:${LAST_NAME},season.id:4919,!resultable[license].id:null,style.discipline.id:38,official:true,value%3E0`).then((response) => {
            setAllTimes(response.data);
          });

    };

    useEffect(() => {
        fetchAllTimes();
    }, []);

    return { allTimes }
}

export default useAllTimes;