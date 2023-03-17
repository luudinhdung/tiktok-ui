import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, option = {}) => {
    const respon = await request.get(path, option);
    return respon.data;
};
export default request;
