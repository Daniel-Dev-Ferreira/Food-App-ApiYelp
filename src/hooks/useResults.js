import { useState, useEffect } from 'react';
import yelp from '../api/Yelp';

export default () => {

    // solicitação para Api do Yelp
    // pegando ob da api
    const [result, setResult] = useState([]);
    // estado para monstrar o erro na tela
    const[errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'rio de janeiro'
            }
        });
        setResult(response.data.businesses);
    } catch (error) {
        setErrorMessage('Something went wrong')    
    }
    };

    // Call searchApi when component is first rendered
    //searchApi('pasta');
    useEffect( () => {
        searchApi('pasta');
    }, []);

    return [searchApi, result, errorMessage];
};