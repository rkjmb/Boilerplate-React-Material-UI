import axios from 'axios';

const baseURL = 'www.xyz.com'

const getAll = async () => {
    try {
        const repo = await axios.get(baseURL);
        return repo.data;
    } catch (error) {
        console.log(error)
    }
}


export { getAll }